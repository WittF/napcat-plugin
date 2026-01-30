import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
    msg_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    msg_random: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export default class DelEssenceMsg extends OneBotAction<PayloadType, ReturnType> {
    actionName: "delete_essence_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
        msg_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        msg_random: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
