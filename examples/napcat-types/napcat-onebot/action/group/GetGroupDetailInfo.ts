import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
    member_count: import("@sinclair/typebox").TNumber;
    max_member_count: import("@sinclair/typebox").TNumber;
    group_all_shut: import("@sinclair/typebox").TNumber;
    group_remark: import("@sinclair/typebox").TString;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupDetailInfo extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_detail_info";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TNumber;
        group_name: import("@sinclair/typebox").TString;
        member_count: import("@sinclair/typebox").TNumber;
        max_member_count: import("@sinclair/typebox").TNumber;
        group_all_shut: import("@sinclair/typebox").TNumber;
        group_remark: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        group_id: number;
        group_name: string;
        member_count: number;
        max_member_count: number;
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
