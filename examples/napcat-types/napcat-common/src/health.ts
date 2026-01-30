export interface ResourceConfig<T extends any[], R> {
    /** 资源获取函数 */
    resourceFn: (...args: T) => Promise<R>;
    /** 失败后禁用时间（毫秒），默认 30 秒 */
    disableTime?: number;
    /** 最大重试次数，默认 3 次 */
    maxRetries?: number;
    /** 主动测试间隔（毫秒），默认 60 秒 */
    healthCheckInterval?: number;
    /** 最大健康检查失败次数，超过后永久禁用，默认 5 次 */
    maxHealthCheckFailures?: number;
    /** 健康检查函数，如果提供则优先使用此函数进行健康检查 */
    healthCheckFn?: (...args: T) => Promise<boolean>;
    /** 测试参数（用于健康检查） */
    testArgs?: T;
}
export declare class ResourceManager {
    private resourceTypes;
    private destroyed;
    /**
       * 调用资源（自动注册或复用已有配置）
       */
    callResource<T extends any[], R>(type: string, config: ResourceConfig<T, R>, ...args: T): Promise<R>;
    /**
       * 检查资源类型是否可用
       */
    isResourceAvailable(type: string): boolean;
    /**
       * 获取资源类型统计信息
       */
    getResourceStats(type: string): {
        successCount: number;
        failureCount: number;
        isEnabled: boolean;
        isPermanentlyDisabled: boolean;
    } | null;
    /**
       * 获取所有资源类型统计
       */
    getAllResourceStats(): Map<string, {
        successCount: number;
        failureCount: number;
        isEnabled: boolean;
        isPermanentlyDisabled: boolean;
    }>;
    /**
       * 注销资源类型
       */
    unregister(type: string): boolean;
    /**
       * 销毁管理器
       */
    destroy(): void;
    /**
       * 检查并执行健康检查（如果需要）
       */
    private checkAndPerformHealthCheck;
    private performHealthCheck;
    private onResourceSuccess;
    private onResourceFailure;
}
export declare const resourceManager: ResourceManager;
export declare function registerResource<T extends any[], R>(type: string, config: ResourceConfig<T, R>, ...args: T): Promise<R>;
