import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    group_all_shut: import("@sinclair/typebox").TNumber;
    group_remark: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
    member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    max_member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
declare class GetGroupList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        group_all_shut: import("@sinclair/typebox").TNumber;
        group_remark: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TNumber;
        group_name: import("@sinclair/typebox").TString;
        member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        max_member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        group_id: number;
        group_name: string;
        member_count: number;
        max_member_count: number;
    }[];
    _handle(payload: PayloadType): Promise<import("index").OB11Group[]>;
}
export default GetGroupList;
