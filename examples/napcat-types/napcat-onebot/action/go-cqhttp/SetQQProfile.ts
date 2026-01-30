import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SetQQProfilePayloadSchema: import("@sinclair/typebox").TObject<{
    nickname: import("@sinclair/typebox").TString;
    personal_note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
}>;
export type SetQQProfilePayload = Static<typeof SetQQProfilePayloadSchema>;
export declare class SetQQProfile extends OneBotAction<SetQQProfilePayload, any> {
    actionName: "set_qq_profile";
    payloadSchema: import("@sinclair/typebox").TObject<{
        nickname: import("@sinclair/typebox").TString;
        personal_note: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        nickname: string;
        personal_note: string;
    };
    returnExample: {};
    _handle(payload: SetQQProfilePayload): Promise<import("../../../napcat-core").GeneralCallResult>;
}
