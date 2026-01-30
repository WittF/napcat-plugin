import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NTQQWebApi } from '../../../napcat-core/apis';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
type GetQunAlbumListReturn = Awaited<globalThis.ReturnType<NTQQWebApi['getAlbumListByNTQQ']>>['response']['album_list'];
export declare class GetQunAlbumList extends OneBotAction<PayloadType, GetQunAlbumListReturn> {
    actionName: "get_qun_album_list";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        album_id: string;
        album_name: string;
        cover_url: string;
        create_time: number;
    }[];
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    _handle(payload: PayloadType): Promise<GetQunAlbumListReturn>;
}
export {};
