export declare class NodeIKernelLoginListener {
    onLoginConnected(): Promise<void> | void;
    onLoginDisConnected(..._args: any[]): any;
    onLoginConnecting(..._args: any[]): any;
    onQRCodeGetPicture(_arg: {
        pngBase64QrcodeData: string;
        qrcodeUrl: string;
    }): any;
    onQRCodeLoginPollingStarted(..._args: any[]): any;
    onQRCodeSessionUserScaned(..._args: any[]): any;
    onQRCodeLoginSucceed(_arg: QRCodeLoginSucceedResult): any;
    onQRCodeSessionFailed(..._args: any[]): any;
    onLoginFailed(..._args: any[]): any;
    onLogoutSucceed(..._args: any[]): any;
    onLogoutFailed(..._args: any[]): any;
    onUserLoggedIn(..._args: any[]): any;
    onQRCodeSessionQuickLoginFailed(..._args: any[]): any;
    onPasswordLoginFailed(..._args: any[]): any;
    OnConfirmUnusualDeviceFailed(..._args: any[]): any;
    onQQLoginNumLimited(..._args: any[]): any;
    onLoginState(..._args: any[]): any;
    onLoginRecordUpdate(..._args: any[]): any;
}
export interface QRCodeLoginSucceedResult {
    account: string;
    mainAccount: string;
    uin: string;
    uid: string;
    nickName: string;
    gender: number;
    age: number;
    faceUrl: string;
}
