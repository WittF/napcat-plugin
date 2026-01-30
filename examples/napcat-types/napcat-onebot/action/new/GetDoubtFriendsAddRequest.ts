import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetDoubtFriendsAddRequestPayloadSchema: import("@sinclair/typebox").TObject<{
    count: import("@sinclair/typebox").TNumber;
}>;
export type GetDoubtFriendsAddRequestPayload = Static<typeof GetDoubtFriendsAddRequestPayloadSchema>;
export declare class GetDoubtFriendsAddRequest extends OneBotAction<GetDoubtFriendsAddRequestPayload, any> {
    actionName: "get_doubt_friends_add_request";
    payloadSchema: import("@sinclair/typebox").TObject<{
        count: import("@sinclair/typebox").TNumber;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        count: number;
    };
    returnExample: {
        user_id: number;
        nickname: string;
        age: number;
        sex: string;
        reason: string;
        flag: string;
    }[];
    _handle(payload: GetDoubtFriendsAddRequestPayload): Promise<{
        flag: string;
        uin: string;
        nick: string;
        source: string;
        reason: string;
        msg: string;
        group_code: string;
        time: string;
        type: string;
    }[]>;
}
