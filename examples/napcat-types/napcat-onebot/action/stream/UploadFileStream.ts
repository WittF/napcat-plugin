import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
import { StreamPacket } from './StreamBasic';
export declare const UploadFileStreamPayloadSchema: import("@sinclair/typebox").TObject<{
    stream_id: import("@sinclair/typebox").TString;
    chunk_data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    chunk_index: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    total_chunks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    file_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    expected_sha256: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    is_complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    filename: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    reset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    verify_only: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    file_retention: import("@sinclair/typebox").TNumber;
}>;
export type UploadFileStreamPayload = Static<typeof UploadFileStreamPayloadSchema>;
interface StreamResult {
    stream_id: string;
    status: 'file_created' | 'chunk_received' | 'file_complete';
    received_chunks: number;
    total_chunks: number;
    file_path?: string;
    file_size?: number;
    sha256?: string;
}
export declare class UploadFileStream extends OneBotAction<UploadFileStreamPayload, StreamPacket<StreamResult>> {
    actionName: "upload_file_stream";
    payloadSchema: import("@sinclair/typebox").TObject<{
        stream_id: import("@sinclair/typebox").TString;
        chunk_data: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chunk_index: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        total_chunks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        file_size: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        expected_sha256: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        is_complete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        filename: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        verify_only: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        file_retention: import("@sinclair/typebox").TNumber;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        stream_id: string;
        chunk_data: string;
        chunk_index: number;
        total_chunks: number;
        file_size: number;
    };
    returnExample: {
        type: string;
        stream_id: string;
        status: string;
        received_chunks: number;
        total_chunks: number;
    };
    useStream: boolean;
    private static streams;
    private static memoryUsage;
    _handle(payload: UploadFileStreamPayload, _adaptername: string, _config: NetworkAdapterConfig): Promise<StreamPacket<StreamResult>>;
    private getOrCreateStream;
    private createStream;
    private shouldUseMemory;
    private setupDiskStorage;
    private setupTimeout;
    private processChunk;
    private refreshTimeout;
    private getStreamStatus;
    private completeStream;
    private mergeMemoryChunks;
    private mergeDiskChunks;
    private validateSha256;
    private cleanupStream;
}
export {};
