import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    reject_add_request: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupKickMembers extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_kick_members";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        reject_add_request: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        user_id: string[];
        reject_add_request: boolean;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
