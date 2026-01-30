import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TString;
    no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TNumber;
    user_id: import("@sinclair/typebox").TNumber;
    nickname: import("@sinclair/typebox").TString;
    card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    join_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    last_sent_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    qq_level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    area: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    unfriendly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    title_expire_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    card_changeable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    shut_up_timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    is_robot: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    qage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
declare class GetGroupMemberInfo extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_member_info";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TString;
        no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TNumber;
        user_id: import("@sinclair/typebox").TNumber;
        nickname: import("@sinclair/typebox").TString;
        card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        join_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        last_sent_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        qq_level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        area: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        unfriendly: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        title_expire_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        card_changeable: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        shut_up_timestamp: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        is_robot: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        qage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        user_id: string;
    };
    returnExample: {
        group_id: number;
        user_id: number;
        nickname: string;
        card: string;
        role: string;
    };
    private parseBoolean;
    private getUid;
    private getGroupMemberInfo;
    _handle(payload: PayloadType): Promise<import("index").OB11GroupMember>;
}
export default GetGroupMemberInfo;
