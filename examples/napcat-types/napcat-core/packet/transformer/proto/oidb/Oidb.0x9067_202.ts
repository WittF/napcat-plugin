export declare const OidbSvcTrpcTcp0X9067_202: {
    ReqHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        Common: import("napcat-protobuf").MessageProtoFieldType<() => {
            RequestId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            Command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, false>;
        Scene: import("napcat-protobuf").MessageProtoFieldType<() => {
            RequestType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            BusinessType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            SceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            C2C: import("napcat-protobuf").MessageProtoFieldType<() => {
                AccountType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                TargetUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            }, true, false>;
            Group: import("napcat-protobuf").MessageProtoFieldType<() => {
                GroupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, true, false>;
        }, false, false>;
        Client: import("napcat-protobuf").MessageProtoFieldType<() => {
            AgentType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, false>;
    }, false, false>;
    DownloadRKeyReq: import("napcat-protobuf").MessageProtoFieldType<() => {
        key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
    }, false, false>;
};
export declare const OidbSvcTrpcTcp0X9067_202Key: {
    key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
};
export declare const OidbSvcTrpcTcp0X9067_202_RkeyList: {
    rkey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    ttl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0X9067_202_Data: {
    rkeyList: import("napcat-protobuf").MessageProtoFieldType<() => {
        rkey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        ttl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
};
export declare const OidbSvcTrpcTcp0X9067_202_Rsp_Body: {
    data: import("napcat-protobuf").MessageProtoFieldType<() => {
        rkeyList: import("napcat-protobuf").MessageProtoFieldType<() => {
            rkey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            ttl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
            time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, true>;
    }, false, false>;
};
