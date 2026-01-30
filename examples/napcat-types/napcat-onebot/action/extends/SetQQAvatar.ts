import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetAvatar extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_qq_avatar";
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        file: string;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
