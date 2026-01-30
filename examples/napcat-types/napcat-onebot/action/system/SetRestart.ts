import { OneBotAction } from '../OneBotAction';
export declare class SetRestart extends OneBotAction<void, void> {
    actionName: "set_restart";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<void>;
}
