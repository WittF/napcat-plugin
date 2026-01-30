import { OneBotRequestToolkit } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
import { StreamPacket } from './StreamBasic';
import { BaseDownloadStream, DownloadResult } from './BaseDownloadStream';
export declare const DownloadFileRecordStreamPayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chunk_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    out_format: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type DownloadFileRecordStreamPayload = Static<typeof DownloadFileRecordStreamPayloadSchema>;
export declare class DownloadFileRecordStream extends BaseDownloadStream<DownloadFileRecordStreamPayload, DownloadResult> {
    actionName: "download_file_record_stream";
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
        out_format: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    useStream: boolean;
    _handle(payload: DownloadFileRecordStreamPayload, _adaptername: string, _config: NetworkAdapterConfig, req: OneBotRequestToolkit): Promise<StreamPacket<DownloadResult>>;
}
