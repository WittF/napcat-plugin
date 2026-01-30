import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    categoryId: import("@sinclair/typebox").TNumber;
    categoryName: import("@sinclair/typebox").TString;
    categoryMbCount: import("@sinclair/typebox").TNumber;
    buddyList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetFriendWithCategory extends OneBotAction<void, ReturnType> {
    actionName: "get_friends_with_category";
    payloadSchema: import("@sinclair/typebox").TVoid;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        categoryId: import("@sinclair/typebox").TNumber;
        categoryName: import("@sinclair/typebox").TString;
        categoryMbCount: import("@sinclair/typebox").TNumber;
        buddyList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
    }>>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        categoryId: number;
        categoryName: string;
        categoryMbCount: number;
        buddyList: never[];
    }[];
    _handle(): Promise<{
        buddyList: import("index").OB11User[];
        categoryId: number;
        categorySortId: number;
        categoryName: string;
        categoryMbCount: number;
        onlineCount: number;
    }[]>;
}
export {};
