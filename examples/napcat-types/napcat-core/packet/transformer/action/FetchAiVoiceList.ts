import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
import { AIVoiceChatType } from '../../../packet/entities/aiChat';
declare class FetchAiVoiceList extends PacketTransformer<typeof proto.OidbSvcTrpcTcp0X929D_0Resp> {
    build(groupUin: number, chatType: AIVoiceChatType): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any {
            category: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            voices: import("napcat-protobuf").MessageProtoFieldType<() => {
                voiceId: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                voiceDisplayName: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
                voiceExampleUrl: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
            }, false, true>;
        }, false, true>;
    }>;
}
declare const _default: FetchAiVoiceList;
export default _default;
