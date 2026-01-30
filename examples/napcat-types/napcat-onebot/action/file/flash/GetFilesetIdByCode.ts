import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetFilesetIdPayloadSchema: import("@sinclair/typebox").TObject<{
    share_code: import("@sinclair/typebox").TString;
}>;
export type GetFilesetIdPayload = Static<typeof GetFilesetIdPayloadSchema>;
export declare class GetFilesetId extends OneBotAction<GetFilesetIdPayload, {
    fileset_id: string;
}> {
    actionName: "get_fileset_id";
    payloadSchema: import("@sinclair/typebox").TObject<{
        share_code: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        share_code: string;
    };
    returnExample: {
        fileset_id: string;
    };
    _handle(payload: GetFilesetIdPayload): Promise<{
        fileset_id: string;
    }>;
}
