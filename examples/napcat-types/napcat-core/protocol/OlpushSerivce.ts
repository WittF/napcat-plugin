import { ServiceBase } from '../packet/handler/serviceRegister';
export declare class OlPushService extends ServiceBase {
    handler(_seq: number, hex_data: string): Promise<void>;
}
