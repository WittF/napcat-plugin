import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file_count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    folders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupRootFiles extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_root_files";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file_count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        folders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        files: never[];
        folders: never[];
    };
    _handle(payload: PayloadType): Promise<{
        files: import("index").OB11GroupFile[];
        folders: import("index").OB11GroupFileFolder[];
    }>;
}
export {};
