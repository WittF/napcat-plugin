import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetStatusReturnSchema: import("@sinclair/typebox").TObject<{
    online: import("@sinclair/typebox").TBoolean;
    good: import("@sinclair/typebox").TBoolean;
    stat: import("@sinclair/typebox").TUnknown;
}>;
export type GetStatusReturnType = Static<typeof GetStatusReturnSchema>;
export default class GetStatus extends OneBotAction<void, GetStatusReturnType> {
    actionName: "get_status";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        online: import("@sinclair/typebox").TBoolean;
        good: import("@sinclair/typebox").TBoolean;
        stat: import("@sinclair/typebox").TUnknown;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        online: boolean;
        good: boolean;
        stat: {};
    };
    _handle(): Promise<GetStatusReturnType>;
}
