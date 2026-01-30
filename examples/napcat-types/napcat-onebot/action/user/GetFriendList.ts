import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    birthday_year: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    birthday_month: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    birthday_day: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    phone_num: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    category_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    user_id: import("@sinclair/typebox").TNumber;
    nickname: import("@sinclair/typebox").TString;
    remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    qid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    login_days: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    categoryName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GetFriendList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_friend_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        no_cache: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        birthday_year: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        birthday_month: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        birthday_day: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        phone_num: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        category_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        user_id: import("@sinclair/typebox").TNumber;
        nickname: import("@sinclair/typebox").TString;
        remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        qid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        login_days: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        categoryName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        categoryId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        user_id: number;
        nickname: string;
        remark: string;
    }[];
    _handle(_payload: PayloadType): Promise<import("index").OB11User[]>;
}
export {};
