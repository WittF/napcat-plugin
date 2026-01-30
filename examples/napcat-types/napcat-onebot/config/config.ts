import { Static } from '@sinclair/typebox';
declare const HttpServerConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    port: import("@sinclair/typebox").TNumber;
    host: import("@sinclair/typebox").TString;
    enableCors: import("@sinclair/typebox").TBoolean;
    enableWebsocket: import("@sinclair/typebox").TBoolean;
    messagePostFormat: import("@sinclair/typebox").TString;
    token: import("@sinclair/typebox").TString;
    debug: import("@sinclair/typebox").TBoolean;
}>;
declare const HttpSseServerConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    port: import("@sinclair/typebox").TNumber;
    host: import("@sinclair/typebox").TString;
    enableCors: import("@sinclair/typebox").TBoolean;
    enableWebsocket: import("@sinclair/typebox").TBoolean;
    messagePostFormat: import("@sinclair/typebox").TString;
    token: import("@sinclair/typebox").TString;
    debug: import("@sinclair/typebox").TBoolean;
    reportSelfMessage: import("@sinclair/typebox").TBoolean;
}>;
declare const HttpClientConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    url: import("@sinclair/typebox").TString;
    messagePostFormat: import("@sinclair/typebox").TString;
    reportSelfMessage: import("@sinclair/typebox").TBoolean;
    token: import("@sinclair/typebox").TString;
    debug: import("@sinclair/typebox").TBoolean;
}>;
declare const WebsocketServerConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    host: import("@sinclair/typebox").TString;
    port: import("@sinclair/typebox").TNumber;
    messagePostFormat: import("@sinclair/typebox").TString;
    reportSelfMessage: import("@sinclair/typebox").TBoolean;
    token: import("@sinclair/typebox").TString;
    enableForcePushEvent: import("@sinclair/typebox").TBoolean;
    debug: import("@sinclair/typebox").TBoolean;
    heartInterval: import("@sinclair/typebox").TNumber;
}>;
declare const WebsocketClientConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    url: import("@sinclair/typebox").TString;
    messagePostFormat: import("@sinclair/typebox").TString;
    reportSelfMessage: import("@sinclair/typebox").TBoolean;
    reconnectInterval: import("@sinclair/typebox").TNumber;
    token: import("@sinclair/typebox").TString;
    debug: import("@sinclair/typebox").TBoolean;
    heartInterval: import("@sinclair/typebox").TNumber;
}>;
declare const PluginConfigSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    enable: import("@sinclair/typebox").TBoolean;
    messagePostFormat: import("@sinclair/typebox").TString;
    reportSelfMessage: import("@sinclair/typebox").TBoolean;
    debug: import("@sinclair/typebox").TBoolean;
}>;
export declare const OneBotConfigSchema: import("@sinclair/typebox").TObject<{
    network: import("@sinclair/typebox").TObject<{
        httpServers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            port: import("@sinclair/typebox").TNumber;
            host: import("@sinclair/typebox").TString;
            enableCors: import("@sinclair/typebox").TBoolean;
            enableWebsocket: import("@sinclair/typebox").TBoolean;
            messagePostFormat: import("@sinclair/typebox").TString;
            token: import("@sinclair/typebox").TString;
            debug: import("@sinclair/typebox").TBoolean;
        }>>;
        httpSseServers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            port: import("@sinclair/typebox").TNumber;
            host: import("@sinclair/typebox").TString;
            enableCors: import("@sinclair/typebox").TBoolean;
            enableWebsocket: import("@sinclair/typebox").TBoolean;
            messagePostFormat: import("@sinclair/typebox").TString;
            token: import("@sinclair/typebox").TString;
            debug: import("@sinclair/typebox").TBoolean;
            reportSelfMessage: import("@sinclair/typebox").TBoolean;
        }>>;
        httpClients: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            url: import("@sinclair/typebox").TString;
            messagePostFormat: import("@sinclair/typebox").TString;
            reportSelfMessage: import("@sinclair/typebox").TBoolean;
            token: import("@sinclair/typebox").TString;
            debug: import("@sinclair/typebox").TBoolean;
        }>>;
        websocketServers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            host: import("@sinclair/typebox").TString;
            port: import("@sinclair/typebox").TNumber;
            messagePostFormat: import("@sinclair/typebox").TString;
            reportSelfMessage: import("@sinclair/typebox").TBoolean;
            token: import("@sinclair/typebox").TString;
            enableForcePushEvent: import("@sinclair/typebox").TBoolean;
            debug: import("@sinclair/typebox").TBoolean;
            heartInterval: import("@sinclair/typebox").TNumber;
        }>>;
        websocketClients: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            url: import("@sinclair/typebox").TString;
            messagePostFormat: import("@sinclair/typebox").TString;
            reportSelfMessage: import("@sinclair/typebox").TBoolean;
            reconnectInterval: import("@sinclair/typebox").TNumber;
            token: import("@sinclair/typebox").TString;
            debug: import("@sinclair/typebox").TBoolean;
            heartInterval: import("@sinclair/typebox").TNumber;
        }>>;
        plugins: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            enable: import("@sinclair/typebox").TBoolean;
            messagePostFormat: import("@sinclair/typebox").TString;
            reportSelfMessage: import("@sinclair/typebox").TBoolean;
            debug: import("@sinclair/typebox").TBoolean;
        }>>;
    }>;
    musicSignUrl: import("@sinclair/typebox").TString;
    enableLocalFile2Url: import("@sinclair/typebox").TBoolean;
    parseMultMsg: import("@sinclair/typebox").TBoolean;
    imageDownloadProxy: import("@sinclair/typebox").TString;
}>;
export type OneBotConfig = Static<typeof OneBotConfigSchema>;
export type HttpServerConfig = Static<typeof HttpServerConfigSchema>;
export type HttpSseServerConfig = Static<typeof HttpSseServerConfigSchema>;
export type HttpClientConfig = Static<typeof HttpClientConfigSchema>;
export type WebsocketServerConfig = Static<typeof WebsocketServerConfigSchema>;
export type WebsocketClientConfig = Static<typeof WebsocketClientConfigSchema>;
export type PluginConfig = Static<typeof PluginConfigSchema>;
export type NetworkAdapterConfig = HttpServerConfig | HttpSseServerConfig | HttpClientConfig | WebsocketServerConfig | WebsocketClientConfig | PluginConfig;
export type NetworkConfigKey = keyof OneBotConfig['network'];
export declare function loadConfig(config: Partial<OneBotConfig>): OneBotConfig;
export {};
