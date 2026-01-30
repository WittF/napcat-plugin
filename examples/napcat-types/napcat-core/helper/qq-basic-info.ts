import { LogWrapper } from './log';
import { QQPackageInfoType, QQVersionConfigType } from '../../napcat-common/src/types';
export declare class QQBasicInfoWrapper {
    QQMainPath: string | undefined;
    QQPackageInfoPath: string | undefined;
    QQVersionConfigPath: string | undefined;
    isQuickUpdate: boolean | undefined;
    QQVersionConfig: QQVersionConfigType | undefined;
    QQPackageInfo: QQPackageInfoType | undefined;
    QQVersionAppid: string | undefined;
    QQVersionQua: string | undefined;
    context: {
        logger: LogWrapper;
    };
    constructor(context: {
        logger: LogWrapper;
    });
    getQQBuildStr(): string | undefined;
    getFullQQVersion(): string;
    requireMinNTQQBuild(buildStr: string): boolean;
    getQUAFallback(): string;
    getAppIdFallback(): string;
    getAppidV2(): {
        appid: string;
        qua: string;
    };
    getAppidV2ByMajor(QQVersion: string): string | undefined;
}
