import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    folder_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    result: import("@sinclair/typebox").TAny;
    groupItem: import("@sinclair/typebox").TAny;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class CreateGroupFileFolder extends OneBotAction<PayloadType, ReturnType> {
    actionName: "create_group_file_folder";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        folder_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TAny;
        groupItem: import("@sinclair/typebox").TAny;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        folder_name: string;
    };
    returnExample: {
        result: {};
        groupItem: {};
    };
    _handle(payload: PayloadType): Promise<{
        result: unknown;
        groupItem: Array<unknown>;
    }>;
}
export {};
