import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SendOnlineFilePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    file_path: import("@sinclair/typebox").TString;
    file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SendOnlineFilePayload = Static<typeof SendOnlineFilePayloadSchema>;
export declare class SendOnlineFile extends OneBotAction<SendOnlineFilePayload, any> {
    actionName: "send_online_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        file_path: import("@sinclair/typebox").TString;
        file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        file_path: string;
        file_name: string;
    };
    returnExample: null;
    _handle(payload: SendOnlineFilePayload): Promise<any>;
}
