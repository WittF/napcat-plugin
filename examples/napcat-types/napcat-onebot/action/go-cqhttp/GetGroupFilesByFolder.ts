import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    file_count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    folders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupFilesByFolder extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_files_by_folder";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        file_count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        files: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        folders: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        folder_id: string;
    };
    returnExample: {
        files: never[];
        folders: never[];
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
