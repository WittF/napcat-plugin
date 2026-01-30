import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetShareLinkPayloadSchema: import("@sinclair/typebox").TObject<{
    fileset_id: import("@sinclair/typebox").TString;
}>;
export type GetShareLinkPayload = Static<typeof GetShareLinkPayloadSchema>;
export declare class GetShareLink extends OneBotAction<GetShareLinkPayload, any> {
    actionName: "get_share_link";
    payloadSchema: import("@sinclair/typebox").TObject<{
        fileset_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        fileset_id: string;
    };
    returnExample: string;
    _handle(payload: GetShareLinkPayload): Promise<import("../../../../napcat-core").GeneralCallResult & {
        shareLink: string;
        expireTimestamp: string;
    }>;
}
