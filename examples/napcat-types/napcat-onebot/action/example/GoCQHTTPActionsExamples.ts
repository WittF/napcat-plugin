export declare const GoCQHTTPActionsExamples: {
    GetStrangerInfo: {
        payload: {
            user_id: string;
        };
        response: {
            user_id: number;
            nickname: string;
            sex: string;
        };
    };
    GetGroupHonorInfo: {
        payload: {
            group_id: string;
            type: string;
        };
        response: {
            group_id: number;
            current_talkative: {};
            talkative_list: never[];
        };
    };
    GetForwardMsg: {
        payload: {
            message_id: string;
        };
        response: {
            messages: never[];
        };
    };
    SendForwardMsg: {
        payload: {
            group_id: string;
            messages: never[];
        };
        response: {
            message_id: number;
        };
    };
    GetGroupAtAllRemain: {
        payload: {
            group_id: string;
        };
        response: {
            can_at_all: boolean;
            remain_at_all_count_for_group: number;
            remain_at_all_count_for_self: number;
        };
    };
    CreateGroupFileFolder: {
        payload: {
            group_id: string;
            name: string;
        };
        response: {
            result: {};
            groupItem: {};
        };
    };
    DeleteGroupFile: {
        payload: {
            group_id: string;
            file_id: string;
        };
        response: {};
    };
    DeleteGroupFileFolder: {
        payload: {
            group_id: string;
            folder_id: string;
        };
        response: {};
    };
    DownloadFile: {
        payload: {
            url: string;
            thread_count: number;
            headers: string;
        };
        response: {
            file: string;
        };
    };
    GetFriendMsgHistory: {
        payload: {
            user_id: string;
            message_seq: number;
            count: number;
        };
        response: {
            messages: never[];
        };
    };
    GetGroupFilesByFolder: {
        payload: {
            group_id: string;
            folder_id: string;
        };
        response: {
            files: never[];
            folders: never[];
        };
    };
    GetGroupFileSystemInfo: {
        payload: {
            group_id: string;
        };
        response: {
            file_count: number;
            limit_count: number;
            used_space: number;
            total_space: number;
        };
    };
    GetGroupMsgHistory: {
        payload: {
            group_id: string;
            message_seq: number;
            count: number;
        };
        response: {
            messages: never[];
        };
    };
    GetGroupRootFiles: {
        payload: {
            group_id: string;
        };
        response: {
            files: never[];
            folders: never[];
        };
    };
    GetOnlineClient: {
        payload: {
            no_cache: boolean;
        };
        response: never[];
    };
    GoCQHTTPCheckUrlSafely: {
        payload: {
            url: string;
        };
        response: {
            level: number;
        };
    };
    GoCQHTTPDeleteFriend: {
        payload: {
            user_id: string;
        };
        response: {};
    };
    GoCQHTTPGetModelShow: {
        payload: {
            model: string;
        };
        response: {
            variants: never[];
        };
    };
    GoCQHTTPSetModelShow: {
        payload: {
            model: string;
            model_show: string;
        };
        response: {};
    };
    QuickAction: {
        payload: {
            context: {};
            operation: {};
        };
        response: {};
    };
    SendGroupNotice: {
        payload: {
            group_id: string;
            content: string;
            image: string;
        };
        response: {};
    };
    SetGroupPortrait: {
        payload: {
            group_id: string;
            file: string;
        };
        response: {
            result: number;
            errMsg: string;
        };
    };
    SetQQProfile: {
        payload: {
            nickname: string;
            personal_note: string;
        };
        response: {};
    };
    UploadGroupFile: {
        payload: {
            group_id: string;
            file: string;
            name: string;
        };
        response: {
            file_id: string;
        };
    };
    UploadPrivateFile: {
        payload: {
            user_id: string;
            file: string;
            name: string;
        };
        response: {
            file_id: string;
        };
    };
};
