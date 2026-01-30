import { OneBotAction } from '../OneBotAction';
export declare class BotExit extends OneBotAction<void, void> {
    actionName: "bot_exit";
    payloadSchema: import("@sinclair/typebox").TVoid;
    returnSchema: import("@sinclair/typebox").TVoid;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<void>;
}
