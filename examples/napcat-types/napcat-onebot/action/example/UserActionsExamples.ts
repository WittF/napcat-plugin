export declare const UserActionsExamples: {
    GetCookies: {
        payload: {
            domain: string;
        };
        response: {
            cookies: string;
        };
    };
    GetFriendList: {
        payload: {};
        response: {
            user_id: number;
            nickname: string;
            remark: string;
        }[];
    };
    GetRecentContact: {
        payload: {
            count: number;
        };
        response: {
            lastestMsg: string;
            peerUin: string;
            remark: string;
            msgTime: string;
            chatType: number;
            msgId: string;
            sendNickName: string;
            sendMemberName: string;
            peerName: string;
        }[];
    };
    SendLike: {
        payload: {
            user_id: string;
            times: number;
        };
        response: {};
    };
    SetFriendAddRequest: {
        payload: {
            flag: string;
            approve: boolean;
            remark: string;
        };
        response: {};
    };
    SetFriendRemark: {
        payload: {
            user_id: string;
            remark: string;
        };
        response: {};
    };
};
