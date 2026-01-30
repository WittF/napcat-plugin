import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetOnlineClient extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_online_clients";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        no_cache: boolean;
    };
    returnExample: never[];
    _handle(): Promise<never[]>;
}
export {};
