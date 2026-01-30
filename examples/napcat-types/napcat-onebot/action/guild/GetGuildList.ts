import { OneBotAction } from '../../action/OneBotAction';
export declare class GetGuildList extends OneBotAction<void, void> {
    actionName: "get_guild_list";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        guild_id: string;
        guild_name: string;
    }[];
    _handle(): Promise<void>;
}
