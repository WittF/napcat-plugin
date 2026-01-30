export declare const GuildActionsExamples: {
    GetGuildList: {
        payload: {};
        response: {
            guild_id: string;
            guild_name: string;
        }[];
    };
    GetGuildProfile: {
        payload: {
            guild_id: string;
        };
        response: {
            guild_id: string;
            guild_name: string;
            guild_display_id: string;
        };
    };
};
