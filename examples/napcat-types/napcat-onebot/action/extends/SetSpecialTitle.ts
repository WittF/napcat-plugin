import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TString;
    special_title: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TVoid;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetSpecialTitle extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "set_group_special_title";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TString;
        special_title: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TVoid;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        user_id: string;
        special_title: string;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<void>;
}
export {};
