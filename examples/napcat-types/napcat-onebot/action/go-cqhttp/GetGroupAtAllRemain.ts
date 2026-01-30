import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    can_at_all: import("@sinclair/typebox").TBoolean;
    remain_at_all_count_for_group: import("@sinclair/typebox").TNumber;
    remain_at_all_count_for_uin: import("@sinclair/typebox").TNumber;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GoCQHTTPGetGroupAtAllRemain extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_at_all_remain";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        can_at_all: import("@sinclair/typebox").TBoolean;
        remain_at_all_count_for_group: import("@sinclair/typebox").TNumber;
        remain_at_all_count_for_uin: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        can_at_all: boolean;
        remain_at_all_count_for_group: number;
        remain_at_all_count_for_self: number;
    };
    _handle(payload: PayloadType): Promise<{
        can_at_all: boolean;
        remain_at_all_count_for_group: number;
        remain_at_all_count_for_uin: number;
    }>;
}
export {};
