import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    words: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    words: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class TranslateEnWordToZn extends OneBotAction<PayloadType, ReturnType> {
    actionName: "translate_en2zh";
    payloadSchema: import("@sinclair/typebox").TObject<{
        words: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        words: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        words: string[];
    };
    returnExample: {
        words: string[];
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
