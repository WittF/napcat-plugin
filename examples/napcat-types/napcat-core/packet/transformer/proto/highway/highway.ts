export declare const DataHighwayHead: {
    version: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
    seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    retryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    dataFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    commandId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    buildVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
export declare const FileUploadExt: {
    unknown1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    unknown2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    unknown3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    entry: import("napcat-protobuf").MessageProtoFieldType<() => {
        busiBuff: import("napcat-protobuf").MessageProtoFieldType<() => {
            busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            senderUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
            receiverUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
            groupCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        }, false, false>;
        fileEntry: import("napcat-protobuf").MessageProtoFieldType<() => {
            fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
            md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            checkKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            md5S2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            uploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        }, false, false>;
        clientInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
            clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            terminalType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            clientVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        }, false, false>;
        fileNameInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
            fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, false>;
        host: import("napcat-protobuf").MessageProtoFieldType<() => {
            hosts: import("napcat-protobuf").MessageProtoFieldType<() => {
                url: import("napcat-protobuf").MessageProtoFieldType<() => {
                    unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                    host: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                }, false, false>;
                port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, false, true>;
        }, false, false>;
    }, false, false>;
    unknown200: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const FileUploadEntry: {
    busiBuff: import("napcat-protobuf").MessageProtoFieldType<() => {
        busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        senderUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        receiverUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        groupCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    }, false, false>;
    fileEntry: import("napcat-protobuf").MessageProtoFieldType<() => {
        fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        checkKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        md5S2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        uploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    }, false, false>;
    clientInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        terminalType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        clientVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    }, false, false>;
    fileNameInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    host: import("napcat-protobuf").MessageProtoFieldType<() => {
        hosts: import("napcat-protobuf").MessageProtoFieldType<() => {
            url: import("napcat-protobuf").MessageProtoFieldType<() => {
                unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
                host: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            }, false, false>;
            port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, true>;
    }, false, false>;
};
export declare const ExcitingBusiInfo: {
    busId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    senderUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    receiverUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    groupCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
};
export declare const ExcitingFileEntry: {
    fileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    checkKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    md5S2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    uploadKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
export declare const ExcitingClientInfo: {
    clientType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    terminalType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    clientVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
};
export declare const ExcitingFileNameInfo: {
    fileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const ExcitingHostConfig: {
    hosts: import("napcat-protobuf").MessageProtoFieldType<() => {
        url: import("napcat-protobuf").MessageProtoFieldType<() => {
            unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
            host: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, false>;
        port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
};
export declare const ExcitingHostInfo: {
    url: import("napcat-protobuf").MessageProtoFieldType<() => {
        unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
        host: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const ExcitingUrlInfo: {
    unknown: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, false>;
    host: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const LoginSigHead: {
    uint32LoginSigType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    bytesLoginSig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const NTV2RichMediaHighwayExt: {
    fileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    uKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    network: import("napcat-protobuf").MessageProtoFieldType<() => {
        ipv4s: import("napcat-protobuf").MessageProtoFieldType<() => {
            domain: import("napcat-protobuf").MessageProtoFieldType<() => {
                isEnable: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
                ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            }, false, false>;
            port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, true>;
    }, false, false>;
    msgInfoBody: import("napcat-protobuf").MessageProtoFieldType<() => {
        Index: import("napcat-protobuf").MessageProtoFieldType<() => {
            Info: import("napcat-protobuf").MessageProtoFieldType<() => {
                FileSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                FileHash: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                FileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                FileName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                Type: import("napcat-protobuf").MessageProtoFieldType<() => {
                    Type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    PicFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    VideoFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    VoiceFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                }, false, false>;
                Width: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                Height: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                Time: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                Original: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, false, false>;
            FileUuid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            StoreId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            UploadTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            Ttl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            SubType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, false>;
        Picture: import("napcat-protobuf").MessageProtoFieldType<() => {
            UrlPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            Ext: import("napcat-protobuf").MessageProtoFieldType<() => {
                OriginalParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                BigParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                ThumbParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            }, false, false>;
            Domain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, false>;
        Video: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        Audio: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        FileExist: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        HashSum: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    }, false, true>;
    blockSize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    hash: import("napcat-protobuf").MessageProtoFieldType<() => {
        fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
    }, false, false>;
};
export declare const NTHighwayHash: {
    fileSha1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, true>;
};
export declare const NTHighwayNetwork: {
    ipv4s: import("napcat-protobuf").MessageProtoFieldType<() => {
        domain: import("napcat-protobuf").MessageProtoFieldType<() => {
            isEnable: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
            ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, false>;
        port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
};
export declare const NTHighwayIPv4: {
    domain: import("napcat-protobuf").MessageProtoFieldType<() => {
        isEnable: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    port: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const NTHighwayDomain: {
    isEnable: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    ip: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const ReqDataHighwayHead: {
    msgBaseHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        version: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        retryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        dataFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        commandId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        buildVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
    msgSegHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        serviceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        filesize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        dataOffset: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
        dataLength: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        serviceTicket: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        cacheAddr: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        queryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        updateCacheIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        cachePort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    }, true, false>;
    bytesReqExtendInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    timestamp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    msgLoginSigHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        uint32LoginSigType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        bytesLoginSig: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, true, false>;
};
export declare const RespDataHighwayHead: {
    msgBaseHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        version: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        uin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, true, false>;
        seq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        retryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        appId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        dataFlag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        commandId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        buildVer: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    }, true, false>;
    msgSegHead: import("napcat-protobuf").MessageProtoFieldType<() => {
        serviceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        filesize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        dataOffset: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
        dataLength: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        serviceTicket: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        cacheAddr: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
        queryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        updateCacheIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        cachePort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    }, true, false>;
    errorCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    allowRetry: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    cacheCost: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    htCost: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    bytesRspExtendInfo: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
    timestamp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    range: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    isReset: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const SegHead: {
    serviceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    filesize: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    dataOffset: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, true, false>;
    dataLength: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    retCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    serviceTicket: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    flag: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    md5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    fileMd5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    cacheAddr: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    queryTimes: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    updateCacheIp: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    cachePort: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
};
export declare const GroupAvatarExtra: {
    type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field3: import("napcat-protobuf").MessageProtoFieldType<() => {
        field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    field5: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field6: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const GroupAvatarExtraField3: {
    field1: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
