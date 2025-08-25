import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'

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

    // First, find the form by title or ID
    const { docs: forms } = await payload.find({
      collection: 'forms',
      where: {
        or: [
          { id: { equals: form } },
          { title: { equals: form } }, // Try to match by title if ID doesn't match
          { title: { equals: 'Contact Form' } }, // Fallback to default title
        ],
      },
      limit: 1,
    })

    if (!forms.length) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 })
    }

    const formDoc = forms[0]

    // Create the form submission
    const submission = await payload.create({
      collection: 'custom-form-submissions',
      data: {
        form: formDoc.id,
        submissionData,
      },
    })

    // Send confirmation emails if configured
    if (formDoc.emails && formDoc.emails.length > 0) {
      // The form builder plugin handles email sending automatically
      // when a submission is created
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
