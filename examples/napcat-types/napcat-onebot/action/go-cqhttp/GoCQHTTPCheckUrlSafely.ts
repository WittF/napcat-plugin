import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPCheckUrlSafelyPayloadSchema: import("@sinclair/typebox").TObject<{
    url: import("@sinclair/typebox").TString;
}>;
export type GoCQHTTPCheckUrlSafelyPayload = Static<typeof GoCQHTTPCheckUrlSafelyPayloadSchema>;
export declare const GoCQHTTPCheckUrlSafelyReturnSchema: import("@sinclair/typebox").TObject<{
    level: import("@sinclair/typebox").TNumber;
}>;
export type GoCQHTTPCheckUrlSafelyReturn = Static<typeof GoCQHTTPCheckUrlSafelyReturnSchema>;
export declare class GoCQHTTPCheckUrlSafely extends OneBotAction<GoCQHTTPCheckUrlSafelyPayload, GoCQHTTPCheckUrlSafelyReturn> {
    actionName: "check_url_safely";
    payloadSchema: import("@sinclair/typebox").TObject<{
        url: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        level: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        url: string;
    };
    returnExample: {
        level: number;
    };
    _handle(): Promise<{
        level: number;
    }>;
}
