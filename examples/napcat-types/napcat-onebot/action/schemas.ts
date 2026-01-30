export declare const OB11UserSchema: import("@sinclair/typebox").TObject<{
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
export declare const OB11GroupSchema: import("@sinclair/typebox").TObject<{
    group_all_shut: import("@sinclair/typebox").TNumber;
    group_remark: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
    member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    max_member_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const OB11GroupMemberSchema: import("@sinclair/typebox").TObject<{
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
export declare const OB11NotifySchema: import("@sinclair/typebox").TObject<{
    request_id: import("@sinclair/typebox").TNumber;
    invitor_uin: import("@sinclair/typebox").TNumber;
    invitor_nick: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TString;
    checked: import("@sinclair/typebox").TBoolean;
    actor: import("@sinclair/typebox").TNumber;
    requester_nick: import("@sinclair/typebox").TString;
}>;
export declare const lastestMessageSchema: import("@sinclair/typebox").TObject<{
    self_id: import("@sinclair/typebox").TNumber;
    user_id: import("@sinclair/typebox").TNumber;
    time: import("@sinclair/typebox").TNumber;
    real_seq: import("@sinclair/typebox").TString;
    message_type: import("@sinclair/typebox").TString;
    sender: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TNumber;
        nickname: import("@sinclair/typebox").TString;
        card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    raw_message: import("@sinclair/typebox").TString;
    font: import("@sinclair/typebox").TNumber;
    sub_type: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TUnknown;
    message_format: import("@sinclair/typebox").TString;
    post_type: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
}>;
export declare const OB11MessageSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    self_id: import("@sinclair/typebox").TNumber;
    user_id: import("@sinclair/typebox").TNumber;
    time: import("@sinclair/typebox").TNumber;
    real_seq: import("@sinclair/typebox").TString;
    message_type: import("@sinclair/typebox").TString;
    sender: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TNumber;
        nickname: import("@sinclair/typebox").TString;
        card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    raw_message: import("@sinclair/typebox").TString;
    font: import("@sinclair/typebox").TNumber;
    sub_type: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TUnknown;
    message_format: import("@sinclair/typebox").TString;
    post_type: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TNumber;
    group_name: import("@sinclair/typebox").TString;
}>, import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TNumber;
    message_seq: import("@sinclair/typebox").TNumber;
    emoji_likes_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        emoji_id: import("@sinclair/typebox").TString;
        emoji_type: import("@sinclair/typebox").TString;
        likes_cnt: import("@sinclair/typebox").TString;
    }>>;
}>]>;
