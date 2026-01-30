import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    msg_seq: import("@sinclair/typebox").TNumber;
    msg_random: import("@sinclair/typebox").TNumber;
    sender_id: import("@sinclair/typebox").TNumber;
    sender_nick: import("@sinclair/typebox").TString;
    operator_id: import("@sinclair/typebox").TNumber;
    operator_nick: import("@sinclair/typebox").TString;
    message_id: import("@sinclair/typebox").TNumber;
    operator_time: import("@sinclair/typebox").TNumber;
    content: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupEssence extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_essence_msg_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        msg_seq: import("@sinclair/typebox").TNumber;
        msg_random: import("@sinclair/typebox").TNumber;
        sender_id: import("@sinclair/typebox").TNumber;
        sender_nick: import("@sinclair/typebox").TString;
        operator_id: import("@sinclair/typebox").TNumber;
        operator_nick: import("@sinclair/typebox").TString;
        message_id: import("@sinclair/typebox").TNumber;
        operator_time: import("@sinclair/typebox").TNumber;
        content: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        message_id: number;
        sender_id: number;
        sender_nick: string;
        operator_id: number;
        operator_nick: string;
        operator_time: number;
        content: string;
    }[];
    private msgSeqToMsgId;
    _handle(payload: PayloadType, _adapter: string, config: NetworkAdapterConfig): Promise<ReturnType>;
}
export {};
