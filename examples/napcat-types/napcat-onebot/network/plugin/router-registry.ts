import { PluginRouterRegistry, PluginRequestHandler, PluginPageDefinition, HttpMethod } from './types';
/**
 * 插件路由注册器实现
 * 为每个插件创建独立的路由注册器，收集路由定义
 */
export declare class PluginRouterRegistryImpl implements PluginRouterRegistry {
    private readonly pluginId;
    private readonly pluginPath;
    private apiRoutes;
    private pageDefinitions;
    private staticRoutes;
    constructor(pluginId: string, pluginPath: string);
    api(method: HttpMethod, routePath: string, handler: PluginRequestHandler): void;
    get(routePath: string, handler: PluginRequestHandler): void;
    post(routePath: string, handler: PluginRequestHandler): void;
    put(routePath: string, handler: PluginRequestHandler): void;
    delete(routePath: string, handler: PluginRequestHandler): void;
    page(pageDef: PluginPageDefinition): void;
    pages(pageDefs: PluginPageDefinition[]): void;
    static(urlPath: string, localPath: string): void;
    /**
     * 构建 Express Router（用于 API 路由）
     */
    buildApiRouter(): Router;
    /**
     * 包装处理器，添加错误处理和请求/响应包装
     */
    private wrapHandler;
    /**
     * 检查是否有注册的 API 路由
     */
    hasApiRoutes(): boolean;
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
     * 清空路由（用于插件卸载）
     */
    clear(): void;
}
