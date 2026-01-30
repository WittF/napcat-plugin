import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class RenameGroupFile extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0x6D6Response> {
    build(groupUin: number, fileUUID: string, currentParentDirectory: string, newName: string): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            clientWording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            uploadIp: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            serverDns: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            busId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            fileId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            checkKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            fileKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BOOL, false, false>;
            uploadIpLanV4: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, true>;
            uploadIpLanV6: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, true>;
            uploadPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        }, false, false>;
        download: import("napcat-protobuf").MessageProtoFieldType<() => {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            clientWording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            downloadIp: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            downloadDns: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            downloadUrl: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            fileSha1: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            fileSha3: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            fileMd5: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            cookieVal: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            saveFileName: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            previewPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        }, false, false>;
        delete: import("napcat-protobuf").MessageProtoFieldType<() => {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            clientWording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
        rename: import("napcat-protobuf").MessageProtoFieldType<() => {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            clientWording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
        move: import("napcat-protobuf").MessageProtoFieldType<() => {
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
            retMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            clientWording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
    }>;
}
declare const _default: RenameGroupFile;
export default _default;
