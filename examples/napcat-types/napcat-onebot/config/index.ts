import { ConfigBase } from '../../napcat-core/helper/config-base';
import type { NapCatCore } from '../../napcat-core';
import { OneBotConfig } from './config';
export * from './config';
export declare class OB11ConfigLoader extends ConfigBase<OneBotConfig> {
    constructor(core: NapCatCore, configPath: string, schema: any);
}
