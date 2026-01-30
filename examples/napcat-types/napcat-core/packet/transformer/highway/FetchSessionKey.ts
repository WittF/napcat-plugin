import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class FetchSessionKey extends PacketTransformer<typeof proto.HttpConn0x6ff_501Response> {
    build(): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            sigSession: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            sessionKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            serverInfos: import("napcat-protobuf").MessageProtoFieldType<() => {
                serviceType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                serverAddrs: import("napcat-protobuf").MessageProtoFieldType<() => {
                    type: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    ip: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.FIXED32, false, false>;
                    port: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    area: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, true>;
            }, false, true>;
        }, false, false>;
    }>;
}
declare const _default: FetchSessionKey;
export default _default;
