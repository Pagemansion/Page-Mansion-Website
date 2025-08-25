// src/lib/sendEmail.ts (or wherever you want to put it)
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendEmailArgs {
  to: string | string[]
  from: string
  subject: string
  html: string
}

export async function sendEmail({ to, from, subject, html }: SendEmailArgs) {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (err) {
    console.error('General email error:', err)
    return { success: false, error: err }
  }
}
