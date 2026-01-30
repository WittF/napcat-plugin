import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SetGroupPortraitPayloadSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TString;
    group_id: import("@sinclair/typebox").TString;
}>;
export type SetGroupPortraitPayload = Static<typeof SetGroupPortraitPayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    result: import("@sinclair/typebox").TNumber;
    errMsg: import("@sinclair/typebox").TString;
}>;
export type ReturnType = Static<typeof ReturnSchema>;
export default class SetGroupPortrait extends OneBotAction<SetGroupPortraitPayload, ReturnType> {
    actionName: "set_group_portrait";
    payloadSchema: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TNumber;
        errMsg: import("@sinclair/typebox").TString;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file: string;
    };
    returnExample: {
        result: number;
        errMsg: string;
    };
    _handle(payload: SetGroupPortraitPayload): Promise<ReturnType>;
}
export {};
