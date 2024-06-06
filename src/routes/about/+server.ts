import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { GOOGLE_EMAIL, GOOGLE_PASSWORD } from '$lib/env';

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    message: string;
}

export async function POST({ request }: RequestEvent) {
    try {
        const data: FormData = await request.json();

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GOOGLE_EMAIL,
                pass: GOOGLE_PASSWORD
            }
        });

        let mailOptions = {
            from: `${data.first_name} ${data.last_name} <${data.email}>`,
            to: GOOGLE_EMAIL,
            subject: 'Message from ColorStack Contact Form',
            text: data.message
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
