import { LogWrapper } from '../../helper/log';
export interface BypassOptions {
    hook?: boolean;
    window?: boolean;
    module?: boolean;
    process?: boolean;
    container?: boolean;
    js?: boolean;
}
export interface Napi2NativeExportType {
    initHook?: (send: string, recv: string) => boolean;
    setVerbose?: (verbose: boolean) => void;
    enableAllBypasses?: (options?: BypassOptions) => boolean;
}
export declare class Napi2NativeLoader {
    private readonly supportedPlatforms;
    private readonly exports;
    protected readonly logger: LogWrapper;
    private _loaded;
    constructor({ logger }: {
        logger: LogWrapper;
    });
    private load;
    get loaded(): boolean;
    get nativeExports(): Napi2NativeExportType;
    /**
     * 初始化 Hook
     * @param send send 偏移地址
     * @param recv recv 偏移地址
     * @returns 是否初始化成功
     */
    initHook(send: string, recv: string): boolean;
}
