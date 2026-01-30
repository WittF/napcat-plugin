import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
import { IndexNode } from '../../../packet/transformer/proto';
declare class DownloadVideo extends PacketTransformer<typeof proto.NTV2RichMediaResp> {
    build(selfUid: string, node: any): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            common: import("napcat-protobuf").MessageProtoFieldType<() => {
                RequestId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                Command: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            }, false, false>;
            retCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            message: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
        upload: import("napcat-protobuf").MessageProtoFieldType<() => {
            uKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, true, false>;
            uKeyTtlSecond: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            ipv4s: import("napcat-protobuf").MessageProtoFieldType<() => {
                outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            }, false, true>;
            ipv6s: import("napcat-protobuf").MessageProtoFieldType<() => {
                outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            }, false, true>;
            msgSeq: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
            msgInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                MsgInfoBody: import("napcat-protobuf").MessageProtoFieldType<() => {
                    Index: import("napcat-protobuf").MessageProtoFieldType<() => {
                        Info: import("napcat-protobuf").MessageProtoFieldType<() => {
                            FileSize: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            FileHash: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            FileSha1: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            FileName: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            Type: import("napcat-protobuf").MessageProtoFieldType<() => {
                                Type: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                                PicFormat: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                                VideoFormat: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                                VoiceFormat: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            }, false, false>;
                            Width: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            Height: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            Time: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            Original: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        }, false, false>;
                        FileUuid: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                        StoreId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        UploadTime: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        Ttl: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        SubType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    }, false, false>;
                    Picture: import("napcat-protobuf").MessageProtoFieldType<() => {
                        UrlPath: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                        Ext: import("napcat-protobuf").MessageProtoFieldType<() => {
                            OriginalParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            BigParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            ThumbParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                        }, false, false>;
                        Domain: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                    }, false, false>;
                    Video: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
                    Audio: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
                    FileExist: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BOOL, false, false>;
                    HashSum: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                }, false, true>;
                ExtBizInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                    Pic: import("napcat-protobuf").MessageProtoFieldType<() => {
                        BizType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        TextSummary: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                        BytesPbReserveC2c: import("napcat-protobuf").MessageProtoFieldType<() => {
                            subType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field3: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field4: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field8: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field10: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field12: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field18: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field19: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field20: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                        }, false, false>;
                        BytesPbReserveTroop: import("napcat-protobuf").MessageProtoFieldType<() => {
                            subType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field3: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field4: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field9: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field10: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                            field12: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field18: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field19: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                            field21: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                        }, false, false>;
                        FromScene: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        ToScene: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        OldFileId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    }, false, false>;
                    Video: import("napcat-protobuf").MessageProtoFieldType<() => {
                        FromScene: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        ToScene: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    }, false, false>;
                    Ptt: import("napcat-protobuf").MessageProtoFieldType<() => {
                        SrcUin: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
                        PttScene: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        PttType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        ChangeVoice: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        Waveform: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                        AutoConvertText: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                        BytesReserve: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                        BytesPbReserve: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                        BytesGeneralFlags: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    }, false, false>;
                    BusiType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, false>;
            }, false, false>;
            ext: import("napcat-protobuf").MessageProtoFieldType<() => {
                subType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                extType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                extValue: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            }, false, true>;
            compatQMsg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            subFileInfos: import("napcat-protobuf").MessageProtoFieldType<() => {
                subType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                uKey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                uKeyTtlSecond: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                ipv4s: import("napcat-protobuf").MessageProtoFieldType<() => {
                    outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, true>;
                ipv6s: import("napcat-protobuf").MessageProtoFieldType<() => {
                    outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, true>;
            }, false, true>;
        }, false, false>;
        download: import("napcat-protobuf").MessageProtoFieldType<() => {
            rKeyParam: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            rKeyTtlSecond: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            info: import("napcat-protobuf").MessageProtoFieldType<() => {
                domain: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                urlPath: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                httpsPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                ipv4s: import("napcat-protobuf").MessageProtoFieldType<() => {
                    outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, true>;
                ipv6s: import("napcat-protobuf").MessageProtoFieldType<() => {
                    outIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    outPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    inIP: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
                    inPort: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                    ipType: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, true>;
                picUrlExtInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                    OriginalParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                    BigParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                    ThumbParameter: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                }, false, false>;
                videoExtInfo: import("napcat-protobuf").MessageProtoFieldType<() => {
                    VideoCodecFormat: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                }, false, false>;
            }, false, false>;
            rKeyCreateTime: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
        }, false, false>;
        downloadRKey: import("napcat-protobuf").MessageProtoFieldType<() => {
            rKeys: import("napcat-protobuf").MessageProtoFieldType<() => {
                rkey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                rkeyTtlSec: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
                storeId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
                rkeyCreateTime: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, true, false>;
                type: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, true, false>;
            }, false, true>;
        }, false, false>;
        delete: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        uploadCompleted: import("napcat-protobuf").MessageProtoFieldType<() => {
            msgSeq: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
        }, false, false>;
        msgInfoAuth: import("napcat-protobuf").MessageProtoFieldType<() => {
            authCode: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT32, false, false>;
            msg: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, false, false>;
            resultTime: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
        }, false, false>;
        uploadKeyRenewal: import("napcat-protobuf").MessageProtoFieldType<() => {
            ukey: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            ukeyTtlSec: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.UINT64, false, false>;
        }, false, false>;
        downloadSafe: import("napcat-protobuf").MessageProtoFieldType<() => {}, false, false>;
        extension: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.BYTES, true, false>;
    }>;
}
declare const _default: DownloadVideo;
export default _default;
