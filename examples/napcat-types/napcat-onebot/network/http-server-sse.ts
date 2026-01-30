import { OB11EmitEventContent } from './index';
import { OB11HttpServerAdapter } from './http-server';
export declare class OB11HttpSSEServerAdapter extends OB11HttpServerAdapter {
    private sseClients;
    get isActive(): boolean;
    handleRequest(req: any, res: any): Promise<void>;
    private createSseSupport;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
}
