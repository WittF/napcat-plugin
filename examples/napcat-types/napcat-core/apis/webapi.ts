import { GroupEssenceMsgRet, InstanceContext, WebApiGroupMember, WebApiGroupNoticeRet, WebHonorType, NapCatCore } from '../index';
export interface SetNoticeRetSuccess {
    ec: number;
    em: string;
    id: number;
    ltsm: number;
    new_fid: string;
    read_only: number;
    role: number;
    srv_code: number;
}
export declare class NTQQWebApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    shareDigest(groupCode: string, msgSeq: string, msgRandom: string, targetGroupCode: string): Promise<string | undefined>;
    getGroupEssenceMsgAll(GroupCode: string): Promise<GroupEssenceMsgRet[]>;
    getGroupEssenceMsg(GroupCode: string, page_start?: number, page_limit?: number): Promise<GroupEssenceMsgRet | undefined>;
    getGroupMembers(GroupCode: string): Promise<WebApiGroupMember[]>;
    setGroupNotice(GroupCode: string, Content: string, pinned?: number, type?: number, is_show_edit_card?: number, tip_window_type?: number, confirm_required?: number, picId?: string, imgWidth?: number, imgHeight?: number): Promise<SetNoticeRetSuccess | undefined>;
    getGroupNotice(GroupCode: string): Promise<undefined | WebApiGroupNoticeRet>;
    private getDataInternal;
    private getHonorList;
    getGroupHonorInfo(groupCode: string, getType: WebHonorType): Promise<{
        group_id: number;
        current_talkative: {};
        talkative_list: never[];
        performer_list: never[];
        legend_list: never[];
        emotion_list: never[];
        strong_newbie_list: never[];
    }>;
    private cookieToString;
    getBknFromCookie(cookieObject: {
        [key: string]: string;
    }): string;
    getBknFromSKey(sKey: string): string;
    getAlbumListByNTQQ(gc: string): Promise<{
        response: {
            seq: number;
            result: number;
            errMs: string;
            trace_id: string;
            is_from_cache: boolean;
            request_time_line: unknown;
            album_list: Array<{
                name: string;
                album_id: string;
            }>;
            attach_info: string;
            has_more: boolean;
            right: unknown;
            banner: unknown;
        };
    }>;
    getAlbumList(gc: string): Promise<{
        id: string;
        title: string;
    }[]>;
    createQunAlbumSession(gc: string, sAlbumID: string, sAlbumName: string, path: string, skey: string, pskey: string, img_md5: string, uin: string): Promise<{
        data: {
            session: string;
        };
        ret: number;
        msg: string;
    }>;
    uploadQunAlbumSlice(path: string, session: string, skey: string, pskey: string, uin: string, slice_size: number): Promise<{
        success: boolean;
        message: string;
    }>;
    uploadImageToQunAlbum(gc: string, sAlbumID: string, sAlbumName: string, path: string): Promise<void>;
    getAlbumMediaListByNTQQ(gc: string, albumId: string, attach_info?: string): Promise<{
        seq: number;
        result: number;
        errMs: string;
        trace_id: string;
        request_time_line: unknown;
    }>;
    doAlbumMediaPlainCommentByNTQQ(qunId: string, albumId: string, lloc: string, content: string): Promise<unknown>;
    deleteAlbumMediaByNTQQ(qunId: string, albumId: string, lloc: string): Promise<unknown>;
    doAlbumMediaLikeByNTQQ(qunId: string, albumId: string, lloc: string, id: string): Promise<unknown>;
}
