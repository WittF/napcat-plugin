import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const CanSendReturnSchema: import("@sinclair/typebox").TObject<{
    yes: import("@sinclair/typebox").TBoolean;
}>;
export type CanSendReturnType = Static<typeof CanSendReturnSchema>;
export declare class CanSend extends OneBotAction<void, CanSendReturnType> {
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        yes: import("@sinclair/typebox").TBoolean;
    }>;
    actionTags: string[];
    _handle(): Promise<CanSendReturnType>;
}
export default class CanSendRecord extends CanSend {
    actionName: "can_send_record";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        yes: boolean;
    };
}
