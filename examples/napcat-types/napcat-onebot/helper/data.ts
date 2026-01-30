import { FriendV2, Group, GroupFileInfoUpdateParamType, GroupMember, SelfInfo, NTSex } from '../../napcat-core';
import { OB11Group, OB11GroupFile, OB11GroupFileFolder, OB11GroupMember, OB11GroupMemberRole, OB11User, OB11UserSex } from '../types';
export declare class OB11Construct {
    static selfInfo(selfInfo: SelfInfo): OB11User;
    static friends(friends: FriendV2[]): OB11User[];
    static friend(friends: FriendV2): OB11User;
    static groupMemberRole(role: number): OB11GroupMemberRole | undefined;
    static sex(sex?: NTSex): OB11UserSex;
    static groupMember(group_id: string, member: GroupMember): OB11GroupMember;
    static group(group: Group): OB11Group;
    static groups(groups: Group[]): OB11Group[];
    static file(peerId: string, file: Exclude<GroupFileInfoUpdateParamType['item'][0]['fileInfo'], undefined>): OB11GroupFile;
    static folder(peerId: string, folder: Exclude<GroupFileInfoUpdateParamType['item'][0]['folderInfo'], undefined>): OB11GroupFileFolder;
}
