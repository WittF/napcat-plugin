import { OB11EmitEventContent, OB11NetworkReloadType } from '../network/index';
import { HttpClientConfig } from '../config/config';
import { IOB11NetworkAdapter } from '../network/adapter';
export declare class OB11HttpClientAdapter extends IOB11NetworkAdapter<HttpClientConfig> {
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    emitEventAsync<T extends OB11EmitEventContent>(event: T): Promise<void>;
    open(): void;
    close(): void;
    reload(newConfig: HttpClientConfig): Promise<OB11NetworkReloadType.Normal | OB11NetworkReloadType.NetWorkReload | OB11NetworkReloadType.NetWorkClose | OB11NetworkReloadType.NetWorkOpen>;
}
