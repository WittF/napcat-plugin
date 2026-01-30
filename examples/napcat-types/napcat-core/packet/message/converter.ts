import { MessageElement, Peer, RawMessage } from '../../index';
import { PacketMsg, PacketSendMsgElement } from '../../packet/message/message';
import { Elem } from '../../packet/transformer/proto';
export type rawMsgWithSendMsg = {
    senderUin: number;
    senderUid?: string;
    senderName: string;
    groupId?: number;
    time: number;
    msg: PacketSendMsgElement[];
};
export declare class PacketMsgConverter {
    private isValidElementType;
    private readonly rawToPacketMsgConverters;
    rawMsgWithSendMsgToPacketMsg(msg: rawMsgWithSendMsg): PacketMsg;
    rawMsgToPacketMsg(msg: RawMessage, ctxPeer: Peer): PacketMsg;
    packetMsgToRaw(msg: any[]): [MessageElement, any | null][];
}
