export enum GroupNotifyMsgType {
    UN_SPECIFIED = 0,
    INVITED_BY_MEMBER = 1,
    REFUSE_INVITED = 2,
    REFUSED_BY_ADMINI_STRATOR = 3,
    AGREED_TOJOIN_DIRECT = 4,// 有人接受了邀请入群
    INVITED_NEED_ADMINI_STRATOR_PASS = 5,
    AGREED_TO_JOIN_BY_ADMINI_STRATOR = 6,
    REQUEST_JOIN_NEED_ADMINI_STRATOR_PASS = 7,
    SET_ADMIN = 8,
    KICK_MEMBER_NOTIFY_ADMIN = 9,
    KICK_MEMBER_NOTIFY_KICKED = 10,
    MEMBER_LEAVE_NOTIFY_ADMIN = 11,// 主动退出
    CANCEL_ADMIN_NOTIFY_CANCELED = 12,
    CANCEL_ADMIN_NOTIFY_ADMIN = 13,// 其他人取消管理员
    TRANSFER_GROUP_NOTIFY_OLDOWNER = 14,
    TRANSFER_GROUP_NOTIFY_ADMIN = 15
}
export interface GroupNotifies {
    doubt: boolean;
    nextStartSeq: string;
    notifies: GroupNotify[];
}
export enum GroupNotifyMsgStatus {
    KINIT = 0,// 初始化
    KUNHANDLE = 1,// 未处理
    KAGREED = 2,// 同意
    KREFUSED = 3,// 拒绝
    KIGNORED = 4
}
export enum GroupInviteStatus {
    INIT = 0,
    WAIT_TO_APPROVE = 1,
    JOINED = 2,
    REFUSED_BY_ADMINI_STRATOR = 3
}
export enum GroupInviteType {
    BYBUDDY = 0,
    BYGROUPMEMBER = 1,
    BYDISCUSSMEMBER = 2
}
export interface ShutUpGroupHonor {
    [key: string]: number;
}
export interface ShutUpGroupMember {
    uid: string;
    qid: string;
    uin: string;
    nick: string;
    remark: string;
    cardType: number;
    cardName: string;
    role: number;
    avatarPath: string;
    shutUpTime: number;
    isDelete: boolean;
    isSpecialConcerned: boolean;
    isSpecialShield: boolean;
    isRobot: boolean;
    groupHonor: ShutUpGroupHonor;
    memberRealLevel: number;
    memberLevel: number;
    globalGroupLevel: number;
    globalGroupPoint: number;
    memberTitleId: number;
    memberSpecialTitle: string;
    specialTitleExpireTime: string;
    userShowFlag: number;
    userShowFlagNew: number;
    richFlag: number;
    mssVipType: number;
    bigClubLevel: number;
    bigClubFlag: number;
    autoRemark: string;
    creditLevel: number;
    joinTime: number;
    lastSpeakTime: number;
    memberFlag: number;
    memberFlagExt: number;
    memberMobileFlag: number;
    memberFlagExt2: number;
    isSpecialShielded: boolean;
    cardNameId: number;
}
export interface GroupNotify {
    seq: string;
    type: GroupNotifyMsgType;
    status: GroupNotifyMsgStatus;
    group: {
        groupCode: string;
        groupName: string;
    };
    user1: {
        uid: string;
        nickName: string;
    };
    user2: {
        uid: string;
        nickName: string;
    };
    actionUser: {
        uid: string;
        nickName: string;
    };
    actionTime: string;
    invitationExt: {
        srcType: GroupInviteType;
        groupCode: string;
        waitStatus: GroupInviteStatus;
    };
    postscript: string;
    repeatSeqs: [];
    warningTips: string;
}
export enum NTGroupRequestOperateTypes {
    KUNSPECIFIED = 0,
    KAGREE = 1,
    KREFUSE = 2,
    KIGNORE = 3,
    KDELETE = 4
}
export enum BuddyReqType {
    KMEINITIATOR = 0,
    KPEERINITIATOR = 1,
    KMEAGREED = 2,
    KMEAGREEDANDADDED = 3,
    KPEERAGREED = 4,
    KPEERAGREEDANDADDED = 5,
    KPEERREFUSED = 6,
    KMEREFUSED = 7,
    KMEIGNORED = 8,
    KMEAGREEANYONE = 9,
    KMESETQUESTION = 10,
    KMEAGREEANDADDFAILED = 11,
    KMSGINFO = 12,
    KMEINITIATORWAITPEERCONFIRM = 13
}
export interface FriendRequest {
    isInitiator?: boolean;
    isDecide: boolean;
    friendUid: string;
    reqType: BuddyReqType;
    reqTime: string;
    flag?: number;
    preGroupingId?: number;
    commFriendNum?: number;
    extWords: string;
    isUnread: boolean;
    isDoubt?: boolean;
    nameMore?: string;
    friendNick: string;
    sourceId: number;
    groupCode: string;
    isBuddy?: boolean;
    isAgreed?: boolean;
    relation?: number;
}
export interface FriendRequestNotify {
    unreadNums: number;
    buddyReqs: Friendany[];
}
export enum MemberExtSourceType {
    DEFAULTTYPE = 0,
    TITLETYPE = 1,
    NEWGROUPTYPE = 2
}
export interface GroupExtParam {
    groupCode: string;
    seq: string;
    beginUin: string;
    dataTime: string;
    uinList: Array<string>;
    uinNum: string;
    groupType: string;
    richCardNameVer: string;
    sourceType: MemberExtSourceType;
    memberExtFilter: {
        memberLevelInfoUin: number;
        memberLevelInfoPoint: number;
        memberLevelInfoActiveDay: number;
        memberLevelInfoLevel: number;
        memberLevelInfoName: number;
        levelName: number;
        dataTime: number;
        userShowFlag: number;
        sysShowFlag: number;
        timeToUpdate: number;
        nickName: number;
        specialTitle: number;
        levelNameNew: number;
        userShowFlagNew: number;
        msgNeedField: number;
        cmdUinFlagExt3Grocery: number;
        memberIcon: number;
        memberInfoSeq: number;
    };
}
