export interface OB11User {
    birthday_year?: number;
    birthday_month?: number;
    birthday_day?: number;
    phone_num?: string;
    email?: string;
    category_id?: number;
    user_id: number;
    nickname: string;
    remark?: string;
    sex?: OB11UserSex;
    level?: number;
    age?: number;
    qid?: string;
    login_days?: number;
    categoryName?: string;
    categoryId?: number;
}
export interface Notify {
    request_id: number;
    invitor_uin: number;
    invitor_nick?: string;
    group_id?: number;
    group_name?: string;
    message?: string;
    checked: boolean;
    actor: number;
    requester_nick?: string;
}
export enum OB11UserSex {
    male = "male",// 男性
    female = "female",// 女性
    unknown = "unknown"
}
export enum OB11GroupMemberRole {
    owner = "owner",// 群主
    admin = "admin",// 管理员
    member = "member"
}
export interface OB11GroupMember {
    group_id: number;
    user_id: number;
    nickname: string;
    card?: string;
    sex?: OB11UserSex;
    age?: number;
    join_time?: number;
    last_sent_time?: number;
    level?: string;
    qq_level?: number;
    role?: OB11GroupMemberRole;
    title?: string;
    area?: string;
    unfriendly?: boolean;
    title_expire_time?: number;
    card_changeable?: boolean;
    shut_up_timestamp?: number;
    is_robot?: boolean;
    qage?: number;
}
export interface OB11Group {
    group_all_shut: number;
    group_remark: string;
    group_id: number;
    group_name: string;
    member_count?: number;
    max_member_count?: number;
}
export interface OB11Sender {
    user_id: number;
    nickname: string;
    sex?: OB11UserSex;
    age?: number;
    card?: string;
    level?: string;
    role?: OB11GroupMemberRole;
}
export interface OB11GroupFile {
    file_size: number;
    group_id: number;
    file_id: string;
    file_name: string;
    busid: number;
    size: number;
    upload_time: number;
    dead_time: number;
    modify_time: number;
    download_times: number;
    uploader: number;
    uploader_name: string;
}
export interface OB11GroupFileFolder {
    group_id: number;
    folder_id: string;
    folder: string;
    folder_name: string;
    create_time: number;
    creator: number;
    creator_name: string;
    total_file_count: number;
}
