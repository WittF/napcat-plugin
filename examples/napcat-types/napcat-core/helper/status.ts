import EventEmitter from 'node:events';
import { IStatusHelperSubscription } from '../../napcat-common/src/status-interface';
export interface SystemStatus {
    cpu: {
        model: string;
        speed: string;
        usage: {
            system: string;
            qq: string;
        };
        core: number;
    };
    memory: {
        total: string;
        usage: {
            system: string;
            qq: string;
        };
    };
    arch: string;
}
export declare class StatusHelper {
    private psCpuUsage;
    private psCurrentTime;
    private cpuTimes;
    private replaceNaN;
    private sysCpuInfo;
    private sysMemoryUsage;
    private qqUsage;
    systemStatus(): SystemStatus;
}
declare class StatusHelperSubscription extends EventEmitter implements IStatusHelperSubscription {
    private statusHelper;
    private interval;
    constructor(time?: number);
    private startInterval;
    private stopInterval;
}
export declare const statusHelperSubscription: StatusHelperSubscription;
export {};
