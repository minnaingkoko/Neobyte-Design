import { sendEmail } from '$lib/utils/sendEmail';

export async function POST({ request }) {
  const { name, email, message, subject } = await request.json();

  try {
    await sendEmail({
      to: { name, email },
      subject: {subject},
      htmlContent: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
}


