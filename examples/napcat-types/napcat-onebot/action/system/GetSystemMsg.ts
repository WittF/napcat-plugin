import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetGroupSystemMsgPayloadSchema: import("@sinclair/typebox").TObject<{
    count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
export type GetGroupSystemMsgPayload = Static<typeof GetGroupSystemMsgPayloadSchema>;
export declare const GetGroupSystemMsgReturnSchema: import("@sinclair/typebox").TObject<{
    invited_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        request_id: import("@sinclair/typebox").TNumber;
        invitor_uin: import("@sinclair/typebox").TNumber;
        invitor_nick: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TNumber;
        group_name: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TString;
        checked: import("@sinclair/typebox").TBoolean;
        actor: import("@sinclair/typebox").TNumber;
        requester_nick: import("@sinclair/typebox").TString;
    }>>;
    InvitedRequest: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        request_id: import("@sinclair/typebox").TNumber;
        invitor_uin: import("@sinclair/typebox").TNumber;
        invitor_nick: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TNumber;
        group_name: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TString;
        checked: import("@sinclair/typebox").TBoolean;
        actor: import("@sinclair/typebox").TNumber;
        requester_nick: import("@sinclair/typebox").TString;
    }>>;
    join_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        request_id: import("@sinclair/typebox").TNumber;
        invitor_uin: import("@sinclair/typebox").TNumber;
        invitor_nick: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TNumber;
        group_name: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TString;
        checked: import("@sinclair/typebox").TBoolean;
        actor: import("@sinclair/typebox").TNumber;
        requester_nick: import("@sinclair/typebox").TString;
    }>>;
}>;
export type GetGroupSystemMsgReturn = Static<typeof GetGroupSystemMsgReturnSchema>;
export declare class GetGroupSystemMsg extends OneBotAction<GetGroupSystemMsgPayload, GetGroupSystemMsgReturn> {
    actionName: "get_group_system_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        invited_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            request_id: import("@sinclair/typebox").TNumber;
            invitor_uin: import("@sinclair/typebox").TNumber;
            invitor_nick: import("@sinclair/typebox").TString;
            group_id: import("@sinclair/typebox").TNumber;
            group_name: import("@sinclair/typebox").TString;
            message: import("@sinclair/typebox").TString;
            checked: import("@sinclair/typebox").TBoolean;
            actor: import("@sinclair/typebox").TNumber;
            requester_nick: import("@sinclair/typebox").TString;
        }>>;
        InvitedRequest: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            request_id: import("@sinclair/typebox").TNumber;
            invitor_uin: import("@sinclair/typebox").TNumber;
            invitor_nick: import("@sinclair/typebox").TString;
            group_id: import("@sinclair/typebox").TNumber;
            group_name: import("@sinclair/typebox").TString;
            message: import("@sinclair/typebox").TString;
            checked: import("@sinclair/typebox").TBoolean;
            actor: import("@sinclair/typebox").TNumber;
            requester_nick: import("@sinclair/typebox").TString;
        }>>;
        join_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            request_id: import("@sinclair/typebox").TNumber;
            invitor_uin: import("@sinclair/typebox").TNumber;
            invitor_nick: import("@sinclair/typebox").TString;
            group_id: import("@sinclair/typebox").TNumber;
            group_name: import("@sinclair/typebox").TString;
            message: import("@sinclair/typebox").TString;
            checked: import("@sinclair/typebox").TBoolean;
            actor: import("@sinclair/typebox").TNumber;
            requester_nick: import("@sinclair/typebox").TString;
        }>>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        count: number;
    };
    returnExample: {
        invited_requests: never[];
        InvitedRequest: never[];
        join_requests: never[];
    };
    _handle(params: GetGroupSystemMsgPayload): Promise<GetGroupSystemMsgReturn>;
}
