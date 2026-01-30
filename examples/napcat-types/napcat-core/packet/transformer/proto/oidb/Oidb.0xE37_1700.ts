export declare const OidbSvcTrpcTcp0XE37_1700: {
    command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    upload: import("napcat-protobuf").MessageProtoFieldType<() => {
        senderUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        md510MCheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        sha1CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        localPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        md5CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        sha3CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
    businessId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    flagSupportMediaPlatform: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
};
export declare const ApplyUploadReqV3: {
    senderUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    md510MCheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    sha1CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    localPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    md5CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    sha3CheckSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
