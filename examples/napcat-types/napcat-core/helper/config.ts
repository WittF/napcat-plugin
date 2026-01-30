import { ConfigBase } from '../helper/config-base';
import { NapCatCore } from '../index';
import { Static } from '@sinclair/typebox';
export declare const NapcatConfigSchema: import("@sinclair/typebox").TObject<{
    fileLog: import("@sinclair/typebox").TBoolean;
    consoleLog: import("@sinclair/typebox").TBoolean;
    fileLogLevel: import("@sinclair/typebox").TString;
    consoleLogLevel: import("@sinclair/typebox").TString;
    packetBackend: import("@sinclair/typebox").TString;
    packetServer: import("@sinclair/typebox").TString;
    o3HookMode: import("@sinclair/typebox").TNumber;
}>;
export type NapcatConfig = Static<typeof NapcatConfigSchema>;
export declare class NapCatConfigLoader extends ConfigBase<NapcatConfig> {
    constructor(core: NapCatCore, configPath: string, schema: any);
}
