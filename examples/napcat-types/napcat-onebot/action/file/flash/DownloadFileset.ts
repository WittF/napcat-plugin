import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const DownloadFilesetPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
}>;
export type DownloadFilesetPayload = Static<typeof DownloadFilesetPayloadSchema>;
export declare class DownloadFileset extends OneBotAction<DownloadFilesetPayload, any> {
    actionName: "download_fileset";
    payloadSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        fileset_id: string;
    };
    returnExample: null;
    _handle(payload: DownloadFilesetPayload): Promise<import("../../../../napcat-core").GeneralCallResult & {
        extraInfo: unknown;
    }>;
}
