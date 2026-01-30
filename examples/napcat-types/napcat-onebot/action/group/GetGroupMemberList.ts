import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupMemberList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_member_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        group_id: number;
        user_id: number;
        nickname: string;
        card: string;
        role: string;
    }[];
    _handle(payload: PayloadType): Promise<import("index").OB11GroupMember[]>;
    private parseBoolean;
    private getGroupMembers;
}
export {};
