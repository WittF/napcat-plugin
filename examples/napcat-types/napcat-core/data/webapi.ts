export interface ControlReq {
    appid?: string;
    asy_upload?: number;
    biz_req?: BizReq;
    check_type?: number;
    checksum?: string;
    cmd?: string;
    env?: Env;
    file_len?: number;
    model?: number;
    session?: string;
    token?: Token;
    uin?: string;
}
export interface BizReq {
    iAlbumTypeID: number;
    iBatchID: number;
    iBitmap: number;
    iDistinctUse: number;
    iNeedFeeds: number;
    iPicHight: number;
    iPicWidth: number;
    iUploadTime: number;
    iUploadType: number;
    iUpPicType: number;
    iWaterType: number;
    mapExt: MapExt;
    sAlbumID: string;
    sAlbumName: string;
    sPicDesc: string;
    sPicPath: string;
    sPicTitle: string;
    stExtendInfo: StExtendInfo;
}
export interface MapExt {
    appid: string;
    userid: string;
}
export interface StExtendInfo {
    mapParams: MapParams;
}
export interface MapParams {
    batch_num: string;
    photo_num: string;
    video_num: string;
}
export interface Env {
    deviceInfo: string;
    refer: string;
}
export interface Token {
    appid: number;
    data: string;
    type: number;
}
export declare function qunAlbumControl({ uin, group_id, pskey, pic_md5, img_size, img_name, sAlbumName, sAlbumID, photo_num, video_num, batch_num, }: {
    uin: string;
    group_id: string;
    pskey: string;
    pic_md5: string;
    img_size: number;
    img_name: string;
    sAlbumName: string;
    sAlbumID: string;
    photo_num?: string;
    video_num?: string;
    batch_num?: string;
}): {
    control_req: ControlReq[];
};
export declare function createStreamUpload({ uin, session, offset, seq, end, slice_size, data, }: {
    uin: string;
    session: string;
    offset: number;
    seq: number;
    end: number;
    slice_size: number;
    data: string;
}): {
    uin: string;
    appid: string;
    session: string;
    offset: number;
    data: string;
    checksum: string;
    check_type: number;
    retry: number;
    seq: number;
    end: number;
    cmd: string;
    slice_size: number;
    biz_req: {
        iUploadType: number;
    };
};
