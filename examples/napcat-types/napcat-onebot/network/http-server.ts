import { OB11EmitEventContent, OB11NetworkReloadType } from './index';
import { HttpServerConfig } from '../config/config';
import { IOB11NetworkAdapter } from '../network/adapter';
export declare class OB11HttpServerAdapter extends IOB11NetworkAdapter<HttpServerConfig> {
    private app;
    private server;
    private wsServer?;
    private wsClients;
    private wsClientsMutex;
    private heartbeatIntervalId;
    private wsClientWithEvent;
    get isActive(): boolean;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    open(): void;
    close(): Promise<void>;
    private initializeServer;
    private authorize;
    createWSServer(newServer: any): void;
    connectEvent(core: any, wsClient: any): void;
    private startHeartbeat;
    private stopHeartbeat;
    private authorizeWS;
    private checkStateAndReply;
    private handleWSMessage;
    httpApiRequest(req: any, res: any, request_sse?: boolean): Promise<express.Response<any, Record<string, any>>>;
    handleRequest(req: any, res: any): Promise<void>;
    reload(newConfig: HttpServerConfig): Promise<OB11NetworkReloadType.Normal | OB11NetworkReloadType.NetWorkReload | OB11NetworkReloadType.NetWorkClose | OB11NetworkReloadType.NetWorkOpen>;
}
