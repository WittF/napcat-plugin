/**
 * 群相册列表请求参数接口
 */
export interface AlbumListRequest {
    qun_id: string;
    attach_info: string;
    seq: number;
    request_time_line: {
        request_invoke_time: string;
    };
    album_id: string;
    lloc: string;
    batch_id: string;
}
/**
 * 创建群相册列表请求参数
 * @param qunId 群号
 * @param albumId 相册ID
 * @param seq 请求序列号，默认值为0
 * @returns 请求参数对象
 */
export declare function createAlbumListRequest(qunId: string, albumId: string, seq?: number): AlbumListRequest;
/**
 * 相册媒体项请求接口
 */
export interface AlbumMediaFeed {
    cell_common: {
        time: string;
    };
    cell_user_info: {
        user: {
            uin: string;
        };
    };
    cell_media: {
        album_id: string;
        batch_id: string;
        media_items: Array<{
            image: {
                lloc: string;
            };
        }>;
    };
}
/**
 * 创建相册媒体请求参数
 * @param uin 用户QQ号
 * @param albumId 相册ID
 * @param lloc
 * @returns 媒体请求参数对象
 */
export declare function createAlbumMediaFeed(uin: string, albumId: string, lloc: string): AlbumMediaFeed;
/**
 * 相册评论内容接口
 */
export interface AlbumCommentContent {
    type: number;
    content: string;
    who: number;
    uid: string;
    name: string;
    url: string;
}
/**
 * 相册评论请求接口
 */
export interface AlbumCommentReplyContent {
    client_key: number;
    content: AlbumCommentContent[];
    user: {
        uin: string;
    };
}
export enum RichMsgType {
    KRICHMSGTYPEPLAINTEXT = 0,
    KRICHMSGTYPEAT = 1,
    KRICHMSGTYPEURL = 2,
    KRICHMSGTYPEMEDIA = 3
}
/**
 * 创建相册评论请求参数
 * @param uin 用户QQ号
 * @param content 评论内容
 * @param client_key 客户端鉴权密钥
 * @returns 评论请求参数对象
 */
export declare function createAlbumCommentRequest(uin: string, content: string, client_key: number): AlbumCommentReplyContent;
export interface AlbumFeedLikePublish {
    cell_common: {
        time: number;
        feed_id: string;
    };
    cell_user_info: {
        user: {
            uin: string;
        };
    };
    cell_media: {
        album_id: string;
        batch_id: number;
        media_items: Array<{
            type: number;
            image: {
                lloc: string;
                sloc: string;
            };
        }>;
    };
    cell_qun_info: {
        qun_id: string;
    };
}
/**
 * 创建相册动态发布请求参数
 * @param qunId 群号
 * @param uin 用户QQ号
 * @param albumId 相册ID
 * @param lloc 信息
 * @param sloc 信息(可选，默认与lloc相同)
 * @returns 动态发布请求参数对象
 */
export declare function createAlbumFeedPublish(qunId: string, uin: string, albumId: string, lloc: string, sloc?: string): AlbumFeedLikePublish;
