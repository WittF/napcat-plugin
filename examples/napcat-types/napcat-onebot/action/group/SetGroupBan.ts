import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    user_id: import("@sinclair/typebox").TString;
    duration: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupBan extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_ban";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        user_id: import("@sinclair/typebox").TString;
        duration: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        user_id: string;
        duration: number;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<null>;
}
export {};
