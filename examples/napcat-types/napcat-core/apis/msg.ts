import { ChatType, GetFileListParam, Peer, RawMessage, SendMessageElement } from '../types';
import { GroupFileInfoUpdateItem, InstanceContext, NapCatCore, NodeIKernelMsgService } from '../index';
import { GeneralCallResult } from '../services/common';
export declare class NTQQMsgApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    clickInlineKeyboardButton(...params: Parameters<NodeIKernelMsgService['clickInlineKeyboardButton']>): Promise<GeneralCallResult & {
        status: number;
        promptText: string;
        promptType: number;
        promptIcon: number;
    }>;
    getMsgByClientSeqAndTime(peer: Peer, replyMsgClientSeq: string, replyMsgTime: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    getAioFirstViewLatestMsgs(peer: Peer, MsgCount: number): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    sendShowInputStatusReq(peer: Peer, eventType: number): Promise<unknown>;
    getSourceOfReplyMsgV2(peer: Peer, clientSeq: string, time: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    getMsgEmojiLikesList(peer: Peer, msgSeq: string, emojiId: string, emojiType: string, cookie?: string, count?: number): Promise<{
        result: number;
        errMsg: string;
        emojiLikesList: Array<{
            tinyId: string;
            nickName: string;
            headUrl: string;
        }>;
        cookie: string;
        isLastPage: boolean;
        isFirstPage: boolean;
    }>;
    setEmojiLike(peer: Peer, msgSeq: string, emojiId: string, set?: boolean): Promise<unknown>;
    getMultiMsg(peer: Peer, rootMsgId: string, parentMsgId: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    } | undefined>;
    ForwardMsg(peer: Peer, msgIds: string[]): Promise<GeneralCallResult>;
    getMsgsByMsgId(peer: Peer | undefined, msgIds: string[] | undefined): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    getSingleMsg(peer: Peer, seq: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    fetchFavEmojiList(num: number): Promise<GeneralCallResult & {
        emojiInfoList: Array<{
            uin: string;
            emoId: number;
            emoPath: string;
            isExist: boolean;
            resId: string;
            url: string;
            md5: string;
            emoOriginalPath: string;
            thumbPath: string;
            RomaingType: string;
            isAPNG: false;
            isMarkFace: false;
            eId: string;
            epId: string;
            ocrWord: string;
            modifyWord: string;
            exposeNum: number;
            clickNum: number;
            desc: string;
        }>;
    }>;
    queryMsgsWithFilterExWithSeq(peer: Peer, msgSeq: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    queryMsgsWithFilterExWithSeqV2(peer: Peer, msgSeq: string, MsgTime: string, SendersUid: string[]): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    queryMsgsWithFilterExWithSeqV3(peer: Peer, msgSeq: string, SendersUid: string[]): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    queryFirstMsgBySeq(peer: Peer, msgSeq: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    getMsgsBySeqAndCount(peer: Peer, seq: string, count: number, desc: boolean, isReverseOrder: boolean): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    getMsgExBySeq(peer: Peer, msgSeq: string): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    queryFirstMsgBySender(peer: Peer, SendersUid: string[]): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    setMsgRead(peer: Peer): Promise<GeneralCallResult>;
    getGroupFileList(GroupCode: string, params: GetFileListParam): Promise<GroupFileInfoUpdateItem[]>;
    getMsgHistory(peer: Peer, msgId: string, count: number, isReverseOrder?: boolean): Promise<GeneralCallResult & {
        msgList: RawMessage[];
    }>;
    recallMsg(peer: Peer, msgId: string): Promise<[EventRet: unknown, _msgList: RawMessage[]]>;
    PrepareTempChat(toUserUid: string, GroupCode: string, nickname: string): Promise<unknown>;
    getTempChatInfo(chatType: ChatType, peerUid: string): Promise<import("../types").TmpChatInfoApi>;
    sendMsg(peer: Peer, msgElements: SendMessageElement[], timeout?: number): Promise<RawMessage | undefined>;
    generateMsgUniqueId(chatType: number): Promise<string>;
    forwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]): Promise<GeneralCallResult>;
    multiForwardMsg(srcPeer: Peer, destPeer: Peer, msgIds: string[]): Promise<RawMessage>;
    markAllMsgAsRead(): Promise<unknown>;
}
