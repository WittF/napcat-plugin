export declare const OidbSvcTrpcTcp0XFE1_2: {
    uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    key: import("napcat-protobuf").MessageProtoFieldType<() => {
        key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
};
export declare const OidbSvcTrpcTcp0XFE1_2Key: {
    key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0XFE1_2RSP_Status: {
    key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    value: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
};
export declare const OidbSvcTrpcTcp0XFE1_2RSP_Data: {
    status: import("napcat-protobuf").MessageProtoFieldType<() => {
        key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        value: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    }, false, false>;
};
export declare const OidbSvcTrpcTcp0XFE1_2RSP: {
    data: import("napcat-protobuf").MessageProtoFieldType<() => {
        status: import("napcat-protobuf").MessageProtoFieldType<() => {
            key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            value: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        }, false, false>;
    }, false, false>;
};
