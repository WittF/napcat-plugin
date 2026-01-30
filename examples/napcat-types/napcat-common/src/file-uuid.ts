import { Peer } from './types';
interface FileUUIDData {
    peer: Peer;
    modelId?: string;
    fileId?: string;
    msgId?: string;
    elementId?: string;
    fileUUID?: string;
}
export declare class FileNapCatOneBotUUIDWrap {
    private manager;
    constructor(ttl?: number);
    encodeModelId(peer: Peer, modelId: string, fileId: string, fileUUID?: string, endString?: string, customUUID?: string): string;
    decodeModelId(uuid: string): FileUUIDData | undefined;
    encode(peer: Peer, msgId: string, elementId: string, fileUUID?: string, customUUID?: string): string;
    decode(uuid: string): FileUUIDData | undefined;
}
export declare const FileNapCatOneBotUUID: FileNapCatOneBotUUIDWrap;
export {};
