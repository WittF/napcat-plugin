import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class DeleteGroupFile extends OneBotAction<PayloadType, ReturnType> {
    actionName: "delete_group_file";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file_id: string;
    };
    returnExample: {};
    _handle(payload: PayloadType): Promise<import("../../../napcat-core").GeneralCallResult & {
        transGroupFileResult: {
            result: unknown;
            successFileIdList: Array<unknown>;
            failFileIdList: Array<unknown>;
        };
    }>;
}
export {};
