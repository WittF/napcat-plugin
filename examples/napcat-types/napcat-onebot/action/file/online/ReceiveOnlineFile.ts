import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const ReceiveOnlineFilePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    msg_id: import("@sinclair/typebox").TString;
    element_id: import("@sinclair/typebox").TString;
}>;
export type ReceiveOnlineFilePayload = Static<typeof ReceiveOnlineFilePayloadSchema>;
export declare class ReceiveOnlineFile extends OneBotAction<ReceiveOnlineFilePayload, any> {
    actionName: "receive_online_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        msg_id: import("@sinclair/typebox").TString;
        element_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        msg_id: string;
        save_path: string;
    };
    returnExample: null;
    _handle(payload: ReceiveOnlineFilePayload): Promise<any>;
}
