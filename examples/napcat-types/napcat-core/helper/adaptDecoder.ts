export declare function decodeProfileLikeTip(buffer: Uint8Array): import("napcat-protobuf").any;
    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    content: import("napcat-protobuf").MessageProtoFieldType<() => {
        msg: import("napcat-protobuf").MessageProtoFieldType<() => {
            times: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            detail: import("napcat-protobuf").MessageProtoFieldType<() => {
                txt: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, false, false>;
                nickname: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            }, false, false>;
        }, false, false>;
    }, false, false>;
}>;
export declare function decodeSysMessage(buffer: Uint8Array): import("napcat-protobuf").any {
        PeerNumber: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        PeerString: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        Uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        Uid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    }, false, true>;
    msgSpec: import("napcat-protobuf").MessageProtoFieldType<() => {
        msgType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        subSubType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        msgSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        msgId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        other: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
    bodyWrapper: import("napcat-protobuf").MessageProtoFieldType<() => {
        wrappedBody: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    }, false, false>;
}>;
