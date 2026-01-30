import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    invited_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    InvitedRequest: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    join_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupIgnoredNotifies extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_ignored_notifies";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        invited_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        InvitedRequest: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        join_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        invited_requests: never[];
        InvitedRequest: never[];
        join_requests: never[];
    };
    _handle(): Promise<ReturnType>;
}
export {};
