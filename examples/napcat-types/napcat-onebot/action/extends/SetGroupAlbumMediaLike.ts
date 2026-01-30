import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    album_id: import("@sinclair/typebox").TString;
    lloc: import("@sinclair/typebox").TString;
    id: import("@sinclair/typebox").TString;
    set: import("@sinclair/typebox").TBoolean;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetGroupAlbumMediaLike extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_album_media_like";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        album_id: string;
        lloc: string;
        id: string;
    };
    returnExample: {
        result: {};
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        album_id: import("@sinclair/typebox").TString;
        lloc: import("@sinclair/typebox").TString;
        id: import("@sinclair/typebox").TString;
        set: import("@sinclair/typebox").TBoolean;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
