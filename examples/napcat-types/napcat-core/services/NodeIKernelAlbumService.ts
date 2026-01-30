import { AlbumCommentReplyContent, AlbumFeedLikePublish, AlbumListRequest, AlbumMediaFeed } from '../data/album';
export interface NodeIKernelAlbumService {
    setAlbumServiceInfo(...args: unknown[]): unknown;
    getMainPage(...args: unknown[]): unknown;
    getAlbumList(params: {
        qun_id: string;
        attach_info: string;
        seq: number;
        request_time_line: {
            request_invoke_time: string;
        };
    }): Promise<{
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
    getAlbumInfo(...args: unknown[]): unknown;
    deleteAlbum(...args: unknown[]): unknown;
    addAlbum(...args: unknown[]): unknown;
    deleteMedias(seq: number, group_code: string, album_id: string, media_ids: string[], ban_ids: unknown[]): Promise<unknown>;
    modifyAlbum(...args: unknown[]): unknown;
    getMediaList(param: AlbumListRequest): Promise<{
        response: {
            seq: number;
            result: number;
            errMs: string;
            trace_id: string;
            request_time_line: unknown;
        };
    }>;
    quoteToQzone(...args: unknown[]): unknown;
    quoteToQunAlbum(...args: unknown[]): unknown;
    queryQuoteToQunAlbumStatus(...args: unknown[]): unknown;
    getQunFeeds(...args: unknown[]): unknown;
    getQunFeedDetail(...args: unknown[]): unknown;
    getQunNoticeList(...args: unknown[]): unknown;
    getQunComment(...args: unknown[]): unknown;
    getQunLikes(...args: unknown[]): unknown;
    deleteQunFeed(...args: unknown[]): unknown;
    doQunComment(seq: number, ext: {
        map_info: unknown[];
        map_bytes_info: unknown[];
        map_user_account: unknown[];
    }, qunId: string, commentType: number, feed: AlbumMediaFeed, content: AlbumCommentReplyContent): Promise<unknown>;
    doQunReply(...args: unknown[]): unknown;
    doQunLike(seq: number, ext: {
        map_info: unknown[];
        map_bytes_info: unknown[];
        map_user_account: unknown[];
    }, param: {
        id: string;
        status: number;
    }, like: AlbumFeedLikePublish): Promise<unknown>;
    getRedPoints(...args: unknown[]): unknown;
}
