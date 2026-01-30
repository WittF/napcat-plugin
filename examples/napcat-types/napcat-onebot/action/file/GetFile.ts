import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetFilePayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type GetFilePayload = Static<typeof GetFilePayloadSchema>;
export declare const GetFileReturnSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    base64: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type GetFileResponse = Static<typeof GetFileReturnSchema>;
export declare class GetFileBase extends OneBotAction<GetFilePayload, GetFileResponse> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        base64: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    actionTags: string[];
    _handle(payload: GetFilePayload): Promise<GetFileResponse>;
}
export default class GetFile extends GetFileBase {
    actionName: "get_file";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        file: string;
    };
    returnExample: {
        file: string;
        url: string;
        file_size: number;
        file_name: string;
    };
}
