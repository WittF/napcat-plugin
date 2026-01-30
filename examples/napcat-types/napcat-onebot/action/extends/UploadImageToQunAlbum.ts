import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    album_id: import("@sinclair/typebox").TString;
    album_name: import("@sinclair/typebox").TString;
    file: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class UploadImageToQunAlbum extends OneBotAction<PayloadType, ReturnType> {
    actionName: "upload_image_to_qun_album";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        album_id: string;
        album_name: string;
        file: string;
    };
    returnExample: {
        result: null;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        album_id: import("@sinclair/typebox").TString;
        album_name: import("@sinclair/typebox").TString;
        file: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: PayloadType): Promise<void>;
}
export {};
