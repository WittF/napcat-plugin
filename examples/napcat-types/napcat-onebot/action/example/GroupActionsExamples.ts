export declare const GroupActionsExamples: {
    DelEssenceMsg: {
        payload: {
            message_id: number;
        };
        response: null;
    };
    DelGroupNotice: {
        payload: {
            group_id: string;
            notice_id: string;
        };
        response: null;
    };
    GetGroupDetailInfo: {
        payload: {
            group_id: string;
        };
        response: {
            group_id: number;
            group_name: string;
            member_count: number;
            max_member_count: number;
        };
    };
    GetGroupEssence: {
        payload: {
            group_id: string;
        };
        response: {
            message_id: number;
            sender_id: number;
            sender_nick: string;
            operator_id: number;
            operator_nick: string;
            operator_time: number;
            content: string;
        }[];
    };
    GetGroupInfo: {
        payload: {
            group_id: string;
        };
        response: {
            group_id: number;
            group_name: string;
            member_count: number;
            max_member_count: number;
        };
    };
    GetGroupList: {
        payload: {};
        response: {
            group_id: number;
            group_name: string;
            member_count: number;
            max_member_count: number;
        }[];
    };
    GetGroupMemberInfo: {
        payload: {
            group_id: string;
            user_id: string;
        };
        response: {
            group_id: number;
            user_id: number;
            nickname: string;
            card: string;
            role: string;
        };
    };
    GetGroupMemberList: {
        payload: {
            group_id: string;
        };
        response: {
            group_id: number;
            user_id: number;
            nickname: string;
            card: string;
            role: string;
        }[];
    };
    GetGroupNotice: {
        payload: {
            group_id: string;
        };
        response: {
            notice_id: string;
            sender_id: number;
            publish_time: number;
            message: {
                text: string;
                image: never[];
            };
        }[];
    };
    SendGroupMsg: {
        payload: {
            group_id: string;
            message: string;
        };
        response: {
            message_id: number;
        };
    };
    SetEssenceMsg: {
        payload: {
            message_id: number;
        };
        response: null;
    };
    SetGroupAddRequest: {
        payload: {
            flag: string;
            sub_type: string;
            approve: boolean;
        };
        response: null;
    };
    SetGroupAdmin: {
        payload: {
            group_id: string;
            user_id: string;
            enable: boolean;
        };
        response: null;
    };
    SetGroupBan: {
        payload: {
            group_id: string;
            user_id: string;
            duration: number;
        };
        response: null;
    };
    SetGroupCard: {
        payload: {
            group_id: string;
            user_id: string;
            card: string;
        };
        response: null;
    };
    SetGroupKick: {
        payload: {
            group_id: string;
            user_id: string;
            reject_add_request: boolean;
        };
        response: null;
    };
    SetGroupLeave: {
        payload: {
            group_id: string;
            is_dismiss: boolean;
        };
        response: null;
    };
    SetGroupName: {
        payload: {
            group_id: string;
            group_name: string;
        };
        response: null;
    };
    SetGroupWholeBan: {
        payload: {
            group_id: string;
            enable: boolean;
        };
        response: null;
    };
};
