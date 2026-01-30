import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class DeleteGroupFileFolder extends OneBotAction<PayloadType, ReturnType> {
    actionName: "delete_group_folder";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        folder_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        folder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        folder_id: string;
    };
    returnExample: {};
    _handle(payload: PayloadType): Promise<{
        retCode: number;
        retMsg: string;
        clientWording: string;
    }>;
}
export {};
