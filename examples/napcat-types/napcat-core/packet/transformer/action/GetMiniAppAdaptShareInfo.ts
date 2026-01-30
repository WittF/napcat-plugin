import * as proto from '../../../packet/transformer/proto';
import { OidbPacket, PacketTransformer } from '../../../packet/transformer/base';
import { MiniAppReqParams } from '../../../packet/entities/miniApp';
declare class GetMiniAppAdaptShareInfo extends PacketTransformer<typeof proto.MiniAppAdaptShareInfoResp> {
    build(req: MiniAppReqParams): OidbPacket;
    parse(data: Buffer): import("napcat-protobuf").any;
        field3: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        content: import("napcat-protobuf").MessageProtoFieldType<() => {
            jsonContent: import("napcat-protobuf").ScalarProtoFieldType<import("napcat-protobuf").ScalarType.STRING, false, false>;
        }, false, false>;
    }>;
}
declare const _default: GetMiniAppAdaptShareInfo;
export default _default;
