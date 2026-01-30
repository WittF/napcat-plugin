import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const RefuseOnlineFilePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    msg_id: import("@sinclair/typebox").TString;
    element_id: import("@sinclair/typebox").TString;
}>;
export type RefuseOnlineFilePayload = Static<typeof RefuseOnlineFilePayloadSchema>;
export declare class RefuseOnlineFile extends OneBotAction<RefuseOnlineFilePayload, any> {
    actionName: "refuse_online_file";
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
    };
    returnExample: null;
    _handle(payload: RefuseOnlineFilePayload): Promise<void>;
}
