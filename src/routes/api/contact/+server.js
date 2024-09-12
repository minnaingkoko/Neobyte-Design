import { sendEmail } from '$lib/utils/sendEmail';
import { supabase } from '$lib/utils/supabaseClient';

export async function POST({ request }) {
	const { name, email, message, subject } = await request.json();

	try {
		// Save the contact form submission to Supabase
		const { data, error } = await supabase.from('contacts').insert([{ name, email, message }]);

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
                  border-bottom: 1px solid #e0e0e0;
              }
              p {
                  color: #666666;
                  font-size: 16px;
                  line-height: 1.5;
              }
              .footer {
                  font-size: 14px;
                  color: #999999;
                  text-align: center;
                  margin-top: 20px;
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
                      <p>Thank you for contacting Neobyte Design! Your message has been successfully received, and I appreciate your interest in my web design services.</p>
                      <p>I am currently reviewing your submission and will get back to you as soon as possible. If you have any urgent questions or need immediate assistance, please feel free to reply to <a href="mailto:neobytedesign@gmail.com">neobytedesign@gmail.com</a> or contact me directly at <a href="tel:+959459170740">+959459170740</a>.</p>
                      <p>Thank you for considering Neobyte Design. I look forward to the opportunity to work with you!</p>
                  </div>
                  <div class="footer">
                    <p>Copyright © 2024 Neobyte Design. All rights reserved.</p>
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
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to process contact form' }), {
			status: 500
		});
	}
}
