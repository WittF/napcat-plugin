import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetCookiesPayloadSchema: import("@sinclair/typebox").TObject<{
    domain: import("@sinclair/typebox").TString;
}>;
export type GetCookiesPayload = Static<typeof GetCookiesPayloadSchema>;
export declare const GetCookiesReturnSchema: import("@sinclair/typebox").TObject<{
    cookies: import("@sinclair/typebox").TString;
    bkn: import("@sinclair/typebox").TString;
}>;
export type GetCookiesResponse = Static<typeof GetCookiesReturnSchema>;
export declare class GetCookies extends OneBotAction<GetCookiesPayload, GetCookiesResponse> {
    actionName: "get_cookies";
    payloadSchema: import("@sinclair/typebox").TObject<{
        domain: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        cookies: import("@sinclair/typebox").TString;
        bkn: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        domain: string;
    };
    returnExample: {
        cookies: string;
        bkn: string;
    };
    _handle(payload: GetCookiesPayload): Promise<{
        cookies: string;
        bkn: string;
    }>;
}
