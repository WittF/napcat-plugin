export declare const napCatVersion: string;
export interface SemVerInfo {
    valid: boolean;
    normalized: string;
    major: number;
    minor: number;
    patch: number;
    prerelease: string | null;
    buildmetadata: string | null;
}
/**
 * 解析并验证版本号是否符合 SemVer 2.0 规范
 * @param version - 版本字符串 (支持 v 前缀)
 * @returns SemVer 解析结果
 */
export declare function parseSemVer(version: string | undefined | null): SemVerInfo;
/**
 * 验证版本号是否符合 SemVer 2.0 规范
 * @param version - 版本字符串
 * @returns 是否有效
 */
export declare function isValidSemVer(version: string | undefined | null): boolean;
/**
 * 比较两个 SemVer 版本号
 * @param v1 - 版本号1
 * @param v2 - 版本号2
 * @returns -1 (v1 < v2), 0 (v1 == v2), 1 (v1 > v2)
 */
export declare function compareSemVer(v1: string, v2: string): -1 | 0 | 1;
/**
 * 获取解析后的当前版本信息
 */
export declare const napCatVersionInfo: SemVerInfo;
