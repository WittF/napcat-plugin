import { OneBotAction } from '../../action/OneBotAction';
export declare class CleanCache extends OneBotAction<void, void> {
    actionName: "clean_cache";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<void>;
}
