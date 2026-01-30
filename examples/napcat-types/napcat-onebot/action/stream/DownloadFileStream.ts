import { OneBotRequestToolkit } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
import { StreamPacket } from './StreamBasic';
import { BaseDownloadStream, DownloadResult } from './BaseDownloadStream';
declare const DownloadFileStreamPayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chunk_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type DownloadFileStreamPayload = Static<typeof DownloadFileStreamPayloadSchema>;
export declare class DownloadFileStream extends BaseDownloadStream<DownloadFileStreamPayload, DownloadResult> {
    actionName: "download_file_stream";
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chunk_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        file: string;
    };
    returnExample: {
        type: string;
        data_type: string;
        file_name: string;
        file_size: number;
    };
    useStream: boolean;
    _handle(payload: DownloadFileStreamPayload, _adaptername: string, _config: NetworkAdapterConfig, req: OneBotRequestToolkit): Promise<StreamPacket<DownloadResult>>;
}
export {};
