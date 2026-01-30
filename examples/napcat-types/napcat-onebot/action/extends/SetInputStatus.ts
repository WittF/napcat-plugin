import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
    event_type: import("@sinclair/typebox").TNumber;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetInputStatus extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_input_status";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
        event_type: import("@sinclair/typebox").TNumber;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        event_type: number;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
