export declare const FileActionsExamples: {
    GetFile: {
        payload: {
            file: string;
        };
        response: {
            file: string;
            url: string;
            file_size: number;
            file_name: string;
        };
    };
    GetGroupFileUrl: {
        payload: {
            group_id: string;
            file_id: string;
            busid: number;
        };
        response: {
            url: string;
        };
    };
    GetImage: {
        payload: {
            file: string;
        };
        response: {
            file: string;
            url: string;
        };
    };
    GetPrivateFileUrl: {
        payload: {
            user_id: string;
            file_id: string;
        };
        response: {
            url: string;
        };
    };
    GetRecord: {
        payload: {
            file: string;
            out_format: string;
        };
        response: {
            file: string;
            url: string;
        };
    };
};
