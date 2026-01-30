export declare const MsgActionsExamples: {
    DeleteMsg: {
        payload: {
            message_id: number;
        };
        response: {};
    };
    GetMsg: {
        payload: {
            message_id: number;
        };
        response: {
            time: number;
            message_type: string;
            message_id: number;
            real_id: number;
            sender: {
                user_id: number;
                nickname: string;
            };
            message: string;
        };
    };
    MarkMsgAsRead: {
        payload: {
            group_id: string;
        };
        response: {};
    };
    SendMsg: {
        payload: {
            message_type: string;
            group_id: string;
            message: string;
        };
        response: {
            message_id: number;
        };
    };
    SendPrivateMsg: {
        payload: {
            user_id: string;
            message: string;
        };
        response: {
            message_id: number;
        };
    };
    SetMsgEmojiLike: {
        payload: {
            message_id: number;
            emoji_id: string;
        };
        response: {};
    };
};
