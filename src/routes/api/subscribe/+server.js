import { json } from '@sveltejs/kit';
import { sendEmail } from '$lib/utils/sendEmail';
import { supabase } from '$lib/utils/supabaseClient';

export async function POST({ request }) {
	const { email } = await request.json();

	try {
		// Basic email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			return json({ error: 'Invalid email address' }, { status: 400 });
		}

		// Check if the email already exists
		const { data: existingEmail, error: existingEmailError } = await supabase
			.from('subscribers')
			.select('email')
			.eq('email', email)
			.single();

		if (existingEmail) {
			return json({ error: 'This email is already subscribed' }, { status: 400 });
		}

		// Handle other possible errors
		if (existingEmailError && existingEmailError.code !== 'PGRST116') {
			return json({ error: existingEmailError.message }, { status: 500 });
		}

		// Insert the new email
		const { data, error } = await supabase.from('subscribers').insert([{ email }]);

		if (error) {
			return json({ error: error.message }, { status: 500 });
		}

		await sendEmail({
			to: { name: 'Subscriber', email },
			subject: 'Thanks for Subscribing to My Newsletter!',
			htmlContent: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Subscription Confirmation</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
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
              .content {
                padding: 20px;
                border-bottom: 1px solid #e0e0e0;
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
              h1 {
                color: #333333;
                font-size: 24px;
                margin: 0 0 20px; /* Added bottom margin */
              }
              p {
                color: #666666;
                font-size: 16px;
                line-height: 1.5;
                margin: 0 0 10px;
              }
              .unsubscribe-link {
                color: #007bff;
                text-decoration: none;
              }
              .unsubscribe-link:hover {
                text-decoration: underline;
              }
              .footer {
                font-size: 14px;
                color: #999999;
                text-align: center;
                padding-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <img src="https://i.postimg.cc/05DnhdN8/Neobyte-Design.png" alt="Neobyte Design" />
              </div>
              <div class="content">
                <h1>Subscription Confirmed!</h1>
                <p>Hi there,</p>
                <p>
                  Thank you for subscribing to my newsletter! I'm excited to keep you updated with my latest
                  news and offers.
                </p>
                <p>If you wish to unsubscribe at any time, please click the link below:</p>
                <p><a href="{unsubscribe_link}" class="unsubscribe-link">Unsubscribe</a></p>
                <p>Best regards,<br />Min Naing Ko Ko | Founder of Neobyte Design</p>
              </div>
              <div class="footer">
                <p>Copyright © 2024 Neobyte Design. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `
		})

		return new Response(JSON.stringify({ message: 'Thank you for subscribing!' }), { status: 200 } );
	} catch (error) {
		return new Response(JSON.stringify({ error: 'Failed to subscribe newsletter' }), {
			status: 500
		});
	}
}
