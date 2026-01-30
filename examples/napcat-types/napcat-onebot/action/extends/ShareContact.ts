import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    phone_number: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SharePeerBase extends OneBotAction<PayloadType, ReturnType> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        phone_number: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        phone_number: string;
    };
    returnExample: {
        ark: string;
    };
    _handle(payload: PayloadType): Promise<(import("../../../napcat-core").GeneralCallResult & {
        arkJson: string;
    }) | (import("../../../napcat-core").GeneralCallResult & {
        arkMsg: string;
    })>;
}
declare const PayloadSchemaGroupEx: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
export declare class SharePeer extends SharePeerBase {
    actionName: "ArkSharePeer";
}
type PayloadTypeGroupEx = Static<typeof PayloadSchemaGroupEx>;
declare const ReturnSchemaGroupEx: import("@sinclair/typebox").TString;
type ReturnTypeGroupEx = Static<typeof ReturnSchemaGroupEx>;
export declare class ShareGroupExBase extends OneBotAction<PayloadTypeGroupEx, ReturnTypeGroupEx> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TString;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: string;
    _handle(payload: PayloadTypeGroupEx): Promise<string>;
}
export declare class ShareGroupEx extends ShareGroupExBase {
    actionName: "ArkShareGroup";
}
export declare class SendGroupArkShare extends ShareGroupExBase {
    actionName: "send_group_ark_share";
}
export declare class SendArkShare extends SharePeerBase {
    actionName: "send_ark_share";
}
export {};
