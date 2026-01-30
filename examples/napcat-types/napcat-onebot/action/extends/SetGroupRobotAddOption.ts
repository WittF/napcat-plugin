import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    robot_member_switch: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    robot_member_examine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupRobotAddOption extends OneBotAction<PayloadType, ReturnType> {
    actionName: "set_group_robot_add_option";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: null;
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        robot_member_switch: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        robot_member_examine: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export {};
