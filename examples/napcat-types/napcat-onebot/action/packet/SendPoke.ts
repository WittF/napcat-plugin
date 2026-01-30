import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
export declare const SendPokePayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    user_id: import("@sinclair/typebox").TString;
    target_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SendPokePayload = Static<typeof SendPokePayloadSchema>;
export declare class SendPokeBase extends GetPacketStatusDepends<SendPokePayload, void> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user_id: import("@sinclair/typebox").TString;
        target_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
    };
    returnExample: {};
    _handle(payload: SendPokePayload): Promise<void>;
}
export declare class SendPoke extends SendPokeBase {
    actionName: "send_poke";
}
export declare class GroupPoke extends SendPokeBase {
    actionName: "group_poke";
}
export declare class FriendPoke extends SendPokeBase {
    actionName: "friend_poke";
}
