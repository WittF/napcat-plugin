import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
import { PacketMsg } from '../../../packet/message/message';
export interface UploadForwardMsgParams {
    actionCommand: string;
    actionMsg: PacketMsg[];
}
declare class UploadForwardMsgV2 extends PacketTransformer<typeof proto.SendLongMsgResp> {
    build(selfUid: string, msg: UploadForwardMsgParams[], groupUin?: number): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            resId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
        settings: import("napcat-protobuf").MessageProtoFieldType<() => {
            field1: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            field2: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            field3: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            field4: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        }, false, false>;
    }>;
}
declare const _default: UploadForwardMsgV2;
export default _default;
