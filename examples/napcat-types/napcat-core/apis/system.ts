import { InstanceContext, NapCatCore } from '../index';
export declare class NTQQSystemApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    hasOtherRunningQQProcess(): Promise<boolean>;
    ocrImage(filePath: string): Promise<import("../index").GeneralCallResult>;
    translateEnWordToZn(words: string[]): Promise<import("../index").GeneralCallResult & {
        words: string[];
    }>;
    getOnlineDev(): Promise<void>;
    getArkJsonCollection(): Promise<unknown>;
    bootMiniApp(appFile: string, params: string): Promise<unknown>;
}
