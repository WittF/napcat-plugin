export declare const PacketActionsExamples: {
    GetPacketStatus: {
        payload: {};
        response: {
            status: string;
        };
    };
    SendPoke: {
        payload: {
            user_id: string;
        };
        response: {};
    };
    SetGroupTodo: {
        payload: {
            group_id: string;
            message_id: string;
        };
        response: {};
    };
};
