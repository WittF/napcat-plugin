import { PushMsgBody } from '../../packet/transformer/proto';
import { PacketMsg } from '../../packet/message/message';
import { PacketMsgTextElement } from '../../packet/message/element';
export declare class PacketMsgBuilder {
    protected static failBackText: PacketMsgTextElement;
    buildFakeMsg(selfUid: string, element: PacketMsg[]): any[];
}
