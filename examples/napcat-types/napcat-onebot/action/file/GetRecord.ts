import { GetFileBase, GetFileResponse } from './GetFile';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    out_format: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
export default class GetRecord extends GetFileBase {
    actionName: "get_record";
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        out_format: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        file: string;
        out_format: string;
    };
    returnExample: {
        file: string;
        url: string;
    };
    _handle(payload: PayloadType): Promise<GetFileResponse>;
}
export {};
