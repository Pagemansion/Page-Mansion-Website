import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: EmailOptions) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Email not sent.')
      return { success: false, error: 'Email service not configured' }
    }

    const { data, error } = await resend.emails.send({
      from: from || 'info@pagemansions.com', // Update this with your verified domain
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
    })

    if (error) {
      console.error('Error sending email:', error)
      return { success: false, error }
    }

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}
