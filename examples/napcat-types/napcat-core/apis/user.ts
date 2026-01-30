import { ModifyProfileParams, User, UserDetailSource } from '../types';
import { InstanceContext, NapCatCore } from '..';
export declare class NTQQUserApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    getCoreAndBaseInfo(uids: string[]): Promise<Map<string, import("../types").SimpleInfo>>;
    getProfileLike(uid: string, start: number, count: number, type?: number): Promise<import("..").GeneralCallResult & {
        info: {
            userLikeInfos: Array<{
                uid: string;
                time: string;
                favoriteInfo: {
                    userInfos: Array<import("../types").NTVoteInfo>;
                    total_count: number;
                    last_time: number;
                    today_count: number;
                };
                voteInfo: {
                    total_count: number;
                    new_count: number;
                    new_nearby_count: number;
                    last_visit_time: number;
                    userInfos: Array<import("../types").NTVoteInfo>;
                };
            }>;
            friendMaxVotes: number;
            start: number;
        };
    }>;
    setLongNick(longNick: string): Promise<unknown>;
    setSelfOnlineStatus(status: number, extStatus: number, batteryStatus: number): Promise<import("..").GeneralCallResult>;
    setDiySelfOnlineStatus(faceId: string, wording: string, faceType: string): Promise<import("..").GeneralCallResult>;
    getBuddyRecommendContactArkJson(uin: string, sencenID?: string): Promise<import("..").GeneralCallResult & {
        arkMsg: string;
    }>;
    like(uid: string, count?: number): Promise<{
        result: number;
        errMsg: string;
        succCounts: number;
    }>;
    setQQAvatar(filePath: string): Promise<{
        result: import("..").GeneralCallResultStatus;
        errMsg: string;
    }>;
    setGroupAvatar(gc: string, filePath: string): Promise<import("..").GeneralCallResult>;
    fetchUserDetailInfo(uid: string, mode?: UserDetailSource): Promise<import("../types").UserDetailInfoListenerArg>;
    getUserDetailInfo(uid: string, no_cache?: boolean): Promise<User>;
    modifySelfProfile(param: ModifyProfileParams): Promise<import("..").GeneralCallResult>;
    getCookies(domain: string): Promise<{
        [key: string]: string;
    }>;
    getPSkey(domainList: string[]): Promise<import("..").GeneralCallResult & {
        domainPskeyMap: Map<string, string>;
    }>;
    getRobotUinRange(): Promise<Array<unknown>>;
    getQzoneCookies(): Promise<{
        [key: string]: string;
    }>;
    getSKey(): Promise<string | undefined>;
    getUidByUinV2(uin: string): Promise<string>;
    getUinByUidV2(uid: string): Promise<string>;
    getRecentContactListSnapShot(count: number): Promise<import("..").GeneralCallResult & {
        info: {
            errCode: number;
            errMsg: string;
            sortedContactList: Array<number>;
            changedList: Array<{
                remark: unknown;
                peerName: unknown;
                sendMemberName: unknown;
                sendNickName: unknown;
                peerUid: string;
                peerUin: string;
                msgTime: string;
                chatType: import("../types").ChatType;
                msgId: string;
            }>;
        };
    }>;
    getRecentContactListSyncLimit(count: number): Promise<unknown>;
    getRecentContactListSync(): Promise<unknown>;
    getRecentContactList(): Promise<unknown>;
    getUserDetailInfoByUin(Uin: string): Promise<import("../types").UserDetailInfoByUin>;
    forceFetchClientKey(): Promise<import("..").ForceFetchClientKeyRetType>;
}
