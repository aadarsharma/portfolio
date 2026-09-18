import { Resend } from 'resend';

const OWNER_EMAIL = process.env.CONTACT_TO_EMAIL || 'adarsharma56763@gmail.com';

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      console.error('Contact form: RESEND_API_KEY or FROM_EMAIL is missing from the environment.');
      return Response.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      );
    }

    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return Response.json(
        { error: 'Email, subject and message are all required.' },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [OWNER_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      react: (
        <>
          <h2>{subject}</h2>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error('Resend rejected the email:', error);
      return Response.json(
        { error: error.message || 'Failed to send email.' },
        { status: 502 }
      );
    }

    return Response.json({ id: data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
