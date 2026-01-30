export declare const MiniAppAdaptShareInfoReq: {
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    body: import("napcat-protobuf").MessageProtoFieldType<() => {
        extInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
            field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        }, false, false>;
        appid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        title: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        desc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        scene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        templateType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        businessType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        picUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        vidUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        jumpUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        iconUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        verType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        shareType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        versionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        withShareTicket: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        webURL: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        appidRich: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        template: import("napcat-protobuf").MessageProtoFieldType<() => {
            templateId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            templateData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, false>;
        field20: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
};
export declare const MiniAppAdaptShareInfoReqBody: {
    extInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    }, false, false>;
    appid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    title: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    desc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    scene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    templateType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    businessType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    picUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    vidUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    jumpUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    iconUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    verType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    shareType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    versionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    withShareTicket: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    webURL: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    appidRich: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    template: import("napcat-protobuf").MessageProtoFieldType<() => {
        templateId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        templateData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    field20: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const ExtInfo: {
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
export declare const Template: {
    templateId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    templateData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const MiniAppAdaptShareInfoResp: {
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    content: import("napcat-protobuf").MessageProtoFieldType<() => {
        jsonContent: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
};
export declare const MiniAppAdaptShareInfoRespContent: {
    jsonContent: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
