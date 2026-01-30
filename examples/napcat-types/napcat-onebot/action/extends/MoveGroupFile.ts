import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file_id: import("@sinclair/typebox").TString;
    current_parent_directory: import("@sinclair/typebox").TString;
    target_parent_directory: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    ok: import("@sinclair/typebox").TBoolean;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class MoveGroupFile extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "move_group_file";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file_id: string;
        current_parent_directory: string;
        target_parent_directory: string;
    };
    returnExample: {
        ok: boolean;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file_id: import("@sinclair/typebox").TString;
        current_parent_directory: import("@sinclair/typebox").TString;
        target_parent_directory: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        ok: import("@sinclair/typebox").TBoolean;
    }>;
    _handle(payload: PayloadType): Promise<{
        ok: boolean;
    }>;
}
export {};
