import { Resend } from 'resend';
import { config } from 'dotenv';

config(); // Load environment variables

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Al Ghani <alghanimmuhammadf@gmail.com>',
      to: ['alghanimuhammadf@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
