export declare const ForwardHead: {
    field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    unknownBase64: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    avatar: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
};
export declare const Grp: {
    groupCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
};
export declare const GrpTmp: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
};
export declare const ResponseForward: {
    friendName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
};
export declare const ResponseGrp: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    memberName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    unknown5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    groupName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const Trans0X211: {
    toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
    ccCmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    uid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
};
export declare const WPATmp: {
    toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    sig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
