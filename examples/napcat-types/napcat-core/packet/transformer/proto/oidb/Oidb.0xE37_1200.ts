export declare const OidbSvcTrpcTcp0XE37_1200: {
    subCommand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
        fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        t2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    }, true, false>;
    field101: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    field102: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    field200: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    field99999: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37_1200Body: {
    receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
    fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    t2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37_1200Response: {
    command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    subCommand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        state: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        result: import("napcat-protobuf").MessageProtoFieldType<() => {
            server: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            additionalServer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
            ssoPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            ssoUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            extra: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        }, true, false>;
        metadata: import("napcat-protobuf").MessageProtoFieldType<() => {
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
export declare const OidbSvcTrpcTcp0XE37_1200ResponseBody: {
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    state: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    result: import("napcat-protobuf").MessageProtoFieldType<() => {
        server: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        additionalServer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        ssoPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        ssoUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        extra: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
    metadata: import("napcat-protobuf").MessageProtoFieldType<() => {
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
export declare const OidbSvcTrpcTcp0XE37_1200Result: {
    server: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    additionalServer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    ssoPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    ssoUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    extra: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
export declare const OidbSvcTrpcTcp0XE37_800_1200Metadata: {
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
};
