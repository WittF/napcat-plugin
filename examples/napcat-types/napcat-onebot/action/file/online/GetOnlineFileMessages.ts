import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const GetOnlineFileMessagesPayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
}>;
export type GetOnlineFileMessagesPayload = Static<typeof GetOnlineFileMessagesPayloadSchema>;
export declare class GetOnlineFileMessages extends OneBotAction<GetOnlineFileMessagesPayload, any> {
    actionName: "get_online_file_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
    };
    returnExample: never[];
    _handle(payload: GetOnlineFileMessagesPayload): Promise<any>;
}
