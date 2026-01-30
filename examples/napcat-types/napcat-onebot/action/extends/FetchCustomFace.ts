import { Static } from '@sinclair/typebox';
import { OneBotAction } from '../../action/OneBotAction';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class FetchCustomFace extends OneBotAction<PayloadType, ReturnType> {
    actionName: "fetch_custom_face";
    payloadSchema: import("@sinclair/typebox").TObject<{
        count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        count: number;
    };
    returnExample: string[];
    _handle(payload: PayloadType): Promise<string[]>;
}
export {};
