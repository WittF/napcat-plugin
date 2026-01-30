import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
export declare const SetGroupTodoPayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SetGroupTodoPayload = Static<typeof SetGroupTodoPayloadSchema>;
export declare class SetGroupTodo extends GetPacketStatusDepends<SetGroupTodoPayload, void> {
    actionName: "set_group_todo";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        message_id: string;
    };
    returnExample: {};
    _handle(payload: SetGroupTodoPayload): Promise<void>;
}
