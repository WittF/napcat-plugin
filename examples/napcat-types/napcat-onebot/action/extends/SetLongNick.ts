import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    longNick: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetLongNick extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_self_longnick";
    payloadSchema: import("@sinclair/typebox").TObject<{
        longNick: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        longNick: string;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
