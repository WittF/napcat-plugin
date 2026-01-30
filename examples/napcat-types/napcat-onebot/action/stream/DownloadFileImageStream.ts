import { OneBotRequestToolkit } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
import { StreamPacket } from './StreamBasic';
import { BaseDownloadStream, DownloadResult } from './BaseDownloadStream';
export declare const DownloadFileImageStreamPayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chunk_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type DownloadFileImageStreamPayload = Static<typeof DownloadFileImageStreamPayloadSchema>;
export declare class DownloadFileImageStream extends BaseDownloadStream<DownloadFileImageStreamPayload, DownloadResult> {
    actionName: "download_file_image_stream";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        file: string;
    };
    returnExample: {
        file: string;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chunk_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    useStream: boolean;
    _handle(payload: DownloadFileImageStreamPayload, _adaptername: string, _config: NetworkAdapterConfig, req: OneBotRequestToolkit): Promise<StreamPacket<DownloadResult>>;
}
