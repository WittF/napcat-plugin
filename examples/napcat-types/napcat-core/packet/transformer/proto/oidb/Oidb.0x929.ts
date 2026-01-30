export declare const OidbSvcTrpcTcp0X929D_0: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    chatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0X929D_0Resp: {
    content: import("napcat-protobuf").MessageProtoFieldType<() => {
        category: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        voices: import("napcat-protobuf").MessageProtoFieldType<() => {
            voiceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            voiceDisplayName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
            voiceExampleUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        }, false, true>;
    }, false, true>;
};
export declare const OidbSvcTrpcTcp0X929D_0RespContent: {
    category: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    voices: import("napcat-protobuf").MessageProtoFieldType<() => {
        voiceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        voiceDisplayName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        voiceExampleUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, true>;
};
export declare const OidbSvcTrpcTcp0X929D_0RespContentVoice: {
    voiceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    voiceDisplayName: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    voiceExampleUrl: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const OidbSvcTrpcTcp0X929B_0: {
    groupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    voiceId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    text: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    chatType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    session: import("napcat-protobuf").MessageProtoFieldType<() => {
        sessionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
};
export declare const OidbSvcTrpcTcp0X929B_0_Session: {
    sessionId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const OidbSvcTrpcTcp0X929B_0Resp: {
    statusCode: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field2: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, true, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    msgInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        MsgInfoBody: import("napcat-protobuf").MessageProtoFieldType<() => {
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
        ExtBizInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
            Pic: import("napcat-protobuf").MessageProtoFieldType<() => {
                BizType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                TextSummary: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                BytesPbReserveC2c: import("napcat-protobuf").MessageProtoFieldType<() => {
                    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field8: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field12: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field18: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field19: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field20: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, false, false>;
                BytesPbReserveTroop: import("napcat-protobuf").MessageProtoFieldType<() => {
                    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field9: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                    field12: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field18: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field19: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
                    field21: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                }, false, false>;
                FromScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                ToScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                OldFileId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, false, false>;
            Video: import("napcat-protobuf").MessageProtoFieldType<() => {
                FromScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                ToScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            }, false, false>;
            Ptt: import("napcat-protobuf").MessageProtoFieldType<() => {
                SrcUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
                PttScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                PttType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                ChangeVoice: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                Waveform: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                AutoConvertText: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                BytesReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
                BytesGeneralFlags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
            }, false, false>;
            BusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, false>;
    }, true, false>;
};
