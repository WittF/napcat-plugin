import { NapCatCore } from '../../index';
export interface NapCoreCompatBasicInfo {
    readonly requireMinNTQQBuild: (buildVer: string) => boolean;
    readonly uin: number;
    readonly uid: string;
    readonly uin2uid: (uin: number) => Promise<string>;
    readonly uid2uin: (uid: string) => Promise<number>;
    readonly sendSsoCmdReqByContend: (cmd: string, trace_id: string) => Promise<void>;
}
export declare class NapCoreContext {
    private readonly core;
    constructor(core: NapCatCore);
    get logger(): import("../../index").LogWrapper;
    get basicInfo(): NapCoreCompatBasicInfo;
    get config(): {
        fileLog: boolean;
        consoleLog: boolean;
        fileLogLevel: string;
        consoleLogLevel: string;
        packetBackend: string;
        packetServer: string;
        o3HookMode: number;
    };
    sendSsoCmdReqByContend: (cmd: string, data: Buffer) => Promise<unknown>;
}
