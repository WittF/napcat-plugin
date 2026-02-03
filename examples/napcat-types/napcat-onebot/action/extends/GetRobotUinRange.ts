import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetRobotUinRange extends OneBotAction<void, ReturnType> {
    actionName: "get_robot_uin_range";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        minUin: string;
        maxUin: string;
    }[];
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    _handle(): Promise<unknown[]>;
}
export {};
