import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetEssenceMsg extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_essence_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
