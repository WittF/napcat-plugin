import { OneBotEvent } from '../event/OneBotEvent';
import { OB11Message } from '../index';
import { NetworkAdapterConfig } from '../config/config';
import { IOB11NetworkAdapter } from '../network/adapter';
export type OB11EmitEventContent = OneBotEvent | OB11Message;
export enum OB11NetworkReloadType {
    Normal = 0,
    ConfigChange = 1,
    NetWorkReload = 2,
    NetWorkClose = 3,
    NetWorkOpen = 4
}
export declare class OB11NetworkManager {
    adapters: Map<string, IOB11NetworkAdapter<NetworkAdapterConfig>>;
    openAllAdapters(): Promise<void[]>;
    emitEvent(event: OB11EmitEventContent): Promise<void[]>;
    emitEvents(events: OB11EmitEventContent[]): Promise<void[][]>;
    emitEventByName(names: string[], event: OB11EmitEventContent): Promise<void[]>;
    emitEventByNames(map: Map<string, OB11EmitEventContent>): Promise<void[]>;
    registerAdapter<CT extends NetworkAdapterConfig>(adapter: IOB11NetworkAdapter<CT>): void;
    registerAdapterAndOpen<CT extends NetworkAdapterConfig>(adapter: IOB11NetworkAdapter<CT>): Promise<void>;
    closeSomeAdapters<CT extends NetworkAdapterConfig>(adaptersToClose: IOB11NetworkAdapter<CT>[]): Promise<void>;
    closeSomeAdaterWhenOpen<CT extends NetworkAdapterConfig>(adaptersToClose: IOB11NetworkAdapter<CT>[]): Promise<void>;
    findSomeAdapter(name: string): IOB11NetworkAdapter<NetworkAdapterConfig> | undefined;
    closeAdapterByPredicate(closeFilter: (adapter: IOB11NetworkAdapter<NetworkAdapterConfig>) => boolean): Promise<void>;
    closeAllAdapters(): Promise<void>;
    readloadAdapter<T>(name: string, config: T): Promise<void>;
    readloadSomeAdapters<T>(configMap: Map<string, T>): Promise<void>;
    hasActiveAdapters(): boolean;
    getAllConfig(): Promise<NetworkAdapterConfig[]>;
}
export * from './http-client';
export * from './websocket-client';
export * from './http-server';
export * from './websocket-server';
