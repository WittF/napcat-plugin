import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    emoji_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    set: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetMsgEmojiLike extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_msg_emoji_like";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
        emoji_id: string;
        set: boolean;
    };
    returnExample: {
        result: boolean;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        emoji_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        set: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
