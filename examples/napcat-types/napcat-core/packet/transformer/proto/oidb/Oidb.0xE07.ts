export declare const OidbSvcTrpcTcp0xE07_0: {
    version: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    client: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    entrance: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    ocrReqBody: import("napcat-protobuf").MessageProtoFieldType<() => {
        imageUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        languageType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        scene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        originMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        afterCompressMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        afterCompressFileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        afterCompressWeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        afterCompressHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        isCut: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    }, true, false>;
};
export declare const OcrReqBody: {
    imageUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    languageType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    scene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    originMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    afterCompressMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    afterCompressFileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    afterCompressWeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    afterCompressHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    isCut: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
};
export declare const OidbSvcTrpcTcp0xE07_0_Response: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    errMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    wording: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    ocrRspBody: import("napcat-protobuf").MessageProtoFieldType<() => {
        textDetections: import("napcat-protobuf").MessageProtoFieldType<() => {
            detectedText: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            confidence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            polygon: import("napcat-protobuf").MessageProtoFieldType<() => {
                coordinates: import("napcat-protobuf").MessageProtoFieldType<() => {
                    x: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    y: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                }, false, true>;
            }, false, false>;
            advancedInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, true>;
        language: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        requestId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        ocrLanguageList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        dstTranslateLanguageList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        languageList: import("napcat-protobuf").MessageProtoFieldType<() => {
            languageCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            languageDesc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, true>;
        afterCompressWeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        afterCompressHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
};
export declare const OcrRspBody: {
    textDetections: import("napcat-protobuf").MessageProtoFieldType<() => {
        detectedText: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        confidence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        polygon: import("napcat-protobuf").MessageProtoFieldType<() => {
            coordinates: import("napcat-protobuf").MessageProtoFieldType<() => {
                x: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                y: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            }, false, true>;
        }, false, false>;
        advancedInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, true>;
    language: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    requestId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    ocrLanguageList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    dstTranslateLanguageList: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    languageList: import("napcat-protobuf").MessageProtoFieldType<() => {
        languageCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        languageDesc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, true>;
    afterCompressWeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    afterCompressHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const TextDetection: {
    detectedText: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    confidence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    polygon: import("napcat-protobuf").MessageProtoFieldType<() => {
        coordinates: import("napcat-protobuf").MessageProtoFieldType<() => {
            x: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            y: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        }, false, true>;
    }, false, false>;
    advancedInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const Polygon: {
    coordinates: import("napcat-protobuf").MessageProtoFieldType<() => {
        x: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        y: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    }, false, true>;
};
export declare const Coordinate: {
    x: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    y: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const Language: {
    languageCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    languageDesc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
