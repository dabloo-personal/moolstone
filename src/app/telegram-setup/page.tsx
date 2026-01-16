"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function TelegramSetup() {
    const [token, setToken] = useState('');
    const [updates, setUpdates] = useState<any[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const checkUpdates = async () => {
        setLoading(true);
        setError('');
        setUpdates([]);
        try {
            const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
            const data = await res.json();

            if (!data.ok) {
                throw new Error(data.description || 'Failed to fetch updates');
            }

            setUpdates(data.result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white max-w-2xl w-full p-10 rounded-3xl shadow-xl space-y-8">
                <h1 className="text-3xl font-bold text-dark">Telegram Setup Helper</h1>

                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 text-blue-800 rounded-xl text-sm leading-relaxed">
                        <strong>Instructions:</strong>
                        <ol className="list-decimal list-inside mt-2 space-y-1">
                            <li>Create your bot with <strong>@BotFather</strong> on Telegram to get a Token.</li>
                            <li>Add your bot to your group.</li>
                            <li><strong>Send a message</strong> in the group (e.g., "Hello").</li>
                            <li>Paste your Token below and click "Find Chat IDs".</li>
                        </ol>
                    </div>

                    <div className="space-y-2">
                        <label className="font-bold text-dark">Bot Token</label>
                        <input
                            type="text"
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            placeholder="123456789:ABCdef..."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary outline-none"
                        />
                    </div>

                    <Button onClick={checkUpdates} disabled={!token || loading} className="w-full rounded-xl py-4 bg-primary text-white font-bold">
                        {loading ? 'Checking...' : 'Find Chat IDs'}
                    </Button>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 rounded-xl">
                            Error: {error}
                        </div>
                    )}
                </div>

                {updates.length > 0 && (
                    <div className="space-y-4 pt-6 border-t">
                        <h3 className="font-bold text-lg">Found Chats:</h3>
                        <div className="space-y-2">
                            {updates.map((u, i) => {
                                const chat = u.message?.chat || u.my_chat_member?.chat || u.channel_post?.chat;
                                if (!chat) return null;
                                return (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
                                        <div>
                                            <div className="font-bold">{chat.title || chat.username || 'Private Chat'}</div>
                                            <div className="text-sm text-gray-500">Type: {chat.type}</div>
                                        </div>
                                        <div className="bg-white px-3 py-1 rounded border font-mono text-sm select-all cursor-pointer hover:bg-gray-50">
                                            {chat.id}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="text-sm text-gray-500 text-center">Copy the ID (including the minus sign for groups) and use it in your .env file.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
