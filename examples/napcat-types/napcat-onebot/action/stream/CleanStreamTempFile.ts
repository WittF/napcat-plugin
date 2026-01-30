import { OneBotAction } from '../../action/OneBotAction';
export declare class CleanStreamTempFile extends OneBotAction<void, void> {
    actionName: "clean_stream_temp_file";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        message: string;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    _handle(_payload: void): Promise<void>;
}
