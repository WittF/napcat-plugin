import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TVoid;
type ReturnType = Static<typeof ReturnSchema>;
declare class SetGroupSignBase extends GetPacketStatusDepends<PayloadType, ReturnType> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TVoid;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<void>;
}
export declare class SetGroupSign extends SetGroupSignBase {
    actionName: "set_group_sign";
}
export declare class SendGroupSign extends SetGroupSignBase {
    actionName: "send_group_sign";
}
export {};
