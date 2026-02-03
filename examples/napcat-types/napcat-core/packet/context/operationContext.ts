import { PacketContext } from '../../packet/context/packetContext';
import { PacketMsg } from '../../packet/message/message';
import { PacketMsgPicElement } from '../../packet/message/element';
import { RawMessage } from '../../index';
import { MiniAppRawData, MiniAppReqParams } from '../../packet/entities/miniApp';
import { AIVoiceChatType } from '../../packet/entities/aiChat';
import { IndexNode, MsgInfo, PushMsgBody } from '../../packet/transformer/proto';
import { OidbPacket } from '../../packet/transformer/base';
import { ImageOcrResult } from '../../packet/entities/ocrResult';
import { UploadForwardMsgParams } from '../../packet/transformer/message/UploadForwardMsgV2';
export declare class PacketOperationContext {
    private readonly context;
    constructor(context: PacketContext);
    sendPacket<T extends boolean = false>(pkt: OidbPacket, rsp?: T): Promise<T extends true ? Buffer : void>;
    SendPoke(is_group: boolean, peer: number, target?: number): Promise<void>;
    SetGroupTodo(groupUin: number, msgSeq: string): Promise<void>;
    FetchRkey(timeout?: number): Promise<NonNullable<{
        rkey: string;
        ttl: bigint;
        time: number;
        type: number;
    } & {}>[]>;
    GroupSign(groupUin: number): Promise<void>;
    GetStrangerStatus(uin: number): Promise<{
        status: number;
        ext_status: number;
    } | undefined>;
    SetGroupSpecialTitle(groupUin: number, uid: string, title: string): Promise<void>;
    UploadResources(msg: PacketMsg[], groupUin?: number): Promise<void>;
    UploadImage(img: PacketMsgPicElement): Promise<string>;
    GetImageUrl(selfUid: string, node: any): Promise<string>;
    GetPttUrl(selfUid: string, node: any, timeout?: number): Promise<string>;
    GetVideoUrl(selfUid: string, node: any, timeout?: number): Promise<string>;
    GetGroupImageUrl(groupUin: number, node: any, timeout?: number): Promise<string>;
    GetGroupPttUrl(groupUin: number, node: any, timeout?: number): Promise<string>;
    GetGroupVideoUrl(groupUin: number, node: any, timeout?: number): Promise<string>;
    ImageOCR(imgUrl: string): Promise<ImageOcrResult>;
    private SendPreprocess;
    FetchGroupMessage(groupUin: number, startSeq: number, endSeq: number): Promise<any[]>;
    FetchC2CMessage(targetUid: string, startSeq: number, endSeq: number): Promise<any[]>;
    UploadForwardMsg(msg: PacketMsg[], groupUin?: number): Promise<string>;
    UploadForwardMsgV2(msg: UploadForwardMsgParams[], groupUin?: number): Promise<string>;
    MoveGroupFile(groupUin: number, fileUUID: string, currentParentDirectory: string, targetParentDirectory: string): Promise<number>;
    RenameGroupFile(groupUin: number, fileUUID: string, currentParentDirectory: string, newName: string): Promise<number>;
    GetGroupFileUrl(groupUin: number, fileUUID: string, timeout?: number): Promise<string>;
    GetPrivateFileUrl(self_id: string, fileUUID: string, md5: string, timeout?: number): Promise<string>;
    GetMiniAppAdaptShareInfo(param: MiniAppReqParams): Promise<MiniAppRawData>;
    FetchAiVoiceList(groupUin: number, chatType: AIVoiceChatType): Promise<{
        category: string;
        voices: NonNullable<{
            voiceId: string;
            voiceDisplayName: string;
            voiceExampleUrl: string;
        } & {}>[];
    }[] | null>;
    GetAiVoice(groupUin: number, voiceId: string, text: string, chatType: AIVoiceChatType): Promise<any>;
    FetchForwardMsg(res_id: string): Promise<RawMessage[]>;
}
