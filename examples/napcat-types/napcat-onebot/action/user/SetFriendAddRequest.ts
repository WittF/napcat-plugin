import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SetFriendAddRequestPayloadSchema: import("@sinclair/typebox").TObject<{
    flag: import("@sinclair/typebox").TString;
    approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TBoolean]>>;
    remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SetFriendAddRequestPayload = Static<typeof SetFriendAddRequestPayloadSchema>;
export default class SetFriendAddRequest extends OneBotAction<SetFriendAddRequestPayload, void> {
    actionName: "set_friend_add_request";
    payloadSchema: import("@sinclair/typebox").TObject<{
        flag: import("@sinclair/typebox").TString;
        approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TBoolean]>>;
        remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        flag: string;
        approve: boolean;
        remark: string;
    };
    returnExample: {};
    _handle(payload: SetFriendAddRequestPayload): Promise<void>;
}
