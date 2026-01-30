import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    album_id: import("@sinclair/typebox").TString;
    attach_info: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupAlbumMediaList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_album_media_list";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        album_id: string;
    };
    returnExample: {
        media_list: {
            media_id: string;
            url: string;
        }[];
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        album_id: import("@sinclair/typebox").TString;
        attach_info: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: PayloadType): Promise<{
        seq: number;
        result: number;
        errMs: string;
        trace_id: string;
        request_time_line: unknown;
    }>;
}
export {};
