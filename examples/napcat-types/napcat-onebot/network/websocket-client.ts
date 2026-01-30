import { OB11EmitEventContent, OB11NetworkReloadType } from '../network/index';
import { NapCatCore } from '../../napcat-core';
import { WebsocketClientConfig } from '../config/config';
import { IOB11NetworkAdapter } from '../network/adapter';
export declare class OB11WebSocketClientAdapter extends IOB11NetworkAdapter<WebsocketClientConfig> {
    private connection;
    private heartbeatRef;
    get isActive(): boolean;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    open(): Promise<void>;
    close(): void;
    private checkStateAndReply;
    private tryConnect;
    connectEvent(core: NapCatCore): Promise<void>;
    private handleMessage;
    reload(newConfig: WebsocketClientConfig): Promise<OB11NetworkReloadType.Normal | OB11NetworkReloadType.NetWorkReload | OB11NetworkReloadType.NetWorkClose | OB11NetworkReloadType.NetWorkOpen>;
}
