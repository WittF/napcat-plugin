import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SendFlashMsgPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SendFlashMsgPayload = Static<typeof SendFlashMsgPayloadSchema>;
export declare class SendFlashMsg extends OneBotAction<SendFlashMsgPayload, any> {
    actionName: "send_flash_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        fileset_id: string;
        user_id: string;
    };
    returnExample: {
        message_id: number;
    };
    _handle(payload: SendFlashMsgPayload): Promise<{
        errCode: number;
        errMsg: string;
        rsp: {
            sendStatus: import("../../../../napcat-core/data/flash").SendStatus[];
        };
    }>;
}
