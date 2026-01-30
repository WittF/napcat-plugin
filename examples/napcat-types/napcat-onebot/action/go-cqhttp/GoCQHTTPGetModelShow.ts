import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPGetModelShowPayloadSchema: import("@sinclair/typebox").TObject<{
    model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type GoCQHTTPGetModelShowPayload = Static<typeof GoCQHTTPGetModelShowPayloadSchema>;
export declare const GoCQHTTPGetModelShowReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    variants: import("@sinclair/typebox").TObject<{
        model_show: import("@sinclair/typebox").TString;
        need_pay: import("@sinclair/typebox").TBoolean;
    }>;
}>>;
export type GoCQHTTPGetModelShowReturn = Static<typeof GoCQHTTPGetModelShowReturnSchema>;
export declare class GoCQHTTPGetModelShow extends OneBotAction<GoCQHTTPGetModelShowPayload, GoCQHTTPGetModelShowReturn> {
    actionName: "_get_model_show";
    payloadSchema: import("@sinclair/typebox").TObject<{
        model: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        variants: import("@sinclair/typebox").TObject<{
            model_show: import("@sinclair/typebox").TString;
            need_pay: import("@sinclair/typebox").TBoolean;
        }>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        model: string;
    };
    returnExample: {
        variants: never[];
    };
    _handle(payload: GoCQHTTPGetModelShowPayload): Promise<{
        variants: {
            model_show: string;
            need_pay: boolean;
        };
    }[]>;
}
