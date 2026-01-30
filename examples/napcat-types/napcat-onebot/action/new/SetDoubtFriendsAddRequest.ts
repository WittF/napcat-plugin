import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SetDoubtFriendsAddRequestPayloadSchema: import("@sinclair/typebox").TObject<{
    flag: import("@sinclair/typebox").TString;
    approve: import("@sinclair/typebox").TBoolean;
}>;
export type SetDoubtFriendsAddRequestPayload = Static<typeof SetDoubtFriendsAddRequestPayloadSchema>;
export declare class SetDoubtFriendsAddRequest extends OneBotAction<SetDoubtFriendsAddRequestPayload, any> {
    actionName: "set_doubt_friends_add_request";
    payloadSchema: import("@sinclair/typebox").TObject<{
        flag: import("@sinclair/typebox").TString;
        approve: import("@sinclair/typebox").TBoolean;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        flag: string;
        approve: boolean;
    };
    returnExample: null;
    _handle(payload: SetDoubtFriendsAddRequestPayload): Promise<void>;
}
