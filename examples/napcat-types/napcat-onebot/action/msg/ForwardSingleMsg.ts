import { OneBotAction } from '../../action/OneBotAction';
import { Peer } from '../../../napcat-core/types';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TNull;
type ReturnType = Static<typeof ReturnSchema>;
declare class ForwardSingleMsg extends OneBotAction<PayloadType, ReturnType> {
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
        group_id: string;
    };
    returnExample: null;
    protected getTargetPeer(payload: PayloadType): Promise<Peer>;
    _handle(payload: PayloadType): Promise<null>;
}
export declare class ForwardFriendSingleMsg extends ForwardSingleMsg {
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionName: "forward_friend_single_msg";
}
export declare class ForwardGroupSingleMsg extends ForwardSingleMsg {
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionName: "forward_group_single_msg";
}
export {};
