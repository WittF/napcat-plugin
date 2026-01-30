import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    start: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    uid: import("@sinclair/typebox").TString;
    time: import("@sinclair/typebox").TString;
    favoriteInfo: import("@sinclair/typebox").TObject<{
        userInfos: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        total_count: import("@sinclair/typebox").TNumber;
        last_time: import("@sinclair/typebox").TNumber;
        today_count: import("@sinclair/typebox").TNumber;
    }>;
    voteInfo: import("@sinclair/typebox").TObject<{
        total_count: import("@sinclair/typebox").TNumber;
        new_count: import("@sinclair/typebox").TNumber;
        new_nearby_count: import("@sinclair/typebox").TNumber;
        last_visit_time: import("@sinclair/typebox").TNumber;
        userInfos: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetProfileLike extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_profile_like";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        start: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        uid: import("@sinclair/typebox").TString;
        time: import("@sinclair/typebox").TString;
        favoriteInfo: import("@sinclair/typebox").TObject<{
            userInfos: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
            total_count: import("@sinclair/typebox").TNumber;
            last_time: import("@sinclair/typebox").TNumber;
            today_count: import("@sinclair/typebox").TNumber;
        }>;
        voteInfo: import("@sinclair/typebox").TObject<{
            total_count: import("@sinclair/typebox").TNumber;
            new_count: import("@sinclair/typebox").TNumber;
            new_nearby_count: import("@sinclair/typebox").TNumber;
            last_visit_time: import("@sinclair/typebox").TNumber;
            userInfos: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        }>;
    }>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        start: number;
        count: number;
    };
    returnExample: {
        uid: string;
        time: string;
        favoriteInfo: {
            userInfos: never[];
            total_count: number;
            last_time: number;
            today_count: number;
        };
        voteInfo: {
            total_count: number;
            new_count: number;
            new_nearby_count: number;
            last_visit_time: number;
            userInfos: never[];
        };
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
