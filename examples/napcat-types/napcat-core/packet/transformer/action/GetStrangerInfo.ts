import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class GetStrangerInfo extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0XFE1_2RSP> {
    build(uin: number): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            status: import("napcat-protobuf").MessageProtoFieldType<() => {
                key: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                value: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
            }, false, false>;
        }, false, false>;
    }>;
}
declare const _default: GetStrangerInfo;
export default _default;
