import { OneBotAction } from '../../action/OneBotAction';
import { OB11Message, OB11MessageNodePlain as OB11MessageNode } from '../../index';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    messages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GoCQHTTPGetForwardMsgAction extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_forward_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        messages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: string;
    };
    returnExample: {
        messages: never[];
    };
    private createTemplateNode;
    parseForward(messages: OB11Message[]): Promise<OB11MessageNode[]>;
    _handle(payload: PayloadType): Promise<{
        messages: any;
    }>;
}
export {};
