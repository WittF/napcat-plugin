import { GeneralCallResult, GroupMember, NTGroupMemberRole, NTGroupRequestOperateTypes, InstanceContext, KickMemberV2Req, NapCatCore, GroupNotify, ShutUpGroupMember } from '../index';
import { LimitedHashTable } from '../../napcat-common/src/message-unique';
export declare class NTQQGroupApi {
    context: InstanceContext;
    core: NapCatCore;
    groupMemberCache: Map<string, Map<string, GroupMember>>;
    essenceLRU: LimitedHashTable<number, string>;
    constructor(context: InstanceContext, core: NapCatCore);
    setGroupRemark(groupCode: string, remark: string): Promise<GeneralCallResult>;
    fetchGroupDetail(groupCode: string): Promise<import("../index").GroupDetailInfo>;
    initApi(): Promise<void>;
    createGrayTip(groupCode: string, tip: string): Promise<unknown>;
    initCache(): Promise<void>;
    fetchGroupEssenceList(groupCode: string): Promise<unknown>;
    getGroupShutUpMemberList(groupCode: string): Promise<ShutUpGroupMember[]>;
    clearGroupNotifiesUnreadCount(doubt: boolean): Promise<void>;
    setGroupAvatar(groupCode: string, filePath: string): Promise<GeneralCallResult>;
    setGroupRobotAddOption(groupCode: string, robotMemberSwitch?: number, robotMemberExamine?: number): Promise<GeneralCallResult & {
        result: {
            groupCode: string;
            result: number;
        };
    }>;
    setGroupAddOption(groupCode: string, option: {
        addOption: number;
        groupQuestion?: string;
        groupAnswer?: string;
    }): Promise<GeneralCallResult>;
    setGroupSearch(groupCode: string, option: {
        noCodeFingerOpenFlag?: number;
        noFingerOpenFlag?: number;
    }): Promise<GeneralCallResult>;
    getGroups(forced?: boolean): Promise<import("../index").Group[]>;
    getGroupExtFE0Info(groupCodes: Array<string>, forced?: boolean): Promise<GeneralCallResult & {
        result: {
            groupExtInfos: Map<string, unknown>;
        };
    }>;
    getGroupMemberAll(groupCode: string, forced?: boolean): Promise<{
        errCode: number;
        errMsg: string;
        result: {
            ids: Array<{
                uid: string;
                index: number;
            }>;
            infos: Map<string, GroupMember>;
            finish: true;
            hasRobot: false;
        };
    }>;
    refreshGroupMemberCache(groupCode: string, isWait?: boolean): Promise<Map<string, GroupMember> | undefined>;
    refreshGroupMemberCachePartial(groupCode: string, uid: string): Promise<GroupMember | undefined>;
    getGroupMember(groupCode: string | number, memberUinOrUid: string | number): Promise<GroupMember | undefined>;
    getGroupRecommendContactArkJson(groupCode: string): Promise<GeneralCallResult & {
        arkJson: string;
    }>;
    creatGroupFileFolder(groupCode: string, folderName: string): Promise<GeneralCallResult & {
        resultWithGroupItem: {
            result: unknown;
            groupItem: Array<unknown>;
        };
    }>;
    delGroupFile(groupCode: string, files: Array<string>): Promise<GeneralCallResult & {
        transGroupFileResult: {
            result: unknown;
            successFileIdList: Array<unknown>;
            failFileIdList: Array<unknown>;
        };
    }>;
    delGroupFileFolder(groupCode: string, folderId: string): Promise<GeneralCallResult & {
        groupFileCommonResult: {
            retCode: number;
            retMsg: string;
            clientWording: string;
        };
    }>;
    transGroupFile(groupCode: string, fileId: string): Promise<GeneralCallResult & {
        transGroupFileResult: {
            result: {
                retCode: number;
                retMsg: string;
                clientWording: string;
            };
            saveBusId: number;
            saveFilePath: string;
        };
    }>;
    addGroupEssence(groupCode: string, msgId: string): Promise<unknown>;
    kickMemberV2Inner(param: KickMemberV2Req): Promise<GeneralCallResult>;
    deleteGroupBulletin(groupCode: string, noticeId: string): Promise<void>;
    quitGroupV2(GroupCode: string, needDeleteLocalMsg: boolean): Promise<GeneralCallResult>;
    removeGroupEssenceBySeq(groupCode: string, msgRandom: string, msgSeq: string): Promise<unknown>;
    removeGroupEssence(groupCode: string, msgId: string): Promise<unknown>;
    getSingleScreenNotifies(doubt: boolean, count: number): Promise<GroupNotify[]>;
    searchGroup(groupCode: string): Promise<import("../index").GroupInfo | undefined>;
    getGroupMemberEx(groupCode: string, uid: string, forced?: boolean, retry?: number): Promise<GroupMember | undefined>;
    getGroupFileCount(groupCodes: Array<string>): Promise<GeneralCallResult & {
        groupCodes: Array<string>;
        groupFileCounts: Array<number>;
    }>;
    getArkJsonGroupShare(groupCode: string): Promise<string>;
    uploadGroupBulletinPic(groupCode: string, imageurl: string): Promise<GeneralCallResult & {
        errCode: number;
        picInfo?: {
            id: string;
            width: number;
            height: number;
        };
    }>;
    handleGroupRequest(doubt: boolean, notify: GroupNotify, operateType: NTGroupRequestOperateTypes, reason?: string): Promise<void>;
    quitGroup(groupCode: string): Promise<void>;
    kickMember(groupCode: string, kickUids: string[], refuseForever?: boolean, kickReason?: string): Promise<void>;
    banMember(groupCode: string, memList: Array<{
        uid: string;
        timeStamp: number;
    }>): Promise<GeneralCallResult>;
    banGroup(groupCode: string, shutUp: boolean): Promise<GeneralCallResult>;
    setMemberCard(groupCode: string, memberUid: string, cardName: string): Promise<void>;
    setMemberRole(groupCode: string, memberUid: string, role: NTGroupMemberRole): Promise<void>;
    setGroupName(groupCode: string, groupName: string): Promise<GeneralCallResult>;
    publishGroupBulletin(groupCode: string, content: string, picInfo?: {
        id: string;
        width: number;
        height: number;
    } | undefined, pinned?: number, confirmRequired?: number): Promise<GeneralCallResult>;
    getGroupRemainAtTimes(groupCode: string): Promise<Omit<GeneralCallResult, "result"> & {
        errCode: number;
        atInfo: {
            canAtAll: boolean;
            RemainAtAllCountForUin: number;
            RemainAtAllCountForGroup: number;
            atTimesMsg: string;
            canNotAtAllMsg: "";
        };
    }>;
    getMemberExtInfo(groupCode: string, uin: string): Promise<unknown>;
}
