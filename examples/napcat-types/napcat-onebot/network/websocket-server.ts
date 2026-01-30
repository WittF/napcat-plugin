import { OB11EmitEventContent, OB11NetworkReloadType } from './index';
import { NapCatCore } from '../../napcat-core';
import { ActionMap } from '../action';
import { WebsocketServerConfig } from '../config/config';
import { NapCatOneBot11Adapter } from '../index';
import { IOB11NetworkAdapter } from '../network/adapter';
export declare class OB11WebSocketServerAdapter extends IOB11NetworkAdapter<WebsocketServerConfig> {
    wsServer?: any;
    wsClients: any[];
    wsClientsMutex: any;
    private heartbeatIntervalId;
    wsClientWithEvent: any[];
    get isActive(): boolean;
    constructor(name: string, config: WebsocketServerConfig, core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap);
    createServer(newServer: any): void;
    connectEvent(core: NapCatCore, wsClient: any): void;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    open(): void;
    close(): Promise<void>;
    private startHeartbeat;
    private stopHeartbeat;
    private authorize;
    private checkStateAndReply;
    private handleMessage;
    reload(newConfig: WebsocketServerConfig): Promise<OB11NetworkReloadType.Normal | OB11NetworkReloadType.NetWorkReload | OB11NetworkReloadType.NetWorkClose | OB11NetworkReloadType.NetWorkOpen>;
}
