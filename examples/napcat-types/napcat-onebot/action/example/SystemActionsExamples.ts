export declare const SystemActionsExamples: {
    CanSendImage: {
        payload: {};
        response: {
            yes: boolean;
        };
    };
    CanSendRecord: {
        payload: {};
        response: {
            yes: boolean;
        };
    };
    CleanCache: {
        payload: {};
        response: {};
    };
    GetCredentials: {
        payload: {};
        response: {
            cookies: string;
            csrf_token: number;
        };
    };
    GetCSRF: {
        payload: {};
        response: {
            token: number;
        };
    };
    GetLoginInfo: {
        payload: {};
        response: {
            user_id: number;
            nickname: string;
        };
    };
    GetStatus: {
        payload: {};
        response: {
            online: boolean;
            good: boolean;
        };
    };
    GetSystemMsg: {
        payload: {};
        response: {
            invited_requests: never[];
            join_requests: never[];
        };
    };
    GetVersionInfo: {
        payload: {};
        response: {
            app_name: string;
            app_version: string;
            protocol_version: string;
        };
    };
    SetRestart: {
        payload: {
            delay: number;
        };
        response: {};
    };
};
