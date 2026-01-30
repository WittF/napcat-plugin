import { Static } from '@sinclair/typebox';
import { OneBotAction } from '../../action/OneBotAction';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message_id: import("@sinclair/typebox").TString;
    emoji_id: import("@sinclair/typebox").TString;
    emoji_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    count: import("@sinclair/typebox").TNumber;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    emoji_like_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        nick_name: import("@sinclair/typebox").TString;
    }>>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetEmojiLikes extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_emoji_likes";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        message_id: string;
        emoji_id: string;
    };
    returnExample: {
        emoji_like_list: {
            user_id: string;
            nick_name: string;
        }[];
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_id: import("@sinclair/typebox").TString;
        emoji_id: import("@sinclair/typebox").TString;
        emoji_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        count: import("@sinclair/typebox").TNumber;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        emoji_like_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            user_id: import("@sinclair/typebox").TString;
            nick_name: import("@sinclair/typebox").TString;
        }>>;
    }>;
    _handle(payload: PayloadType): Promise<{
        emoji_like_list: {
            user_id: string;
            nick_name: string;
        }[];
    }>;
}
export {};
