import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetCredentialsPayloadSchema: import("@sinclair/typebox").TObject<{
    domain: import("@sinclair/typebox").TString;
}>;
export type GetCredentialsPayload = Static<typeof GetCredentialsPayloadSchema>;
export declare const GetCredentialsReturnSchema: import("@sinclair/typebox").TObject<{
    cookies: import("@sinclair/typebox").TString;
    token: import("@sinclair/typebox").TNumber;
}>;
export type GetCredentialsResponse = Static<typeof GetCredentialsReturnSchema>;
export declare class GetCredentials extends OneBotAction<GetCredentialsPayload, GetCredentialsResponse> {
    actionName: "get_credentials";
    payloadSchema: import("@sinclair/typebox").TObject<{
        domain: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        cookies: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        domain: string;
    };
    returnExample: {
        cookies: string;
        token: number;
    };
    _handle(payload: GetCredentialsPayload): Promise<{
        cookies: string;
        token: number;
    }>;
}
