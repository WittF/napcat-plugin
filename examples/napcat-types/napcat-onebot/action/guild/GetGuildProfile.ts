import { OneBotAction } from '../../action/OneBotAction';
export declare class GetGuildProfile extends OneBotAction<void, void> {
    actionName: "get_guild_service_profile";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        guild_id: string;
    };
    returnExample: {
        guild_id: string;
        guild_name: string;
        guild_display_id: string;
    };
    _handle(): Promise<void>;
}
