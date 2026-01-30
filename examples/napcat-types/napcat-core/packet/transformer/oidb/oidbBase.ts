import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class OidbBase extends PacketTransformer<typeof proto.OidbSvcTrpcTcpBase> {
    build(cmd: number, subCmd: number, body: Uint8Array, isUid?: boolean, _isLafter?: boolean): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any;
        subCommand: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        errorCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        body: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
        errorMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
        isReserved: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
    }>;
}
declare const _default: OidbBase;
export default _default;
