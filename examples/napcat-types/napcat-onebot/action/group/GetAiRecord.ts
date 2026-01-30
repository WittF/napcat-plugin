import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    character: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TString;
    text: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TString;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetAiRecord extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "get_ai_record";
    payloadSchema: import("@sinclair/typebox").TObject<{
        character: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TString;
        text: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TString;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        character: string;
        group_id: string;
        text: string;
    };
    returnExample: string;
    _handle(payload: PayloadType): Promise<string>;
}
export {};
