import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    cmd: import("@sinclair/typebox").TString;
    data: import("@sinclair/typebox").TString;
    rsp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TBoolean]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SendPacket extends GetPacketStatusDepends<PayloadType, ReturnType> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        cmd: import("@sinclair/typebox").TString;
        data: import("@sinclair/typebox").TString;
        rsp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TBoolean]>;
    }>;
    returnSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TUndefined]>;
    actionName: "send_packet";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        cmd: string;
        data: string;
        rsp: boolean;
    };
    returnExample: string;
    _handle(payload: PayloadType): Promise<string | undefined>;
}
export {};
