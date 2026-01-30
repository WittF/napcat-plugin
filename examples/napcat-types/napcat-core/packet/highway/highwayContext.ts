import { PacketHighwayClient } from '../../packet/highway/client';
import { PacketLogger } from '../../packet/context/loggerContext';
import { PacketMsgFileElement, PacketMsgPicElement, PacketMsgPttElement, PacketMsgVideoElement } from '../../packet/message/element';
import { Peer } from '../../index';
import { NapCoreContext } from '../../packet/context/napCoreContext';
import { PacketClientContext } from '../../packet/context/clientContext';
export declare const BlockSize: number;
interface HighwayServerAddr {
    ip: string;
    port: number;
}
export interface PacketHighwaySig {
    uin: string;
    uid: string;
    sigSession: Uint8Array | null;
    sessionKey: Uint8Array | null;
    serverAddr: HighwayServerAddr[];
}
export declare class PacketHighwayContext {
    private readonly napcore;
    private readonly client;
    protected sig: PacketHighwaySig;
    protected logger: PacketLogger;
    protected hwClient: PacketHighwayClient;
    private cachedPrepareReq;
    constructor(napcore: NapCoreContext, logger: PacketLogger, client: PacketClientContext);
    private checkAvailable;
    private prepareUpload;
    uploadImage(peer: Peer, img: PacketMsgPicElement): Promise<void>;
    uploadVideo(peer: Peer, video: PacketMsgVideoElement): Promise<void>;
    /**
     * 确保视频缩略图存在，如果不存在则自动生成
     * @returns 生成的临时缩略图路径，用于后续清理
     */
    private ensureVideoThumb;
    uploadPtt(peer: Peer, ptt: PacketMsgPttElement): Promise<void>;
    uploadFile(peer: Peer, file: PacketMsgFileElement): Promise<void>;
    private uploadGroupImage;
    private uploadC2CImage;
    private uploadGroupVideo;
    private uploadC2CVideo;
    private uploadGroupPtt;
    private uploadC2CPtt;
    private uploadGroupFile;
    private uploadC2CFile;
}
export {};
