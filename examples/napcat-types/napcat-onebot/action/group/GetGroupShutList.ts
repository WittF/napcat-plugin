import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupShutList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_shut_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        user_id: number;
        nickname: string;
        shut_up_time: number;
    }[];
    _handle(payload: PayloadType): Promise<import("../../../napcat-core").ShutUpGroupMember[]>;
}
export {};
