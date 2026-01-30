export declare const OidbSvcTrpcTcp0XE37_800: {
    subCommand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        senderUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    }, true, false>;
    field101: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field102: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field200: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const OidbSvcTrpcTcp0XE37_800Body: {
    senderUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37Response: {
    command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    upload: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        totalSpace: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
        usedSpace: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
        uploadedSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
        uploadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        uploadDomain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        uploadPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        uuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        uploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        packSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        uploadIpList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        uploadHttpsPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        uploadHttpsDomain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        uploadDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        uploadLanip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileAddon: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        mediaPlatformUploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
    businessId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    flagSupportMediaPlatform: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const ApplyUploadRespV3: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    totalSpace: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
    usedSpace: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
    uploadedSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
    uploadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    uploadDomain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    uploadPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    uuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    uploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    packSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    uploadIpList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    uploadHttpsPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    uploadHttpsDomain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    uploadDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    uploadLanip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    fileAddon: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    mediaPlatformUploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37_800Response: {
    command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    subCommand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        field30: import("napcat-protobuf").MessageProtoFieldType<() => {
            uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            size: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            timestamp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            field100: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
            field101: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
            field110: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            timestamp1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            field141: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
            field142: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        }, true, false>;
    }, true, false>;
    field50: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37_800ResponseBody: {
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    field30: import("napcat-protobuf").MessageProtoFieldType<() => {
        uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        size: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        timestamp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        field100: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        field101: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        field110: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        timestamp1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        field141: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        field142: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
};
