import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetCSRFReturnSchema: import("@sinclair/typebox").TObject<{
    token: import("@sinclair/typebox").TNumber;
}>;
export type GetCSRFReturnType = Static<typeof GetCSRFReturnSchema>;
export declare class GetCSRF extends OneBotAction<void, GetCSRFReturnType> {
    actionName: "get_csrf_token";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        token: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        token: number;
    };
    _handle(): Promise<{
        token: number;
    }>;
}
