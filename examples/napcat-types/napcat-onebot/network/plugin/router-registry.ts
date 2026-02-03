import { PluginRouterRegistry, PluginRequestHandler, PluginPageDefinition, HttpMethod, MemoryStaticFile } from './types';
/**
 * 插件路由注册器实现
 * 为每个插件创建独立的路由注册器，收集路由定义
 */
/** 内存静态路由定义 */
interface MemoryStaticRoute {
    urlPath: string;
    files: MemoryStaticFile[];
}
export declare class PluginRouterRegistryImpl implements PluginRouterRegistry {
    private readonly pluginId;
    private readonly pluginPath;
    private apiRoutes;
    private apiNoAuthRoutes;
    private pageDefinitions;
    private staticRoutes;
    private memoryStaticRoutes;
    constructor(pluginId: string, pluginPath: string);
    api(method: HttpMethod, routePath: string, handler: PluginRequestHandler): void;
    get(routePath: string, handler: PluginRequestHandler): void;
    post(routePath: string, handler: PluginRequestHandler): void;
    put(routePath: string, handler: PluginRequestHandler): void;
    delete(routePath: string, handler: PluginRequestHandler): void;
    apiNoAuth(method: HttpMethod, routePath: string, handler: PluginRequestHandler): void;
    getNoAuth(routePath: string, handler: PluginRequestHandler): void;
    postNoAuth(routePath: string, handler: PluginRequestHandler): void;
    putNoAuth(routePath: string, handler: PluginRequestHandler): void;
    deleteNoAuth(routePath: string, handler: PluginRequestHandler): void;
    page(pageDef: PluginPageDefinition): void;
    pages(pageDefs: PluginPageDefinition[]): void;
    static(urlPath: string, localPath: string): void;
    staticOnMem(urlPath: string, files: MemoryStaticFile[]): void;
    /**
     * 构建 Express Router（用于 API 路由）
     * 注意：静态资源路由不在此处挂载，由 webui-backend 直接在不需要鉴权的路径下处理
     */
    buildApiRouter(): Router;
    /**
     * 包装处理器，添加错误处理和请求/响应包装
     */
    private wrapHandler;
    /**
     * 检查是否有注册的 API 路由（需要认证）
     */
    hasApiRoutes(): boolean;
    /**
     * 检查是否有注册的无认证 API 路由
     */
    hasApiNoAuthRoutes(): boolean;
    /**
     * 构建无认证 Express Router（用于 /plugin/{pluginId}/api/ 路径）
     */
    buildApiNoAuthRouter(): Router;
    /**
     * 检查是否有注册的静态资源路由
     */
    hasStaticRoutes(): boolean;
    /**
     * 检查是否有注册的页面
     */
    hasPages(): boolean;
    /**
     * 获取所有注册的页面定义
     */
    getPages(): PluginPageDefinition[];
    /**
     * 获取插件 ID
     */
    getPluginId(): string;
    /**
     * 获取插件路径
     */
    getPluginPath(): string;
    /**
     * 获取所有注册的静态路由
     */
    getStaticRoutes(): Array<{
        urlPath: string;
        localPath: string;
    }>;
    /**
     * 获取所有注册的内存静态路由
     */
    getMemoryStaticRoutes(): MemoryStaticRoute[];
    /**
     * 清空路由（用于插件卸载）
     */
    clear(): void;
}
export {};
