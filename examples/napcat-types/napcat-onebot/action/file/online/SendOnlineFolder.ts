import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SendOnlineFolderPayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    folder_path: import("@sinclair/typebox").TString;
    folder_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SendOnlineFolderPayload = Static<typeof SendOnlineFolderPayloadSchema>;
export declare class SendOnlineFolder extends OneBotAction<SendOnlineFolderPayload, any> {
    actionName: "send_online_folder";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        folder_path: import("@sinclair/typebox").TString;
        folder_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        folder_path: string;
    };
    returnExample: null;
    _handle(payload: SendOnlineFolderPayload): Promise<any>;
}
