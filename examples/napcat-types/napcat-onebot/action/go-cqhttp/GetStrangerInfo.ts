import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    no_cache: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TNumber;
    uid: import("@sinclair/typebox").TString;
    nickname: import("@sinclair/typebox").TString;
    age: import("@sinclair/typebox").TNumber;
    qid: import("@sinclair/typebox").TString;
    qqLevel: import("@sinclair/typebox").TNumber;
    sex: import("@sinclair/typebox").TString;
    long_nick: import("@sinclair/typebox").TString;
    reg_time: import("@sinclair/typebox").TNumber;
    is_vip: import("@sinclair/typebox").TBoolean;
    is_years_vip: import("@sinclair/typebox").TBoolean;
    vip_level: import("@sinclair/typebox").TNumber;
    remark: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TNumber;
    login_days: import("@sinclair/typebox").TNumber;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GoCQHTTPGetStrangerInfo extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_stranger_info";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        no_cache: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TNumber;
        uid: import("@sinclair/typebox").TString;
        nickname: import("@sinclair/typebox").TString;
        age: import("@sinclair/typebox").TNumber;
        qid: import("@sinclair/typebox").TString;
        qqLevel: import("@sinclair/typebox").TNumber;
        sex: import("@sinclair/typebox").TString;
        long_nick: import("@sinclair/typebox").TString;
        reg_time: import("@sinclair/typebox").TNumber;
        is_vip: import("@sinclair/typebox").TBoolean;
        is_years_vip: import("@sinclair/typebox").TBoolean;
        vip_level: import("@sinclair/typebox").TNumber;
        remark: import("@sinclair/typebox").TString;
        status: import("@sinclair/typebox").TNumber;
        login_days: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
    };
    returnExample: {
        user_id: number;
        nickname: string;
        sex: string;
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
