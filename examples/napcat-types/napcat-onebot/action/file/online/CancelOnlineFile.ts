import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const CancelOnlineFilePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    msg_id: import("@sinclair/typebox").TString;
}>;
export type CancelOnlineFilePayload = Static<typeof CancelOnlineFilePayloadSchema>;
export declare class CancelOnlineFile extends OneBotAction<CancelOnlineFilePayload, any> {
    actionName: "cancel_online_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        msg_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        msg_id: string;
    };
    returnExample: null;
    _handle(payload: CancelOnlineFilePayload): Promise<void>;
}
