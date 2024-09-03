import SibApiV3Sdk from 'sib-api-v3-sdk';
import { config } from 'dotenv';

// Load environment variables
config();

export async function sendEmail({ to, subject, htmlContent }) {
	const defaultClient = SibApiV3Sdk.ApiClient.instance;
	const apiKey = defaultClient.authentications['api-key'];
	apiKey.apiKey = process.env.BREVO_API_KEY;

	const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
	const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

	sendSmtpEmail.subject = subject;
	sendSmtpEmail.htmlContent = htmlContent;
	sendSmtpEmail.to = [{ name: to.name, email: to.email }];
	sendSmtpEmail.sender = {
		email: 'noreply@neobytedesign.com',
		name: 'Neobyte Design'
	};

	try {
		const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
		console.log('Email sent successfully:', data);
		return data;
	} catch (error) {
		console.error('Error sending email:', error);
		throw new Error('Failed to send email');
	}
}
