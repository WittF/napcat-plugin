import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    file_count: import("@sinclair/typebox").TNumber;
    limit_count: import("@sinclair/typebox").TNumber;
    used_space: import("@sinclair/typebox").TNumber;
    total_space: import("@sinclair/typebox").TNumber;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupFileSystemInfo extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_file_system_info";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        file_count: import("@sinclair/typebox").TNumber;
        limit_count: import("@sinclair/typebox").TNumber;
        used_space: import("@sinclair/typebox").TNumber;
        total_space: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        file_count: number;
        limit_count: number;
        used_space: number;
        total_space: number;
    };
    _handle(payload: PayloadType): Promise<{
        file_count: number;
        limit_count: number;
        used_space: number;
        total_space: number;
    }>;
}
export {};
