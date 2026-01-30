import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPDeleteFriendPayloadSchema: import("@sinclair/typebox").TObject<{
    friend_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
    temp_block: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    temp_both_del: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export type GoCQHTTPDeleteFriendPayload = Static<typeof GoCQHTTPDeleteFriendPayloadSchema>;
export declare class GoCQHTTPDeleteFriend extends OneBotAction<GoCQHTTPDeleteFriendPayload, any> {
    actionName: "delete_friend";
    payloadSchema: import("@sinclair/typebox").TObject<{
        friend_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>>;
        temp_block: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        temp_both_del: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
    };
    returnExample: {};
    _handle(payload: GoCQHTTPDeleteFriendPayload): Promise<unknown>;
}
