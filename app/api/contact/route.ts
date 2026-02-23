import { NextRequest, NextResponse } from 'next/server'

const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const TO_EMAIL = 'hello@dancingwiththelions.com'
const FROM_EMAIL = 'Dancing with Lions <noreply@dancingwiththelions.com>'

export async function POST(req: NextRequest) {
  try {
    const { name, email, organisation, enquiry, message } = await req.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    // Build email body
    const html = `
      <div style="font-family: 'Courier New', monospace; color: #262626; max-width: 600px;">
        <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: #737373; margin-bottom: 24px;">
          New enquiry via dancingwiththelions.com
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; vertical-align: top; width: 120px;">Name</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a0a0a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; vertical-align: top;">Email</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a0a0a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          ${organisation ? `<tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; vertical-align: top;">Organisation</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a0a0a;">${organisation}</td>
          </tr>` : ''}
          ${enquiry ? `<tr>
            <td style="padding: 8px 0; font-size: 12px; color: #737373; vertical-align: top;">Enquiry type</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0a0a0a;">${enquiry}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
          <p style="font-size: 12px; color: #737373; margin-bottom: 8px;">Message</p>
          <p style="font-size: 14px; color: #262626; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `

    const subject = `[DWL] ${enquiry ? enquiry + ' — ' : ''}${name}${organisation ? ' · ' + organisation : ''}`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        html,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send. Please email us directly.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Server error. Please email us directly.' }, { status: 500 })
  }
}
