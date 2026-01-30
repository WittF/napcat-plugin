/**
 * GitHub 镜像配置模块
 * 提供统一的镜像源管理，支持复杂网络环境
 *
 * 镜像源测试时间: 2026-01-03
 * 测试通过: 55/61 完全可用
 */
/**
 * GitHub 文件加速镜像
 * 用于加速 release assets 下载
 * 按延迟排序，优先使用快速镜像
 *
 * 测试时间: 2026-01-03
 * 镜像支持 301/302 重定向
 * 懒加载测速：首次使用时自动测速，缓存 30 分钟
 */
export declare const GITHUB_FILE_MIRRORS: string[];
/**
 * GitHub API 镜像
 * 用于访问 GitHub API（作为备选方案）
 * 注：优先使用非 API 方法，减少对 API 的依赖
 *
 * 经测试，大部分代理镜像不支持 API 转发
 * 建议使用 getLatestReleaseTag 等方法避免 API 调用
 */
export declare const GITHUB_API_MIRRORS: string[];
/**
 * GitHub Raw 镜像
 * 用于访问 raw.githubusercontent.com
 * 注：大多数通用代理也支持 raw 文件加速
 */
export declare const GITHUB_RAW_MIRRORS: string[];
/**
 * Nightly.link 镜像
 * 用于访问 GitHub Actions artifacts
 * 优先使用官方服务，出现问题时可切换镜像
 */
export declare const NIGHTLY_LINK_MIRRORS: string[];
export interface MirrorConfig {
    /** 文件下载镜像（用于 release assets） */
    fileMirrors: string[];
    /** API 镜像 */
    apiMirrors: string[];
    /** Raw 文件镜像 */
    rawMirrors: string[];
    /** Nightly.link 镜像（用于 Actions artifacts） */
    nightlyLinkMirrors: string[];
    /** 超时时间（毫秒） */
    timeout: number;
    /** 是否启用镜像 */
    enabled: boolean;
    /** 自定义镜像（优先使用） */
    customMirror?: string;
}
/**
 * 懒加载获取快速镜像列表
 * 第一次调用时会进行测速，后续使用缓存
 */
export declare function getFastMirrors(forceRefresh?: boolean): Promise<string[]>;
/**
 * 清除镜像缓存，强制下次重新测速
 */
export declare function clearMirrorCache(): void;
/**
 * 获取缓存状态
 */
export declare function getMirrorCacheStatus(): {
    cached: boolean;
    count: number;
    age: number;
};
/**
 * 获取当前镜像配置
 */
export declare function getMirrorConfig(): MirrorConfig;
/**
 * 更新镜像配置
 */
export declare function setMirrorConfig(config: Partial<MirrorConfig>): void;
/**
 * 重置为默认配置
 */
export declare function resetMirrorConfig(): void;
/**
 * 设置自定义镜像（优先级最高）
 */
export declare function setCustomMirror(mirror: string): void;
/**
 * 构建镜像 URL
 * @param originalUrl 原始 URL
 * @param mirror 镜像前缀
 */
export declare function buildMirrorUrl(originalUrl: string, mirror: string): string;
/**
 * 测试 URL 是否可用（HTTP GET）
 * @param url 要测试的 URL
 * @param timeout 超时时间
 */
export declare function testUrl(url: string, timeout?: number): Promise<boolean>;
/**
 * 测试 URL 是否可用（HTTP HEAD，更快）
 * 验证：状态码、Content-Type、Content-Length
 */
export declare function testUrlHead(url: string, timeout?: number): Promise<boolean>;
/**
 * 详细验证 URL 响应
 * 返回验证结果和详细信息
 */
export interface UrlValidationResult {
    valid: boolean;
    statusCode?: number;
    contentType?: string;
    contentLength?: number;
    error?: string;
}
export declare function validateUrl(url: string, timeout?: number): Promise<UrlValidationResult>;
/**
 * 查找可用的下载 URL
 * 使用懒加载的快速镜像列表
 * @param originalUrl 原始 GitHub URL
 * @param options 选项
 */
export declare function findAvailableDownloadUrl(originalUrl: string, options?: {
    mirrors?: string[];
    timeout?: number;
    customMirror?: string;
    testMethod?: 'head' | 'get';
    /** 是否使用详细验证（验证 Content-Type 和 Content-Length） */
    validateContent?: boolean;
    /** 期望的最小文件大小（字节），用于验证 */
    minFileSize?: number;
    /** 是否使用懒加载的快速镜像列表 */
    useFastMirrors?: boolean;
}): Promise<string>;
/**
 * 从 tags 列表中获取最新的 release tag
 * 不依赖 GitHub API
 */
export declare function getLatestReleaseTag(owner: string, repo: string, mirror?: string): Promise<string>;
/**
 * 直接构建 GitHub release 下载 URL
 * 不需要调用 API，直接基于 tag 和 asset 名称构建
 */
export declare function buildReleaseDownloadUrl(owner: string, repo: string, tag: string, assetName: string): string;
/**
 * 获取 GitHub release 信息（优先使用非 API 方法）
 *
 * 策略：
 * 1. 先通过 git refs 获取 tags
 * 2. 直接构建下载 URL，不依赖 API
 * 3. 仅当需要 changelog 时才使用 API
 */
export declare function getGitHubRelease(owner: string, repo: string, tag?: string, options?: {
    /** 需要获取的 asset 名称列表 */
    assetNames?: string[];
    /** 是否需要获取 changelog（需要调用 API） */
    fetchChangelog?: boolean;
    /** 指定镜像 */
    mirror?: string;
}): Promise<{
    tag_name: string;
    assets: Array<{
        name: string;
        browser_download_url: string;
    }>;
    body?: string;
}>;
/**
 * 获取所有 GitHub tags（带缓存）
 * 优化：并行请求多个镜像，使用第一个成功返回的结果
 */
export declare function getAllGitHubTags(owner: string, repo: string, mirror?: string): Promise<{
    tags: string[];
    mirror: string;
}>;
export interface ActionArtifact {
    id: number;
    name: string;
    size_in_bytes: number;
    created_at: string;
    expires_at: string;
    archive_download_url: string;
    workflow_run_id?: number;
    head_sha?: string;
    workflow_title?: string;
}
/**
 * 清除 artifacts 缓存
 */
export declare function clearArtifactsCache(): void;
/**
 * 获取 GitHub Action 最新运行的 artifacts
 * 用于下载 nightly/dev 版本
 *
 * 策略：
 * 1. 检查缓存（10分钟有效）
 * 2. 优先尝试从 nightly.link 获取（无需认证，更稳定）
 * 3. 这里的实现已经完全移除了对 GitHub API 的依赖，直接解析 HTML
 */
export declare function getLatestActionArtifacts(owner: string, repo: string, workflow?: string, branch?: string, maxRuns?: number, mirror?: string): Promise<{
    artifacts: ActionArtifact[];
    mirror: string;
}>;
