import { OneBotAction } from '../OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    clientkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetClientkey extends OneBotAction<void, ReturnType> {
    actionName: "get_clientkey";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        clientkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        clientkey: string;
    };
    _handle(): Promise<{
        clientkey: string;
    }>;
}
export {};
