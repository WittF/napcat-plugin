import { LogWrapper } from './log';
interface ServerRkeyData {
    group_rkey: string;
    private_rkey: string;
    expired_time: number;
}
export declare class RkeyManager {
    serverUrl: string[];
    logger: LogWrapper;
    private rkeyData;
    private urlFailures;
    private readonly FAILURE_LIMIT;
    private readonly ONE_DAY;
    constructor(serverUrl: string[], logger: LogWrapper);
    getRkey(): Promise<ServerRkeyData>;
    private getAvailableUrls;
    private isUrlDisabled;
    private updateUrlFailure;
    isExpired(): boolean;
    refreshRkey(): Promise<void>;
}
export {};
