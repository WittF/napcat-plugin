import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetFlashFileUrlPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
    file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_index: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type GetFlashFileUrlPayload = Static<typeof GetFlashFileUrlPayloadSchema>;
export declare class GetFlashFileUrl extends OneBotAction<GetFlashFileUrlPayload, any> {
    actionName: "get_flash_file_url";
    payloadSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
        file_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_index: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        fileset_id: string;
    };
    returnExample: {
        url: string;
    };
    _handle(payload: GetFlashFileUrlPayload): Promise<import("../../../../napcat-core").GeneralCallResult & {
        transferUrl: string;
    }>;
}
