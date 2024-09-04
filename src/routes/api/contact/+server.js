import { sendEmail } from '$lib/utils/sendEmail';
import { supabase } from '$lib/utils/supabaseClient';

export async function POST({ request }) {
	const { name, email, message, subject } = await request.json();

	try {
    // Save the contact form submission to Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }]);

    if (error) {
      throw new Error('Error saving contact form to Supabase');
    }

		await sendEmail({
			to: { name, email },
			subject: subject,
			htmlContent: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #f9f9f9;
                  border: 1px solid #dadce0;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
              .header {
                  background-color: #0a0f16;
                  padding: 20px;
                  text-align: center;
                  color: #ffffff;
              }
              .header img {
                  max-width: 300px;
                  height: 150;
                  object-fit: cover;
              }
              .content {
                  padding: 20px;
              }
            </style>
          </head>
          <body>
              <div class="container">
                  <div class="header">
                      <img src="https://i.postimg.cc/05DnhdN8/Neobyte-Design.png" alt="Neobyte Design">
                  </div>
                  <div class="content">
                      <p>Dear ${name},</p>
                      <p>Thank you for contacting Neobyte Design! Your message has been successfully received, and we appreciate your interest in our web design services.</p>
                      <p>Our team is currently reviewing your submission and will get back to you as soon as possible. If you have any urgent questions or need immediate assistance, please feel free to reply to <a href="mailto:neobytedesign@gmail.com">neobytedesign@gmail.com</a> or contact us directly at <a href="tel:+959459170740">+959459170740</a>.</p>
                      <p>Thank you for considering Neobyte Design. We look forward to the opportunity to work with you!</p>
                  </div>
              </div>
          </body>
        </html>
      `
		});

    // Send a notification email to yourself
		await sendEmail({
      to: { name: 'Min Naing Ko Ko', email: 'minnaingkoko.dev@gmail.com' },
			subject: `New contact form submission from ${name}`,
			htmlContent: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to process contact form' }), { status: 500 });
	}
}
