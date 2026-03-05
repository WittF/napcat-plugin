import { ConfigBase } from '../helper/config-base';
import { NapCatCore } from '../index';
import { Static } from '@sinclair/typebox';
export declare const BypassOptionsSchema: import("@sinclair/typebox").TObject<{
    hook: import("@sinclair/typebox").TBoolean;
    window: import("@sinclair/typebox").TBoolean;
    module: import("@sinclair/typebox").TBoolean;
    process: import("@sinclair/typebox").TBoolean;
    container: import("@sinclair/typebox").TBoolean;
    js: import("@sinclair/typebox").TBoolean;
}>;
export declare const NapcatConfigSchema: import("@sinclair/typebox").TObject<{
    fileLog: import("@sinclair/typebox").TBoolean;
    consoleLog: import("@sinclair/typebox").TBoolean;
    fileLogLevel: import("@sinclair/typebox").TString;
    consoleLogLevel: import("@sinclair/typebox").TString;
    packetBackend: import("@sinclair/typebox").TString;
    packetServer: import("@sinclair/typebox").TString;
    o3HookMode: import("@sinclair/typebox").TNumber;
    bypass: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        hook: import("@sinclair/typebox").TBoolean;
        window: import("@sinclair/typebox").TBoolean;
        module: import("@sinclair/typebox").TBoolean;
        process: import("@sinclair/typebox").TBoolean;
        container: import("@sinclair/typebox").TBoolean;
        js: import("@sinclair/typebox").TBoolean;
    }>>;
}>;
export type NapcatConfig = Static<typeof NapcatConfigSchema>;
/**
 * 从指定配置目录读取 napcat.json，按 NapcatConfigSchema 校验并填充默认值
 * 用于登录前（无 NapCatCore 实例时）的早期配置读取
 */
export declare function loadNapcatConfig(configPath: string): NapcatConfig;
export declare class NapCatConfigLoader extends ConfigBase<NapcatConfig> {
    constructor(core: NapCatCore, configPath: string, schema: any);
}
