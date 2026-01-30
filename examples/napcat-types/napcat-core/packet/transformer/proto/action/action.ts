export declare const FaceRoamRequest: {
    comm: import("napcat-protobuf").MessageProtoFieldType<() => {
        imPlat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        osVersion: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        qVersion: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    }, true, false>;
    selfUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    subCmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const PlatInfo: {
    imPlat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    osVersion: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    qVersion: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
};
export declare const FaceRoamResponse: {
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    errMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    subCmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    userInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        deleteFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
        bid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        maxRoamSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        emojiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, true>;
    }, false, false>;
};
export declare const FaceRoamUserInfo: {
    fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    deleteFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, true>;
    bid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    maxRoamSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    emojiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, true>;
};
export declare const SendMessageRequest: {
    state: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    sizeCache: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    unknownFields: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    routingHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        c2c: import("napcat-protobuf").MessageProtoFieldType<() => {
            uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            uid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            sig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            receiverUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        }, true, false>;
        grp: import("napcat-protobuf").MessageProtoFieldType<() => {
            groupCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        }, true, false>;
        grpTmp: import("napcat-protobuf").MessageProtoFieldType<() => {
            groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        }, true, false>;
        wpaTmp: import("napcat-protobuf").MessageProtoFieldType<() => {
            toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
            sig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        }, true, false>;
        trans0X211: import("napcat-protobuf").MessageProtoFieldType<() => {
            toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
            ccCmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            uid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        }, true, false>;
    }, false, false>;
    contentHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        c2cCmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        ranDom: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        sequence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        timeStamp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        pkgNum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
        pkgIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        divSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        autoReply: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        ntMsgSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        newId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
        forward: import("napcat-protobuf").MessageProtoFieldType<() => {
            field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
            unknownBase64: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            avatar: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        }, true, false>;
    }, false, false>;
    messageBody: import("napcat-protobuf").MessageProtoFieldType<() => {
        richText: import("napcat-protobuf").MessageProtoFieldType<() => {
            attr: import("napcat-protobuf").MessageProtoFieldType<() => {
                codePage: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                random: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                color: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                size: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                effect: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                charSet: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                pitchAndFamily: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                fontName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                reserveData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            }, true, false>;
            elems: import("napcat-protobuf").MessageProtoFieldType<() => {
                text: import("napcat-protobuf").MessageProtoFieldType<() => {
                    str: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                    lint: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                    attr6Buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    attr7Buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                }, true, false>;
                face: import("napcat-protobuf").MessageProtoFieldType<() => {
                    index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    old: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                }, true, false>;
                onlineImage: import("napcat-protobuf").MessageProtoFieldType<() => {
                    guid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    oldVerSendFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                notOnlineImage: import("napcat-protobuf").MessageProtoFieldType<() => {
                    filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    fileLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    downloadPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    oldVerSendFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    imgType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    previewsImage: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    picMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    picHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    picWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    resId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    thumbUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    original: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    bigUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    origUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    bizType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    result: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    opFaceBuf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    oldPicMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                    thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    showLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    downloadLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    x400Url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    x400Width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    x400Height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pbRes: import("napcat-protobuf").MessageProtoFieldType<() => {
                        subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        summary: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                        field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        field20: import("napcat-protobuf").MessageProtoFieldType<() => {
                            field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            field5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            field7: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                        }, false, false>;
                        url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                        md5Str: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    }, false, false>;
                }, true, false>;
                transElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                    elemType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    elemValue: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                marketFace: import("napcat-protobuf").MessageProtoFieldType<() => {
                    faceName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    itemType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    faceInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    faceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    tabId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    param: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    mediaType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    imageWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    imageHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    mobileparam: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    pbReserve: import("napcat-protobuf").MessageProtoFieldType<() => {
                        field8: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    }, false, false>;
                }, true, false>;
                customFace: import("napcat-protobuf").MessageProtoFieldType<() => {
                    guid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    shortcut: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    buffer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    oldData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    serverIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    serverPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    fileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    signature: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    useful: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    thumbUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    bigUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    origUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    bizType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    repeatIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    repeatImage: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    imageType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    source: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    size: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    origin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    showLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    downloadLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    x400Url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                    x400Width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    x400Height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pbRes: import("napcat-protobuf").MessageProtoFieldType<() => {
                        subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        summary: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    }, true, false>;
                }, true, false>;
                elemFlags2: import("napcat-protobuf").MessageProtoFieldType<() => {
                    colorTextId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    msgId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    whisperSessionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    pttChangeBit: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    vipStatus: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    compatibleId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    insts: import("napcat-protobuf").MessageProtoFieldType<() => {
                        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        instId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    }, false, true>;
                    msgRptCnt: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    srcInst: import("napcat-protobuf").MessageProtoFieldType<() => {
                        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        instId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    }, false, false>;
                    longtitude: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    latitude: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    customFont: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    pcSupportDef: import("napcat-protobuf").MessageProtoFieldType<() => {
                        pcPtlBegin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        pcPtlEnd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        macPtlBegin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        macPtlEnd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        ptlsSupport: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
                        ptlsNotSupport: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, true>;
                    }, false, false>;
                    crmFlags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
                }, true, false>;
                richMsg: import("napcat-protobuf").MessageProtoFieldType<() => {
                    template1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    serviceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    msgResId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    rand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
                }, true, false>;
                groupFile: import("napcat-protobuf").MessageProtoFieldType<() => {
                    filename: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    batchId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    fileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    mark: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    sequence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    batchItemId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    feedMsgTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                extraInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                    nick: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    groupCard: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    level: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    flags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    groupMask: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    msgTailId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    senderTitle: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    apnsTips: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    msgStateFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    apnsSoundType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    newGroupFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                }, true, false>;
                videoFile: import("napcat-protobuf").MessageProtoFieldType<() => {
                    fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    fileFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    fileTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    thumbFileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    source: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    thumbFileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    busiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    fromChatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    toChatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    boolSupportProgressive: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                    fileWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    fileHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    subBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    videoAttr: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    bytesThumbFileUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                    bytesVideoFileUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                    thumbDownloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    videoDownloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                anonymousGroupMessage: import("napcat-protobuf").MessageProtoFieldType<() => {
                    flags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    anonId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    anonNick: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    headPortrait: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    expireTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    bubbleId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    rankColor: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                customElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                    desc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    data: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    enumType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    ext: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    sound: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                generalFlags: import("napcat-protobuf").MessageProtoFieldType<() => {
                    bubbleDiyTextId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    groupFlagNew: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    rpId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    prpFold: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    longTextFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    longTextResId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                    groupType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    toUinFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    glamourLevel: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    memberLevel: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    groupRankSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    olympicTorch: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    babyqGuideMsgCookie: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    uin32ExpertFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    bubbleSubId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pendantId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    rpIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, true, false>;
                srcMsg: import("napcat-protobuf").MessageProtoFieldType<() => {
                    origSeqs: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, true>;
                    senderUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                    time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    elems: import("napcat-protobuf").MessageProtoFieldType<() => {
                        text: import("napcat-protobuf").MessageProtoFieldType<() => {
                            str: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                            lint: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                            attr6Buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            attr7Buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                        }, true, false>;
                        face: import("napcat-protobuf").MessageProtoFieldType<() => {
                            index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            old: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            buf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                        }, true, false>;
                        onlineImage: import("napcat-protobuf").MessageProtoFieldType<() => {
                            guid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            oldVerSendFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        notOnlineImage: import("napcat-protobuf").MessageProtoFieldType<() => {
                            filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            fileLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            downloadPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            oldVerSendFile: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            imgType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            previewsImage: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            picMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            picHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            picWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            resId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            thumbUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            original: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            bigUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            origUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            bizType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            result: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            opFaceBuf: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            oldPicMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                            thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            showLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            downloadLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            x400Url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            x400Width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            x400Height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pbRes: import("napcat-protobuf").MessageProtoFieldType<() => {
                                subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                summary: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                                field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                field20: import("napcat-protobuf").MessageProtoFieldType<() => {
                                    field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                                    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                    field5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                    field7: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                                }, false, false>;
                                url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                                md5Str: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            }, false, false>;
                        }, true, false>;
                        transElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                            elemType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            elemValue: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        marketFace: import("napcat-protobuf").MessageProtoFieldType<() => {
                            faceName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            itemType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            faceInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            faceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            tabId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            key: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            param: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            mediaType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            imageWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            imageHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            mobileparam: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            pbReserve: import("napcat-protobuf").MessageProtoFieldType<() => {
                                field8: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            }, false, false>;
                        }, true, false>;
                        customFace: import("napcat-protobuf").MessageProtoFieldType<() => {
                            guid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            filePath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            shortcut: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            buffer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            oldData: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            serverIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            serverPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            fileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            signature: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            useful: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            thumbUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            bigUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            origUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            bizType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            repeatIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            repeatImage: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            imageType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            index: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            source: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            size: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            origin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            showLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            downloadLen: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            x400Url: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                            x400Width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            x400Height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pbRes: import("napcat-protobuf").MessageProtoFieldType<() => {
                                subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                                summary: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            }, true, false>;
                        }, true, false>;
                        elemFlags2: import("napcat-protobuf").MessageProtoFieldType<() => {
                            colorTextId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            msgId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            whisperSessionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            pttChangeBit: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            vipStatus: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            compatibleId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            insts: import("napcat-protobuf").MessageProtoFieldType<() => {
                                appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                instId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            }, false, true>;
                            msgRptCnt: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            srcInst: import("napcat-protobuf").MessageProtoFieldType<() => {
                                appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                instId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            }, false, false>;
                            longtitude: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            latitude: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            customFont: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                            pcSupportDef: import("napcat-protobuf").MessageProtoFieldType<() => {
                                pcPtlBegin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                pcPtlEnd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                macPtlBegin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                macPtlEnd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                                ptlsSupport: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
                                ptlsNotSupport: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, true>;
                            }, false, false>;
                            crmFlags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
                        }, true, false>;
                        richMsg: import("napcat-protobuf").MessageProtoFieldType<() => {
                            template1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            serviceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            msgResId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                            rand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                            seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
                        }, true, false>;
                        groupFile: import("napcat-protobuf").MessageProtoFieldType<() => {
                            filename: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            batchId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            fileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            mark: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            sequence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            batchItemId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            feedMsgTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        extraInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                            nick: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            groupCard: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            level: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            flags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            groupMask: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            msgTailId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            senderTitle: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            apnsTips: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            msgStateFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            apnsSoundType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            newGroupFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                        }, true, false>;
                        videoFile: import("napcat-protobuf").MessageProtoFieldType<() => {
                            fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                            fileFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            fileTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            thumbWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            thumbHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            thumbFileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            source: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            thumbFileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            busiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            fromChatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            toChatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            boolSupportProgressive: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                            fileWidth: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            fileHeight: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            subBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            videoAttr: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            bytesThumbFileUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                            bytesVideoFileUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                            thumbDownloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            videoDownloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        anonymousGroupMessage: import("napcat-protobuf").MessageProtoFieldType<() => {
                            flags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            anonId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            anonNick: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            headPortrait: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            expireTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            bubbleId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            rankColor: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        customElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                            desc: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            data: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            enumType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            ext: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            sound: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        generalFlags: import("napcat-protobuf").MessageProtoFieldType<() => {
                            bubbleDiyTextId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            groupFlagNew: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            rpId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            prpFold: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            longTextFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            longTextResId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                            groupType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            toUinFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            glamourLevel: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            memberLevel: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            groupRankSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            olympicTorch: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            babyqGuideMsgCookie: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            uin32ExpertFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            bubbleSubId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pendantId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                            rpIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                        }, true, false>;
                        srcMsg: import("napcat-protobuf").MessageProtoFieldType</*elided*/ any, true, false>;
                        lightAppElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                            data: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            msgResid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                        }, true, false>;
                        commonElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                            serviceType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                            pbElem: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                            businessType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                        }, true, false>;
                    }, false, true>;
                    type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                    richMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    pbReserve: import("napcat-protobuf").MessageProtoFieldType<() => {
                        messageId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                        senderUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                        receiverUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                        friendSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
                    }, true, false>;
                    sourceMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                    toUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
                    troopName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                }, true, false>;
                lightAppElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                    data: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    msgResid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                }, true, false>;
                commonElem: import("napcat-protobuf").MessageProtoFieldType<() => {
                    serviceType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    pbElem: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                    businessType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                }, true, false>;
            }, false, true>;
            notOnlineFile: import("napcat-protobuf").MessageProtoFieldType<() => {
                fileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                sig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
                fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT64, true, false>;
                note: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                reserved: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                subcmd: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                microCloud: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                bytesFileUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                downloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                dangerEvel: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                lifeTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                uploadTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                absFileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                expireTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, true, false>;
                pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
                fileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
            }, true, false>;
            ptt: import("napcat-protobuf").MessageProtoFieldType<() => {
                fileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                srcUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                reserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                serverIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                serverPort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                boolValid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                signature: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                shortcut: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                fileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                magicPttIndex: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                voiceSwitch: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                pttUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                groupFileKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                downPara: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                format: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                pbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                bytesPttUrls: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
                downloadFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            }, true, false>;
        }, true, false>;
        msgContent: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
        msgEncryptContent: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, false, false>;
    msgSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    msgRand: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    syncCookie: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    msgVia: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    dataStatist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    messageControl: import("napcat-protobuf").MessageProtoFieldType<() => {
        msgFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    }, false, false>;
    multiSendSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const SendMessageResponse: {
    result: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    errMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    timestamp1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    groupSequence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    timestamp2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    privateSequence: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const SetStatus: {
    status: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    extStatus: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    batteryStatus: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    customExt: import("napcat-protobuf").MessageProtoFieldType<() => {
        faceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        text: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, true, false>;
};
export declare const SetStatusCustomExt: {
    faceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    text: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const SetStatusResponse: {
    message: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const HttpConn: {
    field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    tgt: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    serviceTypes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
    field9: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    field11: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    ver: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const HttpConn0x6ff_501: {
    httpConn: import("napcat-protobuf").MessageProtoFieldType<() => {
        field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        tgt: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        field6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        serviceTypes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
        field9: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        field11: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        ver: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
};
export declare const HttpConn0x6ff_501Response: {
    httpConn: import("napcat-protobuf").MessageProtoFieldType<() => {
        sigSession: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        sessionKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        serverInfos: import("napcat-protobuf").MessageProtoFieldType<() => {
            serviceType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            serverAddrs: import("napcat-protobuf").MessageProtoFieldType<() => {
                type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.FIXED32, false, false>;
                port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                area: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, false, true>;
        }, false, true>;
    }, false, false>;
};
export declare const HttpConnResponse: {
    sigSession: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    sessionKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    serverInfos: import("napcat-protobuf").MessageProtoFieldType<() => {
        serviceType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        serverAddrs: import("napcat-protobuf").MessageProtoFieldType<() => {
            type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.FIXED32, false, false>;
            port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            area: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, true>;
    }, false, true>;
};
export declare const ServerAddr: {
    type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.FIXED32, false, false>;
    port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    area: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const ServerInfo: {
    serviceType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    serverAddrs: import("napcat-protobuf").MessageProtoFieldType<() => {
        type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.FIXED32, false, false>;
        port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        area: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
};
