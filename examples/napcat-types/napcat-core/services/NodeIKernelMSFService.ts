import { GeneralCallResult } from './common';
declare enum ProxyType {
    CLOSE = 0,
    HTTP = 1,
    SOCKET = 2
}
export interface NodeIKernelMSFService {
    getServerTime(): string;
    getMsfStatus(): number;
    online(): unknown;
    offline(): unknown;
    setNetworkProxy(param: {
        userName: string;
        userPwd: string;
        address: string;
        port: number;
        proxyType: ProxyType;
        domain: string;
        isSocket: boolean;
    }): Promise<GeneralCallResult>;
    getNetworkProxy(): Promise<{
        userName: string;
        userPwd: string;
        address: string;
        port: number;
        proxyType: ProxyType;
        domain: string;
        isSocket: boolean;
    }>;
    sendMsfRequest(seq: string, cmd: string, reqData: Uint8Array, option: {
        sendTimeout: number;
        sendTimeoutOnSlowNet: number;
        resendNum: number;
        sendOptions: number;
        reqTargetAccountType: number;
        account: string;
        accountType: number;
        transInfoMap: Map<string, unknown>;
    }): Promise<Buffer>;
    onMsfPushForTesting(arg1: unknown, arg2: unknown): unknown;
}
export {};
