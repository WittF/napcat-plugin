import { CustomFace, Elem, MsgInfo, NotOnlineImage, OidbSvcTrpcTcp0XE37_800Response, PushMsgBody } from '../../packet/transformer/proto';
import { MessageElement, PicType, SendArkElement, SendFaceElement, SendFileElement, SendMarkdownElement, SendMarketFaceElement, SendPicElement, SendPttElement, SendReplyElement, SendMultiForwardMsgElement, SendTextElement, SendVideoElement, Peer } from '../../index';
import { PacketMsg, PacketSendMsgElement } from '../../packet/message/message';
export type ParseElementFnR = [MessageElement, any | null] | undefined;
type ParseElementFn = (elem: any) => ParseElementFnR;
export declare abstract class IPacketMsgElement<T extends PacketSendMsgElement> {
    protected constructor(_rawElement: T);
    get valid(): boolean;
    buildContent(): Uint8Array | undefined;
    buildElement(): any[];
    static parseElement: ParseElementFn;
    toPreview(): string;
}
export declare class PacketMsgTextElement extends IPacketMsgElement<SendTextElement> {
    text: string;
    constructor(element: SendTextElement);
    buildElement(): any[];
    static parseElement: (elem: any) => ParseElementFnR;
    toPreview(): string;
}
export declare class PacketMsgAtElement extends PacketMsgTextElement {
    targetUid: string;
    atAll: boolean;
    constructor(element: SendTextElement);
    buildElement(): any[];
    static parseElement: (elem: any) => ParseElementFnR;
}
export declare class PacketMsgReplyElement extends IPacketMsgElement<SendReplyElement> {
    time: number;
    targetMessageId: bigint;
    targetMessageSeq: number;
    targetMessageClientSeq: number;
    targetUin: number;
    targetUid: string;
    targetElems?: any[];
    targetSourceMsg?: any;
    targetPeer?: Peer;
    constructor(element: SendReplyElement);
    get isGroupReply(): boolean;
    buildElement(): any[];
    static parseElement: (elem: any) => ParseElementFnR;
    toPreview(): string;
}
export declare class PacketMsgFaceElement extends IPacketMsgElement<SendFaceElement> {
    faceId: number;
    isLargeFace: boolean;
    resultId?: string;
    constructor(element: SendFaceElement);
    buildElement(): any[];
    static parseElement: (elem: any) => ParseElementFnR;
    toPreview(): string;
}
export declare class PacketMsgMarkFaceElement extends IPacketMsgElement<SendMarketFaceElement> {
    emojiName: string;
    emojiId: string;
    emojiPackageId: number;
    emojiKey: string;
    constructor(element: SendMarketFaceElement);
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMsgPicElement extends IPacketMsgElement<SendPicElement> {
    path: string;
    name: string;
    size: number;
    md5: string;
    width: number;
    height: number;
    picType: PicType;
    picSubType: number;
    summary: string;
    sha1: string | null;
    msgInfo: any | null;
    groupPicExt: any | null;
    c2cPicExt: any | null;
    constructor(element: SendPicElement);
    get valid(): boolean;
    buildElement(): any[];
    static parseElement: (elem: any) => ParseElementFnR;
    toPreview(): string;
}
export declare class PacketMsgVideoElement extends IPacketMsgElement<SendVideoElement> {
    fileSize?: string;
    filePath?: string;
    thumbSize?: number;
    thumbPath?: string;
    fileMd5?: string;
    fileSha1?: string;
    thumbMd5?: string;
    thumbSha1?: string;
    thumbWidth?: number;
    thumbHeight?: number;
    msgInfo: any | null;
    constructor(element: SendVideoElement);
    get valid(): boolean;
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMsgPttElement extends IPacketMsgElement<SendPttElement> {
    filePath: string;
    fileSize: number;
    fileMd5: string;
    fileSha1?: string;
    fileDuration: number;
    msgInfo: any | null;
    constructor(element: SendPttElement);
    get valid(): boolean;
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMsgFileElement extends IPacketMsgElement<SendFileElement> {
    fileName: string;
    filePath: string;
    fileSize: number;
    fileSha1?: Uint8Array;
    fileMd5?: Uint8Array;
    fileUuid?: string;
    fileHash?: string;
    isGroupFile?: boolean;
    _private_send_uid?: string;
    _private_recv_uid?: string;
    _e37_800_rsp?: any;
    constructor(element: SendFileElement);
    get valid(): boolean;
    buildContent(): Uint8Array | undefined;
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMsgLightAppElement extends IPacketMsgElement<SendArkElement> {
    payload: string;
    constructor(element: SendArkElement);
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMsgMarkDownElement extends IPacketMsgElement<SendMarkdownElement> {
    content: string;
    constructor(element: SendMarkdownElement);
    buildElement(): any[];
    toPreview(): string;
}
export declare class PacketMultiMsgElement extends IPacketMsgElement<SendMultiForwardMsgElement> {
    resid: string;
    message: PacketMsg[];
    constructor(rawElement: SendMultiForwardMsgElement, message?: PacketMsg[]);
    buildElement(): any[];
    toPreview(): string;
}
export {};
