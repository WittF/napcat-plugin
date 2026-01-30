import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    no_code_finger_open: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    no_finger_open: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupSearch extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_search";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: null;
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        no_code_finger_open: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        no_finger_open: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
