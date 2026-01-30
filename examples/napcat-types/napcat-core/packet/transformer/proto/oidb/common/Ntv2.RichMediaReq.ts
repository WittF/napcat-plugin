export declare const NTV2RichMediaReq: {
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
    Upload: import("napcat-protobuf").MessageProtoFieldType<() => {
        UploadInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
            FileInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
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
            SubFileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, true>;
        TryFastUploadCompleted: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        SrvSendMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        ClientRandomId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        CompatQMsgSceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
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
        ClientSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        NoNeedCompatMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    }, false, false>;
    Download: import("napcat-protobuf").MessageProtoFieldType<() => {
        Node: import("napcat-protobuf").MessageProtoFieldType<() => {
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
        Download: import("napcat-protobuf").MessageProtoFieldType<() => {
            Pic: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
            Video: import("napcat-protobuf").MessageProtoFieldType<() => {
                BusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                SceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
                SubBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            }, false, false>;
            Ptt: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        }, false, false>;
    }, false, false>;
    DownloadRKey: import("napcat-protobuf").MessageProtoFieldType<() => {
        Types: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
    }, false, false>;
    Delete: import("napcat-protobuf").MessageProtoFieldType<() => {
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
        }, false, true>;
        NeedRecallMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        MsgSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        MsgRandom: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        MsgTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    }, false, false>;
    UploadCompleted: import("napcat-protobuf").MessageProtoFieldType<() => {
        SrvSendMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
        ClientRandomId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
        MsgInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
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
        }, false, false>;
        ClientSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    MsgInfoAuth: import("napcat-protobuf").MessageProtoFieldType<() => {
        Msg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
        AuthTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    }, false, false>;
    UploadKeyRenewal: import("napcat-protobuf").MessageProtoFieldType<() => {
        OldUKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        SubType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    DownloadSafe: import("napcat-protobuf").MessageProtoFieldType<() => {
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
    }, false, false>;
    Extension: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, true, false>;
};
export declare const MultiMediaReqHead: {
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
};
export declare const CommonHead: {
    RequestId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    Command: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const SceneInfo: {
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
};
export declare const C2CUserInfo: {
    AccountType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    TargetUid: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const NTGroupInfo: {
    GroupUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const ClientMeta: {
    AgentType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const DownloadReq: {
    Node: import("napcat-protobuf").MessageProtoFieldType<() => {
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
    Download: import("napcat-protobuf").MessageProtoFieldType<() => {
        Pic: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        Video: import("napcat-protobuf").MessageProtoFieldType<() => {
            BusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            SceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
            SubBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        }, false, false>;
        Ptt: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
    }, false, false>;
};
export declare const IndexNode: {
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
};
export declare const FileInfo: {
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
};
export declare const FileType: {
    Type: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    PicFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    VideoFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    VoiceFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const DownloadExt: {
    Pic: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
    Video: import("napcat-protobuf").MessageProtoFieldType<() => {
        BusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        SceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
        SubBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, false>;
    Ptt: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
};
export declare const VideoDownloadExt: {
    BusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    SceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    SubBusiType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const PicDownloadExt: {};
export declare const PttDownloadExt: {};
export declare const DownloadRKeyReq: {
    Types: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.INT32, false, true>;
};
export declare const DeleteReq: {
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
    }, false, true>;
    NeedRecallMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    MsgSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    MsgRandom: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    MsgTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
};
export declare const UploadCompletedReq: {
    SrvSendMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    ClientRandomId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    MsgInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
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
    }, false, false>;
    ClientSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const MsgInfoAuthReq: {
    Msg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    AuthTime: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
};
export declare const DownloadSafeReq: {
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
};
export declare const UploadKeyRenewalReq: {
    OldUKey: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    SubType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const MsgInfo: {
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
};
export declare const MsgInfoBody: {
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
};
export declare const VideoInfo: {};
export declare const AudioInfo: {};
export declare const PictureInfo: {
    UrlPath: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    Ext: import("napcat-protobuf").MessageProtoFieldType<() => {
        OriginalParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        BigParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
        ThumbParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    }, false, false>;
    Domain: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const PicUrlExtInfo: {
    OriginalParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    BigParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    ThumbParameter: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
};
export declare const VideoExtInfo: {
    VideoCodecFormat: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const ExtBizInfo: {
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
};
export declare const PttExtBizInfo: {
    SrcUin: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    PttScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    PttType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    ChangeVoice: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    Waveform: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    AutoConvertText: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    BytesReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
    BytesGeneralFlags: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
export declare const VideoExtBizInfo: {
    FromScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    ToScene: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
export declare const PicExtBizInfo: {
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
};
export declare const UploadReq: {
    UploadInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
        FileInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
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
        SubFileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    }, false, true>;
    TryFastUploadCompleted: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    SrvSendMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
    ClientRandomId: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT64, false, false>;
    CompatQMsgSceneType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
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
    ClientSeq: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    NoNeedCompatMsg: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BOOL, false, false>;
};
export declare const UploadInfo: {
    FileInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
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
    SubFileType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
};
export declare const BytesPbReserveC2c: {
    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field8: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field12: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field18: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field19: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field20: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
export declare const BytesPbReserveTroop: {
    subType: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field3: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field4: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field9: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field10: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.UINT32, false, false>;
    field12: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field18: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field19: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.STRING, false, false>;
    field21: import("napcat-protobuf").ScalarProtoFieldType<ScalarType.BYTES, false, false>;
};
