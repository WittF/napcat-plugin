import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    add_type: import("@sinclair/typebox").TNumber;
    group_question: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_answer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupAddOption extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_add_option";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        add_type: number;
    };
    returnExample: null;
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        add_type: import("@sinclair/typebox").TNumber;
        group_question: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_answer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
