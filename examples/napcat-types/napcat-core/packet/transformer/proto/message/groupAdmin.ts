export declare const GroupAdminExtra: {
    adminUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
};
export declare const GroupAdminBody: {
    extraDisable: import("napcat-protobuf").MessageProtoFieldType<() => {
        adminUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    }, false, false>;
    extraEnable: import("napcat-protobuf").MessageProtoFieldType<() => {
        adminUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    }, false, false>;
};
export declare const GroupAdmin: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        extraDisable: import("napcat-protobuf").MessageProtoFieldType<() => {
            adminUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        }, false, false>;
        extraEnable: import("napcat-protobuf").MessageProtoFieldType<() => {
            adminUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            isPromote: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        }, false, false>;
    }, false, false>;
};
