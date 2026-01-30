import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetFilesetInfoPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
}>;
export type GetFilesetInfoPayload = Static<typeof GetFilesetInfoPayloadSchema>;
export declare class GetFilesetInfo extends OneBotAction<GetFilesetInfoPayload, any> {
    actionName: "get_fileset_info";
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
        fileset_id: string;
        file_list: never[];
    };
    _handle(payload: GetFilesetInfoPayload): Promise<import("../../../../napcat-core").GeneralCallResult & {
        seq: number;
        isCache: boolean;
        fileSet: import("../../../../napcat-core/data/flash").FlashFileSetInfo;
    }>;
}
