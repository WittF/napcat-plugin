import { OneBotAction } from '../../action/OneBotAction';
export declare class GoCQHTTPSetModelShow extends OneBotAction<void, void> {
    actionName: "_set_model_show";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        model: string;
        model_show: string;
    };
    returnExample: {};
    _handle(): Promise<void>;
}
