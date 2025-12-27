import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Get webhook configuration from environment variables
        const webhookUrl = process.env.WEBHOOK_URL || 'https://portal.indite.io/api/webhooks/cmjo4lh7f003chmdlwwj6wgj5';
        const webhookToken = process.env.WEBHOOK_TOKEN || 'GQFgjInEXH4k5Fz4Lh3DbT9o';

        // Forward the request to the webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${webhookToken}`,
            },
            body: JSON.stringify({
                body: {
                    email: body.email,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    phone: body.phone,
                    inquiryType: body.inquiryType,
                    message: body.message,
                },
                subject: 'New Contact Form Submission',
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.json({ success: false, message: 'Failed to send message' }, { status: 500 });
    }
}
