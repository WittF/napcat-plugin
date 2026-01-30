import { OneBotAction } from '../../action/OneBotAction';
import { Peer } from '../../../napcat-core/types';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPUploadPrivateFilePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    file: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    upload_file: import("@sinclair/typebox").TBoolean;
}>;
export type GoCQHTTPUploadPrivateFilePayload = Static<typeof GoCQHTTPUploadPrivateFilePayloadSchema>;
export declare const GoCQHTTPUploadPrivateFileReturnSchema: import("@sinclair/typebox").TObject<{
    file_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
}>;
export type GoCQHTTPUploadPrivateFileResponse = Static<typeof GoCQHTTPUploadPrivateFileReturnSchema>;
export default class GoCQHTTPUploadPrivateFile extends OneBotAction<GoCQHTTPUploadPrivateFilePayload, GoCQHTTPUploadPrivateFileResponse> {
    actionName: "upload_private_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        file: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        upload_file: import("@sinclair/typebox").TBoolean;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        file_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        file: string;
        name: string;
    };
    returnExample: {
        file_id: string;
    };
    getPeer(payload: GoCQHTTPUploadPrivateFilePayload): Promise<Peer>;
    _handle(payload: GoCQHTTPUploadPrivateFilePayload): Promise<GoCQHTTPUploadPrivateFileResponse>;
}
