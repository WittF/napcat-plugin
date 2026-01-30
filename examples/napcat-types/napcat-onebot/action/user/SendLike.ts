import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SendLikePayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    times: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
export type SendLikePayload = Static<typeof SendLikePayloadSchema>;
export default class SendLike extends OneBotAction<SendLikePayload, void> {
    actionName: "send_like";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        times: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        times: number;
    };
    returnExample: {};
    errorExamples: {
        code: number;
        description: string;
    }[];
    _handle(payload: SendLikePayload): Promise<void>;
}
