import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    count: import("@sinclair/typebox").TNumber;
    reverse_order: import("@sinclair/typebox").TBoolean;
    disable_get_url: import("@sinclair/typebox").TBoolean;
    parse_mult_msg: import("@sinclair/typebox").TBoolean;
    quick_reply: import("@sinclair/typebox").TBoolean;
    reverseOrder: import("@sinclair/typebox").TBoolean;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    messages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export default class GoCQHTTPGetGroupMsgHistory extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_group_msg_history";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        count: import("@sinclair/typebox").TNumber;
        reverse_order: import("@sinclair/typebox").TBoolean;
        disable_get_url: import("@sinclair/typebox").TBoolean;
        parse_mult_msg: import("@sinclair/typebox").TBoolean;
        quick_reply: import("@sinclair/typebox").TBoolean;
        reverseOrder: import("@sinclair/typebox").TBoolean;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        messages: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        message_seq: number;
        count: number;
    };
    returnExample: {
        messages: never[];
    };
    _handle(payload: PayloadType, _adapter: string, config: NetworkAdapterConfig): Promise<ReturnType>;
}
export {};
