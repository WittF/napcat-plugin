import { FriendRequest, FriendV2 } from '../types';
import { InstanceContext, NapCatCore } from '../index';
import { LimitedHashTable } from '../../napcat-common/src/message-unique';
export declare class NTQQFriendApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    setBuddyRemark(uid: string, remark: string): Promise<void>;
    getBuddyV2SimpleInfoMap(): Promise<Map<string, import("../types").SimpleInfo>>;
    getBuddy(): Promise<FriendV2[]>;
    getBuddyIdMap(): Promise<LimitedHashTable<string, string>>;
    delBuddy(uid: string, tempBlock?: boolean, tempBothDel?: boolean): Promise<unknown>;
    getBuddyV2ExWithCate(): Promise<{
        categoryId: number;
        categorySortId: number;
        categoryName: string;
        categoryMbCount: number;
        onlineCount: number;
        buddyList: import("../types").SimpleInfo[];
    }[]>;
    isBuddy(uid: string): Promise<boolean>;
    clearBuddyReqUnreadCnt(): Promise<import("../index").GeneralCallResult>;
    getBuddyReq(): Promise<import("../types").FriendRequestNotify>;
    handleFriendRequest(notify: FriendRequest, accept: boolean): Promise<void>;
    handleDoubtFriendRequest(friendUid: string, str1?: string, str2?: string): Promise<void>;
    getDoubtFriendRequest(count: number): Promise<{
        flag: string;
        uin: string;
        nick: string;
        source: string;
        reason: string;
        msg: string;
        group_code: string;
        time: string;
        type: string;
    }[]>;
}
