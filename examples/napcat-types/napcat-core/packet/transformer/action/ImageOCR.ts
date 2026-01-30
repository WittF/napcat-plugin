import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
declare class ImageOCR extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0xE07_0_Response> {
    build(url: string): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any;
        errMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        wording: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        ocrRspBody: import("napcat-protobuf").MessageProtoFieldType<() => {
            textDetections: import("napcat-protobuf").MessageProtoFieldType<() => {
                detectedText: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                confidence: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                polygon: import("napcat-protobuf").MessageProtoFieldType<() => {
                    coordinates: import("napcat-protobuf").MessageProtoFieldType<() => {
                        x: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
                        y: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.INT32, false, false>;
                    }, false, true>;
                }, false, false>;
                advancedInfo: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            }, false, true>;
            language: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            requestId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            ocrLanguageList: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, true>;
            dstTranslateLanguageList: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, true>;
            languageList: import("napcat-protobuf").MessageProtoFieldType<() => {
                languageCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                languageDesc: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            }, false, true>;
            afterCompressWeight: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            afterCompressHeight: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        }, false, false>;
    }>;
}
declare const _default: ImageOCR;
export default _default;
