import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    rawData: import("@sinclair/typebox").TString;
    brief: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class CreateCollection extends OneBotAction<PayloadType, ReturnType> {
    actionName: "create_collection";
    payloadSchema: import("@sinclair/typebox").TObject<{
        rawData: import("@sinclair/typebox").TString;
        brief: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        rawData: string;
        brief: string;
    };
    returnExample: {
        result: number;
        errMsg: string;
    };
    _handle(payload: PayloadType): Promise<unknown>;
}
export {};
