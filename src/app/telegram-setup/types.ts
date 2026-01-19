
export interface Chat {
    id: number;
    type: string;
    title?: string;
    username?: string;
}

export interface TelegramUpdate {
    update_id: number;
    message?: {
        chat: Chat;
        text?: string;
    };
    my_chat_member?: {
        chat: Chat;
    };
    channel_post?: {
        chat: Chat;
    };
}
