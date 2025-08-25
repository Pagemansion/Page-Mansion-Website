// src/app/api/form-submission/route.ts
import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sendEmail' // Import your helper function

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { form, submissionData } = body

    if (!form || !submissionData) {
      return NextResponse.json(
        { error: 'Form ID and submission data are required' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    const { docs: forms } = await payload.find({
      collection: 'forms',
      where: {
        or: [
          { id: { equals: form } },
          { title: { equals: form } },
          { title: { equals: 'Contact Form' } },
        ],
      },
      limit: 1,
    })

    if (!forms.length) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 })
    }

    const formDoc = forms[0]

    const formattedSubmissionData = Object.entries(submissionData).map(([field, value]) => ({
      field,
      value: String(value),
    }))

    const submission = await payload.create({
      collection: 'custom-form-submissions',
      data: {
        form: formDoc.id,
        submissionData: formattedSubmissionData,
      },
    })

    // --- EMAIL NOTIFICATION LOGIC ---
    if (formDoc.emails && formDoc.emails.length > 0) {
      for (const emailConfig of formDoc.emails) {
        let emailTo = emailConfig.emailTo
        let subject = emailConfig.subject

        // Construct email message from form data
        let messageContent = ''

        // If there's a configured message, try to use it, otherwise construct from submission data
        if (emailConfig.message) {
          // For now, create a simple HTML representation of the rich text
          // You might want to implement proper Lexical to HTML conversion later
          messageContent = `
            <h2>New Form Submission: ${formDoc.title}</h2>
            <div style="margin: 20px 0;">
              ${Object.entries(submissionData)
                .map(([field, value]) => `<p><strong>${field}:</strong> ${String(value)}</p>`)
                .join('')}
            </div>
          `
        } else {
          // Fallback: construct message from submission data
          messageContent = `
            <h2>New Form Submission: ${formDoc.title}</h2>
            <div style="margin: 20px 0;">
              ${Object.entries(submissionData)
                .map(([field, value]) => `<p><strong>${field}:</strong> ${String(value)}</p>`)
                .join('')}
            </div>
          `
        }

        // Replace placeholders in email fields
        Object.entries(submissionData).forEach(([field, value]) => {
          const placeholder = `{{${field}}}`
          emailTo = emailTo.replace(new RegExp(placeholder, 'g'), String(value))
          subject = subject.replace(new RegExp(placeholder, 'g'), String(value))
          messageContent = messageContent.replace(new RegExp(placeholder, 'g'), String(value))
        })

        // Use default from email if not configured
        const fromEmail =
          emailConfig.emailFrom || process.env.RESEND_FROM_EMAIL || 'noreply@example.com'

        // **Send the email using your helper function**
        await sendEmail({
          to: emailTo,
          subject,
          from: fromEmail,
          html: messageContent,
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      submissionId: submission.id,
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
