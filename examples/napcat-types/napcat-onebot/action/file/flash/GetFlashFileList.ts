import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetFlashFileListPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
}>;
export type GetFlashFileListPayload = Static<typeof GetFlashFileListPayloadSchema>;
export declare class GetFlashFileList extends OneBotAction<GetFlashFileListPayload, any> {
    actionName: "get_flash_file_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        fileset_id: string;
    };
    returnExample: {
        file_name: string;
        size: number;
    }[];
    _handle(payload: GetFlashFileListPayload): Promise<import("../../../../napcat-core/data/flash").FileListResponse>;
}
