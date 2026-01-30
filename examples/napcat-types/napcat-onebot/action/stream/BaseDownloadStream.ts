import { OneBotAction, OneBotRequestToolkit } from '../../action/OneBotAction';
import { StreamPacket } from './StreamBasic';
export interface ResolvedFileInfo {
    downloadPath: string;
    fileName: string;
    fileSize: number;
}
export interface DownloadResult {
    file_name?: string;
    file_size?: number;
    chunk_size?: number;
    index?: number;
    data?: string;
    size?: number;
    progress?: number;
    base64_size?: number;
    total_chunks?: number;
    total_bytes?: number;
    message?: string;
    data_type?: 'file_info' | 'file_chunk' | 'file_complete';
    width?: number;
    height?: number;
    out_format?: string;
}
export declare abstract class BaseDownloadStream<PayloadType, ResultType> extends OneBotAction<PayloadType, StreamPacket<ResultType>> {
    protected resolveDownload(file?: string): Promise<ResolvedFileInfo>;
    protected streamFileChunks(req: OneBotRequestToolkit, streamPath: string, chunkSize: number, chunkDataType: string): Promise<{
        totalChunks: number;
        totalBytes: number;
    }>;
}
