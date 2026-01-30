import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPUploadGroupFilePayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    upload_file: import("@sinclair/typebox").TBoolean;
}>;
export type GoCQHTTPUploadGroupFilePayload = Static<typeof GoCQHTTPUploadGroupFilePayloadSchema>;
export declare const GoCQHTTPUploadGroupFileReturnSchema: import("@sinclair/typebox").TObject<{
    file_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
}>;
export type GoCQHTTPUploadGroupFileResponse = Static<typeof GoCQHTTPUploadGroupFileReturnSchema>;
export default class GoCQHTTPUploadGroupFile extends OneBotAction<GoCQHTTPUploadGroupFilePayload, GoCQHTTPUploadGroupFileResponse> {
    actionName: "upload_group_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        upload_file: import("@sinclair/typebox").TBoolean;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        file_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file: string;
        name: string;
    };
    returnExample: {
        file_id: string;
    };
    _handle(payload: GoCQHTTPUploadGroupFilePayload): Promise<GoCQHTTPUploadGroupFileResponse>;
}
