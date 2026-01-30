import 'reflect-metadata';
import { NapCatCore } from '../..';
import { TypedEventEmitter } from './typeEvent';
export declare const container: any;
export declare const ReceiverServiceRegistry: Map<string, new (...args: any[]) => ServiceBase>;
export declare abstract class ServiceBase {
    get core(): NapCatCore;
    get event(): TypedEventEmitter<Record<string, any>>;
    abstract handler(seq: number, hex_data: string): Promise<void> | void;
}
export declare function ReceiveService(serviceName: string): <T extends new (...args: any[]) => ServiceBase>(constructor: T) => T;
