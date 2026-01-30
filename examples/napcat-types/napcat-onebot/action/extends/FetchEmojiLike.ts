import { Static } from '@sinclair/typebox';
import { OneBotAction } from '../../action/OneBotAction';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    emojiId: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    emojiType: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    cookie: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    emojiLikesList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        tinyId: import("@sinclair/typebox").TString;
        nickName: import("@sinclair/typebox").TString;
        headUrl: import("@sinclair/typebox").TString;
    }>>;
    cookie: import("@sinclair/typebox").TString;
    isLastPage: import("@sinclair/typebox").TBoolean;
    isFirstPage: import("@sinclair/typebox").TBoolean;
    result: import("@sinclair/typebox").TNumber;
    errMsg: import("@sinclair/typebox").TString;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class FetchEmojiLike extends OneBotAction<PayloadType, ReturnType> {
    actionName: "fetch_emoji_like";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
        emojiId: string;
        emojiType: number;
        count: number;
        cookie: string;
    };
    returnExample: {
        emojiLikesList: {
            tinyId: string;
            nickName: string;
            headUrl: string;
        }[];
        cookie: string;
        isLastPage: boolean;
        isFirstPage: boolean;
        result: number;
        errMsg: string;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        emojiId: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        emojiType: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        cookie: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        emojiLikesList: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            tinyId: import("@sinclair/typebox").TString;
            nickName: import("@sinclair/typebox").TString;
            headUrl: import("@sinclair/typebox").TString;
        }>>;
        cookie: import("@sinclair/typebox").TString;
        isLastPage: import("@sinclair/typebox").TBoolean;
        isFirstPage: import("@sinclair/typebox").TBoolean;
        result: import("@sinclair/typebox").TNumber;
        errMsg: import("@sinclair/typebox").TString;
    }>;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
