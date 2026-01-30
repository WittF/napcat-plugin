import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    app_name: import("@sinclair/typebox").TString;
    protocol_version: import("@sinclair/typebox").TString;
    app_version: import("@sinclair/typebox").TString;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GetVersionInfo extends OneBotAction<void, ReturnType> {
    actionName: "get_version_info";
    returnSchema: import("@sinclair/typebox").TObject<{
        app_name: import("@sinclair/typebox").TString;
        protocol_version: import("@sinclair/typebox").TString;
        app_version: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        app_name: string;
        protocol_version: string;
        app_version: string;
    };
    _handle(): Promise<ReturnType>;
}
export {};
