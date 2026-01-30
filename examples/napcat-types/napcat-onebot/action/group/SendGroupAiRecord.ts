import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    character: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TString;
    text: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TNumber;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SendGroupAiRecord extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "send_group_ai_record";
    payloadSchema: import("@sinclair/typebox").TObject<{
        character: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TString;
        text: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        character: string;
        group_id: string;
        text: string;
    };
    returnExample: {};
    _handle(payload: PayloadType): Promise<{
        message_id: number;
    }>;
}
export {};
