import { OneBotAction } from '../OneBotAction';
export declare class BotExit extends OneBotAction<void, void> {
    actionName: "bot_exit";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{}>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<void>;
}
