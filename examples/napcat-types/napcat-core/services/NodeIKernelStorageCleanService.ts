import { NodeIKernelStorageCleanListener } from '../listeners';
import { GeneralCallResult } from './common';
export interface NodeIKernelStorageCleanService {
    addKernelStorageCleanListener(listener: NodeIKernelStorageCleanListener): number;
    removeKernelStorageCleanListener(listenerId: number): void;
    addCacheScanedPaths(paths: Map<`tmp` | `SilentCacheappSessionPartation9212` | `hotUpdate`, unknown>): unknown;
    addFilesScanedPaths(arg: unknown): unknown;
    scanCache(): Promise<GeneralCallResult & {
        size: string[];
    }>;
    addReportData(arg: unknown): unknown;
    reportData(): unknown;
    getChatCacheInfo(tableType: number, pageSize: number, order: number, startPosition: number): Promise<unknown>;
    getFileCacheInfo(fileType: number, restart: boolean, pageSize: number, lastRecord: number, param: unknown): Promise<unknown>;
    clearChatCacheInfo(chatInfoList: unknown[], clearKeys: number[]): Promise<unknown>;
    clearCacheDataByKeys(keys: Array<string>): Promise<GeneralCallResult>;
    setSilentScan(isSilent: boolean): unknown;
    closeCleanWindow(): unknown;
    clearAllChatCacheInfo(): unknown;
    endScan(arg: unknown): unknown;
    addNewDownloadOrUploadFile(arg: unknown): unknown;
    isNull(): boolean;
}
