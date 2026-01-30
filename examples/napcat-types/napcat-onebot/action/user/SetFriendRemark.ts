import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SetFriendRemarkPayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    remark: import("@sinclair/typebox").TString;
}>;
export type SetFriendRemarkPayload = Static<typeof SetFriendRemarkPayloadSchema>;
export default class SetFriendRemark extends OneBotAction<SetFriendRemarkPayload, void> {
    actionName: "set_friend_remark";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        remark: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        remark: string;
    };
    returnExample: null;
    errorExamples: {
        code: number;
        description: string;
    }[];
    _handle(payload: SetFriendRemarkPayload): Promise<void>;
}
