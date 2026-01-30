import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupInfoEx extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_info_ex";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {};
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
