import { NetworkAdapterConfig } from '../config/config';
import { LogWrapper } from '../../napcat-core/helper/log';
import { NapCatCore } from '../../napcat-core';
import { NapCatOneBot11Adapter } from '../index';
import { ActionMap } from '../action';
import { OB11EmitEventContent, OB11NetworkReloadType } from '../network/index';
export declare abstract class IOB11NetworkAdapter<CT extends NetworkAdapterConfig> {
    name: string;
    isEnable: boolean;
    config: CT;
    readonly logger: LogWrapper;
    readonly core: NapCatCore;
    readonly obContext: NapCatOneBot11Adapter;
    readonly actions: ActionMap;
    constructor(name: string, config: CT, core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap);
    abstract onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    abstract open(): void | Promise<void>;
    abstract close(): void | Promise<void>;
    abstract reload(config: unknown): OB11NetworkReloadType | Promise<OB11NetworkReloadType>;
    get isActive(): boolean;
}
