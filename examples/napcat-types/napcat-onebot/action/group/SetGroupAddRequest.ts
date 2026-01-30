import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    flag: import("@sinclair/typebox").TString;
    approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
    count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupAddRequest extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_add_request";
    payloadSchema: import("@sinclair/typebox").TObject<{
        flag: import("@sinclair/typebox").TString;
        approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>>;
        count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        flag: string;
        sub_type: string;
        approve: boolean;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<null>;
    private findNotify;
}
export {};
