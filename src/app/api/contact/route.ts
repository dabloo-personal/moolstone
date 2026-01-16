import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, phone, country, state, interests } = await request.json();

        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error('Telegram credentials missing');
            return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
        }

        const message = `
🚀 *New Lead from Website* 🚀

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Location:* ${state}, ${country}

🎯 *Interests:*
${interests.length > 0 ? interests.map((i: string) => `• ${i}`).join('\n') : '• None selected'}
    `;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Telegram API Error:', errorData);
            throw new Error('Failed to send message to Telegram');
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
