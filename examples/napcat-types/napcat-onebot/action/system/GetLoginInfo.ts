import { OB11User } from '../../index';
import { OneBotAction } from '../../action/OneBotAction';
declare class GetLoginInfo extends OneBotAction<void, OB11User> {
    actionName: "get_login_info";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
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
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        user_id: number;
        nickname: string;
    };
    _handle(): Promise<OB11User>;
}
export default GetLoginInfo;
