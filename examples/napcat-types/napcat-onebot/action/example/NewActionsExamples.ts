export declare const NewActionsExamples: {
    GetDoubtFriendsAddRequest: {
        payload: {
            count: number;
        };
        response: {
            user_id: number;
            nickname: string;
            age: number;
            sex: string;
            reason: string;
            flag: string;
        }[];
    };
    SetDoubtFriendsAddRequest: {
        payload: {
            flag: string;
            approve: boolean;
        };
        response: {};
    };
};
