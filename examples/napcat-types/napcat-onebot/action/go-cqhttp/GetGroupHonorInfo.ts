import { OneBotAction } from '../../action/OneBotAction';
import { WebHonorType } from '../../../napcat-core/types';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof WebHonorType>>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TNumber;
    current_talkative: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
    talkative_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    performer_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    legend_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    emotion_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    strong_newbie_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupHonorInfo extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_honor_info";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof WebHonorType>>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TNumber;
        current_talkative: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnknown>;
        talkative_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        performer_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        legend_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        emotion_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
        strong_newbie_list: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnknown>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        type: string;
    };
    returnExample: {
        group_id: number;
        current_talkative: {};
        talkative_list: never[];
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
