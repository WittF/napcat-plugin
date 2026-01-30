import { Peer } from '../../../napcat-core/types';
import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
declare class MarkMsgAsRead extends OneBotAction<PayloadType, ReturnType> {
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
    };
    returnExample: null;
    getPeer(payload: PayloadType): Promise<Peer>;
    _handle(payload: PayloadType): Promise<null>;
}
export declare class MarkPrivateMsgAsRead extends MarkMsgAsRead {
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionName: "mark_private_msg_as_read";
    actionSummary: string;
}
export declare class MarkGroupMsgAsRead extends MarkMsgAsRead {
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionName: "mark_group_msg_as_read";
    actionSummary: string;
}
export declare class GoCQHTTPMarkMsgAsRead extends MarkMsgAsRead {
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionName: "mark_msg_as_read";
    actionSummary: string;
}
export declare class MarkAllMsgAsRead extends OneBotAction<void, null> {
    actionName: "_mark_all_as_read";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<null>;
}
export {};
