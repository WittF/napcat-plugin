import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    base64: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    headers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TString;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GoCQHTTPDownloadFile extends OneBotAction<PayloadType, ReturnType> {
    actionName: "download_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        base64: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        headers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        url: string;
        thread_count: number;
        headers: string;
    };
    returnExample: {
        file: string;
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
    getHeaders(headersIn?: string | string[]): Record<string, string>;
}
export {};
