export enum NTSex {
    GENDER_UNKOWN = 0,
    GENDER_MALE = 1,
    GENDER_FEMALE = 2,
    GENDER_PRIVACY = 255
}
export interface NTVoteInfo {
    age: number;
    bAvailableCnt: number;
    bTodayVotedCnt: number;
    count: number;
    customId: number;
    gender: number;
    giftCount: number;
    isFriend: boolean;
    isSvip: boolean;
    isvip: boolean;
    lastCharged: number;
    latestTime: number;
    nick: string;
    src: number;
    uid: string;
    uin: number;
}
export interface BuddyCategoryType {
    categoryId: number;
    categoryName: string;
    categoryMbCount: number;
    buddyList: User[];
}
export interface CoreInfo {
    uid: string;
    uin: string;
    nick?: string;
    remark: string;
}
export interface BaseInfo {
    qid: string;
    longNick: string;
    birthday_year: number;
    birthday_month: number;
    birthday_day: number;
    age: number;
    sex: number;
    eMail: string;
    phoneNum: string;
    categoryId: number;
    richTime: number;
    richBuffer: string;
}
export interface MusicInfo {
    buf: string;
}
export interface VideoBizInfo {
    cid: string;
    tvUrl: string;
    synchType: string;
}
export interface VideoInfo {
    name: string;
}
export interface ExtOnlineBusinessInfo {
    buf: string;
    customStatus: unknown;
    videoBizInfo: VideoBizInfo;
    videoInfo: VideoInfo;
}
export interface ExtBuffer {
    buf: string;
}
export interface UserStatus {
    uid: string;
    uin: string;
    status: number;
    extStatus: number;
    batteryStatus: number;
    termType: number;
    netType: number;
    iconType: number;
    customStatus: unknown;
    setTime: string;
    specialFlag: number;
    abiFlag: number;
    eNetworkType: number;
    showName: string;
    termDesc: string;
    musicInfo: MusicInfo;
    extOnlineBusinessInfo: ExtOnlineBusinessInfo;
    extBuffer: ExtBuffer;
}
export interface PrivilegeIcon {
    jumpUrl: string;
    openIconList: unknown[];
    closeIconList: unknown[];
}
export interface VasInfo {
    vipFlag: boolean;
    yearVipFlag: boolean;
    svipFlag: boolean;
    vipLevel: number;
    bigClub: boolean;
    bigClubLevel: number;
    nameplateVipType: number;
    grayNameplateFlag: number;
    superVipTemplateId: number;
    diyFontId: number;
    pendantId: number;
    pendantDiyId: number;
    faceId: number;
    vipFont: number;
    vipFontType: number;
    magicFont: number;
    fontEffect: number;
    newLoverDiamondFlag: number;
    extendNameplateId: number;
    diyNameplateIDs: unknown[];
    vipStartFlag: number;
    vipDataFlag: number;
    gameNameplateId: string;
    gameLastLoginTime: string;
    gameRank: number;
    gameIconShowFlag: boolean;
    gameCardId: string;
    vipNameColorId: string;
    privilegeIcon: PrivilegeIcon;
}
export interface RelationFlags {
    topTime: string;
    isBlock: boolean;
    isMsgDisturb: boolean;
    isSpecialCareOpen: boolean;
    isSpecialCareZone: boolean;
    ringId: string;
    isBlocked: boolean;
    recommendImgFlag: number;
    disableEmojiShortCuts: number;
    qidianMasterFlag: number;
    qidianCrewFlag: number;
    qidianCrewFlag2: number;
    isHideQQLevel: number;
    isHidePrivilegeIcon: number;
}
export interface CommonExt {
    constellation: number;
    shengXiao: number;
    kBloodType: number;
    homeTown: string;
    makeFriendCareer: number;
    pos: string;
    college: string;
    country: string;
    province: string;
    city: string;
    postCode: string;
    address: string;
    regTime: number;
    interest: string;
    labels: string[];
    qqLevel: QQLevel;
}
export enum BuddyListReqType {
    KNOMAL = 0,
    KLETTER = 1
}
export interface Pic {
    picId: string;
    picTime: number;
    picUrlMap: Record<string, string>;
}
export interface PhotoWall {
    picList: Pic[];
}
export interface SimpleInfo {
    qqLevel?: QQLevel;
    uid?: string;
    uin?: string;
    coreInfo: CoreInfo;
    baseInfo: BaseInfo;
    status: UserStatus | null;
    vasInfo: VasInfo | null;
    relationFlags: RelationFlags | null;
    otherFlags: unknown;
    intimate: unknown;
}
export type FriendV2 = SimpleInfo;
export interface SelfStatusInfo {
    uid: string;
    status: number;
    extStatus: number;
    termType: number;
    netType: number;
    iconType: number;
    customStatus: unknown;
    setTime: string;
}
export interface UserDetailInfoListenerArg {
    uid: string;
    uin: string;
    simpleInfo: SimpleInfo;
    commonExt: CommonExt;
    photoWall: PhotoWall;
}
export interface ModifyProfileParams {
    nick: string;
    longNick: string;
    sex: NTSex;
    birthday: {
        birthday_year: string;
        birthday_month: string;
        birthday_day: string;
    };
    location: unknown;
}
export interface BuddyProfileLikeReq {
    friendUids: string[];
    basic: number;
    vote: number;
    favorite: number;
    userProfile: number;
    type: number;
    start: number;
    limit?: number;
}
export interface QQLevel {
    crownNum: number;
    sunNum: number;
    moonNum: number;
    starNum: number;
}
export interface User {
    uid: string;
    uin: string;
    nick: string;
    avatarUrl?: string;
    longNick?: string;
    remark?: string;
    sex?: NTSex;
    age?: number;
    qqLevel?: QQLevel;
    qid?: string;
    birthday_year?: number;
    birthday_month?: number;
    birthday_day?: number;
    topTime?: string;
    constellation?: number;
    shengXiao?: number;
    kBloodType?: number;
    homeTown?: string;
    makeFriendCareer?: number;
    pos?: string;
    eMail?: string;
    phoneNum?: string;
    college?: string;
    country?: string;
    province?: string;
    city?: string;
    postCode?: string;
    address?: string;
    isBlock?: boolean;
    isSpecialCareOpen?: boolean;
    isSpecialCareZone?: boolean;
    ringId?: string;
    regTime?: number;
    interest?: string;
    labels?: string[];
    isHideQQLevel?: number;
    privilegeIcon?: {
        jumpUrl: string;
        openIconList: unknown[];
        closeIconList: unknown[];
    };
    photoWall?: {
        picList: unknown[];
    };
    vipFlag?: boolean;
    yearVipFlag?: boolean;
    svipFlag?: boolean;
    vipLevel?: number;
    status?: number;
    qidianMasterFlag?: number;
    qidianCrewFlag?: number;
    qidianCrewFlag2?: number;
    extStatus?: number;
    recommendImgFlag?: number;
    disableEmojiShortCuts?: number;
    pendantId?: string;
}
export interface SelfInfo extends User {
    online?: boolean;
}
export type Friend = User;
export enum BizKey {
    KPRIVILEGEICON = 0,
    KPHOTOWALL = 1
}
export interface UserDetailInfoByUin {
    result: number;
    errMsg: string;
    detail: {
        uid: string;
        uin: string;
        simpleInfo: SimpleInfo;
        commonExt: CommonExt;
        photoWall: null;
    };
}
export enum UserDetailSource {
    KDB = 0,
    KSERVER = 1
}
export enum ProfileBizType {
    KALL = 0,
    KBASEEXTEND = 1,
    KVAS = 2,
    KQZONE = 3,
    KOTHER = 4
}
