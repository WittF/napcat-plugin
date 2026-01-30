import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
import { PacketMsgFileElement } from '../../../packet/message/element';
declare class UploadPrivateFile extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0XE37Response> {
    build(selfUid: string, peerUid: string, file: PacketMsgFileElement): Promise<OidbPacket>;
    parse(data: Buffer): import("napcat-protobuf").any;
        seq: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
        upload: import("napcat-protobuf").MessageProtoFieldType<() => {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            totalSpace: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT64, false, false>;
            usedSpace: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT64, false, false>;
            uploadedSize: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT64, false, false>;
            uploadIp: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uploadDomain: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uploadPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            uuid: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uploadKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, true, false>;
            boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BOOL, false, false>;
            packSize: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            uploadIpList: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, true>;
            uploadHttpsPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            uploadHttpsDomain: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uploadDns: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uploadLanip: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            fileAddon: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            mediaPlatformUploadKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, true, false>;
        }, true, false>;
        businessId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
        clientType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
        flagSupportMediaPlatform: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
    }>;
}
declare const _default: UploadPrivateFile;
export default _default;
