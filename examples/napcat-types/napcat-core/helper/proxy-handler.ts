import { LogWrapper } from '../helper/log';
export declare function proxyHandlerOf(logger: LogWrapper): {
    get(target: any, prop: any, receiver: any): any;
};
export declare function proxiedListenerOf<T extends object>(listener: T, logger: LogWrapper): T;
