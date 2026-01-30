import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    ok: import("@sinclair/typebox").TBoolean;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class TransGroupFile extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "trans_group_file";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file_id: string;
    };
    returnExample: {
        ok: boolean;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        ok: import("@sinclair/typebox").TBoolean;
    }>;
    _handle(payload: PayloadType): Promise<{
        ok: boolean;
    }>;
}
export {};
