export declare const ExtendsActionsExamples: {
    OCRImage: {
        payload: {
            image: string;
        };
        response: {
            texts: {
                text: string;
                coordinates: never[];
            }[];
        };
    };
    GetAiCharacters: {
        payload: {
            group_id: string;
        };
        response: {
            type: string;
            characters: {
                character_id: string;
                character_name: string;
                preview_url: string;
            }[];
        }[];
    };
    GetClientkey: {
        payload: {};
        response: {
            clientkey: string;
        };
    };
    SetQQAvatar: {
        payload: {
            file: string;
        };
        response: null;
    };
    SetGroupKickMembers: {
        payload: {
            group_id: string;
            user_id: string[];
            reject_add_request: boolean;
        };
        response: null;
    };
    TranslateEnWordToZn: {
        payload: {
            words: string[];
        };
        response: {
            words: string[];
        };
    };
    GetRkey: {
        payload: {};
        response: {
            rkey: string;
        };
    };
    SetLongNick: {
        payload: {
            longNick: string;
        };
        response: null;
    };
    SetSpecialTitle: {
        payload: {
            group_id: string;
            user_id: string;
            special_title: string;
        };
        response: null;
    };
};
