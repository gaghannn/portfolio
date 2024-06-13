const Resend = require('path-to-resend-module');

// Menggunakan environment variable untuk API key
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(req, res) {
    try {
        await resend.send({
            to: 'recipient@example.com',
            subject: 'Hello World',
            text: 'Hello from Resend!',
        });
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
}

module.exports = sendEmail;
