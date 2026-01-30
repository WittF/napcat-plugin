import type { NapCatCore } from '../../napcat-core';
export declare abstract class ConfigBase<T> {
    name: string;
    core: NapCatCore;
    configPath: string;
    configData: T;
    ajv: any;
    validate: any;
    protected constructor(name: string, core: NapCatCore, configPath: string, ConfigSchema: any);
    getConfigPath(pathName?: string): string;
    read(): T;
    private loadConfig;
    save(newConfigData?: T): void;
    private handleError;
}
