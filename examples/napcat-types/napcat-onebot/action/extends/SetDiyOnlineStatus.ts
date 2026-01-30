import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    face_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    face_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    wording: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TString;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetDiyOnlineStatus extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_diy_online_status";
    payloadSchema: import("@sinclair/typebox").TObject<{
        face_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        face_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        wording: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TString;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        face_id: string;
        face_type: string;
        wording: string;
    };
    returnExample: string;
    _handle(payload: PayloadType): Promise<string>;
}
export {};
