import { AlbumCommentReplyContent, AlbumFeedLikePublish, AlbumListRequest, AlbumMediaFeed } from '../data/album';
export interface NodeIKernelAlbumService {
    setAlbumServiceInfo(arg1: string, arg2: string, arg3: string): unknown;
    getMainPage(arg1: unknown, arg2: unknown): unknown;
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
    getAlbumInfo(arg: unknown): unknown;
    deleteAlbum(arg1: number, arg2: string, arg3: string): unknown;
    addAlbum(arg1: unknown, arg2: unknown): unknown;
    deleteMedias(seq: number, group_code: string, album_id: string, media_ids: string[], ban_ids: unknown[]): Promise<unknown>;
    modifyAlbum(arg1: number, arg2: unknown, arg3: Array<unknown>[]): unknown;
    getMediaList(param: AlbumListRequest): Promise<{
        response: {
            seq: number;
            result: number;
            errMs: string;
            trace_id: string;
            request_time_line: unknown;
        };
    }>;
    quoteToQzone(arg: unknown): unknown;
    quoteToQunAlbum(arg: unknown): unknown;
    queryQuoteToQunAlbumStatus(arg: unknown): unknown;
    getQunFeeds(arg: unknown): unknown;
    getQunFeedDetail(arg: unknown): unknown;
    getQunNoticeList(arg1: number, arg2: unknown, arg3: string, arg4: string): unknown;
    getQunComment(arg: unknown): unknown;
    getQunLikes(arg1: number, arg2: unknown, arg3: string, arg4: string): unknown;
    deleteQunFeed(arg: unknown): unknown;
    doQunComment(seq: number, ext: {
        map_info: unknown[];
        map_bytes_info: unknown[];
        map_user_account: unknown[];
    }, qunId: string, commentType: number, feed: AlbumMediaFeed, content: AlbumCommentReplyContent): Promise<unknown>;
    doQunReply(arg1: number, arg2: unknown, arg3: string, arg4: number, arg5: unknown, arg6: unknown, arg7: unknown): unknown;
    doQunLike(seq: number, ext: {
        map_info: unknown[];
        map_bytes_info: unknown[];
        map_user_account: unknown[];
    }, param: {
        id: string;
        status: number;
    }, like: AlbumFeedLikePublish): Promise<unknown>;
    getRedPoints(arg1: string, arg2: number, arg3: string): unknown;
}
