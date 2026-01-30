import { ChatType, ElementType, Peer, PicElement, RawMessage } from '../types';
import { InstanceContext, NapCatCore, SearchResultItem } from '../index';
import { RkeyManager } from '../helper/rkey';
export declare class NTQQFileApi {
    context: InstanceContext;
    core: NapCatCore;
    rkeyManager: RkeyManager;
    packetRkey: Array<{
        rkey: string;
        time: number;
        type: number;
        ttl: bigint;
    }> | undefined;
    private fetchRkeyFailures;
    private readonly MAX_RKEY_FAILURES;
    constructor(context: InstanceContext, core: NapCatCore);
    private fetchRkeyWithRetry;
    getFileUrl(chatType: ChatType, peer: string, fileUUID?: string, file10MMd5?: string | undefined, timeout?: number): Promise<string>;
    getPttUrl(peer: string, fileUUID?: string, timeout?: number): Promise<string>;
    getVideoUrlPacket(peer: string, fileUUID?: string, timeout?: number): Promise<string>;
    copyFile(filePath: string, destPath: string): Promise<void>;
    getFileSize(filePath: string): Promise<number>;
    getVideoUrl(peer: Peer, msgId: string, elementId: string): Promise<{
        url: string;
        isHttps: boolean;
        httpsDomain: string;
    }[]>;
    uploadFile(filePath: string, elementType?: ElementType, elementSubType?: number, uploadGroupFile?: boolean): Promise<{
        md5: string;
        fileName: string;
        path: string;
        fileSize: number;
        ext: string;
    }>;
    downloadFileForModelId(peer: Peer, modelId: string, unknown: string, timeout?: number): Promise<string>;
    downloadRawMsgMedia(msg: RawMessage[]): Promise<string[]>;
    downloadMedia(msgId: string, chatType: ChatType, peerUid: string, elementId: string, thumbPath: string, sourcePath: string, timeout?: number, force?: boolean): Promise<string>;
    searchForFile(keys: string[]): Promise<SearchResultItem | undefined>;
    downloadFileById(fileId: string, fileSize?: number, estimatedTime?: number): Promise<string>;
    getImageUrl(element: PicElement): Promise<string>;
    private getRkeyData;
    private getImageUrlFromParsedUrl;
    private getImageUrlFromMd5;
}
