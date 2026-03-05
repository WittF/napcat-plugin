import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    request_id: import("@sinclair/typebox").TNumber;
    invitor_uin: import("@sinclair/typebox").TNumber;
    invitor_nick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_id: import("@sinclair/typebox").TNumber;
    message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    checked: import("@sinclair/typebox").TBoolean;
    actor: import("@sinclair/typebox").TNumber;
    requester_nick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GetGroupAddRequest extends OneBotAction<void, ReturnType> {
    actionName: "get_group_ignore_add_request";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        request_id: import("@sinclair/typebox").TNumber;
        invitor_uin: import("@sinclair/typebox").TNumber;
        invitor_nick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_id: import("@sinclair/typebox").TNumber;
        message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        checked: import("@sinclair/typebox").TBoolean;
        actor: import("@sinclair/typebox").TNumber;
        requester_nick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        request_id: number;
        invitor_uin: number;
        invitor_nick: string;
        group_id: number;
        message: string;
        group_name: string;
        checked: boolean;
        actor: number;
        requester_nick: string;
    }[];
    _handle(): Promise<ReturnType>;
}
export {};
