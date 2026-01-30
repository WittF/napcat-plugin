import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    ext_status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    battery_status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export declare class SetOnlineStatus extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_online_status";
    payloadSchema: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        ext_status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        battery_status: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        status: number;
        ext_status: number;
        battery_status: number;
    };
    returnExample: null;
    _handle(payload: PayloadType): Promise<null>;
}
export {};
