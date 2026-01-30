import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const DoGroupAlbumCommentPayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    album_id: import("@sinclair/typebox").TString;
    lloc: import("@sinclair/typebox").TString;
    content: import("@sinclair/typebox").TString;
}>;
export type DoGroupAlbumCommentPayload = Static<typeof DoGroupAlbumCommentPayloadSchema>;
export declare class DoGroupAlbumComment extends OneBotAction<DoGroupAlbumCommentPayload, any> {
    actionName: "do_group_album_comment";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        album_id: string;
        lloc: string;
        content: string;
    };
    returnExample: {
        result: {};
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        album_id: import("@sinclair/typebox").TString;
        lloc: import("@sinclair/typebox").TString;
        content: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: DoGroupAlbumCommentPayload): Promise<unknown>;
}
