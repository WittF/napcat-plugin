export declare const OidbSvcTrpcTcp0x6D6: {
    file: import("napcat-protobuf").MessageProtoFieldType<() => {
        groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        entrance: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        targetDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        localDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileSha3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        field15: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    }, true, false>;
    download: import("napcat-protobuf").MessageProtoFieldType<() => {
        groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, true, false>;
    delete: import("napcat-protobuf").MessageProtoFieldType<() => {
        groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, true, false>;
    rename: import("napcat-protobuf").MessageProtoFieldType<() => {
        groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        parentFolder: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        newFileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, true, false>;
    move: import("napcat-protobuf").MessageProtoFieldType<() => {
        groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        parentDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        targetDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, true, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Upload: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    entrance: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    targetDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    localDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileSha3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    field15: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Download: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Delete: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Rename: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    parentFolder: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    newFileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Move: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    parentDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    targetDirectory: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6Response: {
    upload: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        uploadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        serverDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        checkKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        uploadIpLanV4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        uploadIpLanV6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        uploadPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    download: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        downloadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        downloadDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        downloadUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileSha3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        cookieVal: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        saveFileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        previewPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    delete: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    rename: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    move: import("napcat-protobuf").MessageProtoFieldType<() => {
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6_0Response: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    uploadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    serverDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    checkKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    boolFileExist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    uploadIpLanV4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    uploadIpLanV6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    uploadPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6_2Response: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    downloadIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    downloadDns: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    downloadUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileSha3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    cookieVal: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    saveFileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    previewPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0x6D6_3_4_5Response: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    retMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    clientWording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
