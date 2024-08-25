import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_PASSWORD } from '$env/static/private';
import type { ContactData } from '$lib/types';
import { validEmail } from '$lib/utils';

export async function POST({ request }: RequestEvent) {
	try {
		const data: ContactData = await request.json();

		if (!data.firstName) return json({ message: 'First name is required!' }, { status: 400 });
		if (!data.email) return json({ message: 'Email is required!' }, { status: 400 });
		if (!data.message || data.message.trim() === '')
			return json({ message: 'A message is required!' }, { status: 400 });

		if (!validEmail(data.email)) {
			return json({ message: 'Invalid email address!' }, { status: 400 });
		}

		const transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: GOOGLE_EMAIL,
				pass: GOOGLE_PASSWORD
			}
		});

		const mailOptions = {
			from: `${data.firstName} ${data.lastName}`,
			to: GOOGLE_EMAIL,
			subject: 'Message from ColorStack Contact Form',
			text: 'REPLY TO: ' + data.email + '\n\n' + data.message
		};

		try {
			await transporter.sendMail(mailOptions);
			return json({ message: 'Email sent successfully!' }, { status: 200 });
		} catch (error) {
			console.error('Error sending email:', error);
			return json({ message: 'Email failed to send!' }, { status: 500 });
		}
	} catch (error) {
		console.error('Error processing request:', error);
		return json({ message: 'Internal Server Error' }, { status: 500 });
	}
}
