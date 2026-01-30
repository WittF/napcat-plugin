import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class FetchRkey extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0X9067_202_Rsp_Body> {
    build(): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            rkeyList: import("napcat-protobuf").MessageProtoFieldType<() => {
                rkey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                ttl: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
                time: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                type: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            }, false, true>;
        }, false, false>;
    }>;
}
declare const _default: FetchRkey;
export default _default;
