import { NodeIKernelLoginListener } from '../listeners/NodeIKernelLoginListener';
import { GeneralCallResult } from './common';
export interface LoginInitConfig {
    machineId: '';
    appid: string;
    platVer: string;
    commonPath: string;
    clientVer: string;
    hostName: string;
}
export interface PasswordLoginRetType {
    result: string;
    loginErrorInfo: {
        step: number;
        errMsg: string;
        proofWaterUrl: string;
        newDevicePullQrCodeSig: string;
        jumpUrl: string;
        jumpWord: string;
        tipsTitle: string;
        tipsContent: string;
    };
}
export interface PasswordLoginArgType {
    uin: string;
    passwordMd5: string;
    step: number;
    newDeviceLoginSig: string;
    proofWaterSig: string;
    proofWaterRand: string;
    proofWaterSid: string;
}
export interface LoginListItem {
    uin: string;
    uid: string;
    nickName: string;
    faceUrl: string;
    facePath: string;
    loginType: 1;
    isQuickLogin: boolean;
    isAutoLogin: boolean;
}
export interface QuickLoginResult {
    result: string;
    loginErrorInfo: {
        step: number;
        errMsg: string;
        proofWaterUrl: string;
        newDevicePullQrCodeSig: string;
        jumpUrl: string;
        jumpWord: string;
        tipsTitle: string;
        tipsContent: string;
    };
}
export interface NodeIKernelLoginService {
    getMsfStatus: () => number;
    setLoginMiscData(arg0: string, value: string): unknown;
    getMachineGuid(): string;
    get(): NodeIKernelLoginService;
    connect(): boolean;
    addKernelLoginListener(listener: NodeIKernelLoginListener): number;
    removeKernelLoginListener(listener: number): void;
    initConfig(config: LoginInitConfig): void;
    getLoginMiscData(data: string): Promise<GeneralCallResult & {
        value: string;
    }>;
    getLoginList(): Promise<{
        result: number;
        LocalLoginInfoList: LoginListItem[];
    }>;
    quickLoginWithUin(uin: string): Promise<QuickLoginResult>;
    passwordLogin(param: PasswordLoginArgType): Promise<unknown>;
    getQRCodePicture(): boolean;
}
