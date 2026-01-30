import { ActionMap } from '../../action';
import { NapCatCore } from '../../../napcat-core';
import { NapCatOneBot11Adapter } from '../../index';
import { OB11EmitEventContent, OB11NetworkReloadType } from '../../network/index';
import { IOB11NetworkAdapter } from '../../network/adapter';
import { PluginConfig } from '../../config/config';
import { NapCatConfig } from './config';
import { PluginRouterRegistryImpl } from './router-registry';
import { PluginEntry, PluginStatusConfig, IPluginManager } from './types';
export declare class OB11PluginManager extends IOB11NetworkAdapter<PluginConfig> implements IPluginManager {
    private readonly pluginPath;
    private readonly configPath;
    private readonly loader;
    /** 插件注册表: ID -> 插件条目 */
    private plugins;
    /** 插件路由注册表: pluginId -> PluginRouterRegistry */
    private pluginRouters;
    config: PluginConfig;
    NapCatConfig: typeof NapCatConfig;
    get isActive(): boolean;
    constructor(name: string, core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap);
    getPluginConfig(): PluginStatusConfig;
    private savePluginConfig;
    /**
     * 扫描并加载所有插件
     */
    private scanAndLoadPlugins;
    /**
     * 加载单个插件
     */
    private loadPlugin;
    /**
     * 卸载单个插件
     */
    private unloadPlugin;
    /**
     * 创建插件上下文
     */
    private createPluginContext;
    /**
     * 获取插件目录路径
     */
    getPluginPath(): string;
    /**
     * 获取所有插件条目
     */
    getAllPlugins(): PluginEntry[];
    /**
     * 获取已加载的插件列表
     */
    getLoadedPlugins(): PluginEntry[];
    /**
     * 通过 ID 获取插件信息
     */
    getPluginInfo(pluginId: string): PluginEntry | undefined;
    /**
     * 设置插件状态（启用/禁用）
     */
    setPluginStatus(pluginId: string, enable: boolean): Promise<void>;
    /**
     * 通过 ID 加载插件
     */
    loadPluginById(pluginId: string): Promise<boolean>;
    /**
     * 卸载插件（仅从内存卸载）
     */
    unregisterPlugin(pluginId: string): Promise<void>;
    /**
     * 卸载并删除插件
     */
    uninstallPlugin(pluginId: string, cleanData?: boolean): Promise<void>;
    /**
     * 重载指定插件
     */
    reloadPlugin(pluginId: string): Promise<boolean>;
    /**
     * 加载目录插件（用于新安装的插件）
     */
    loadDirectoryPlugin(dirname: string): Promise<void>;
    /**
     * 获取插件数据目录路径
     */
    getPluginDataPath(pluginId: string): string;
    /**
     * 获取插件配置文件路径
     */
    getPluginConfigPath(pluginId: string): string;
    /**
     * 获取插件路由注册器
     */
    getPluginRouter(pluginId: string): PluginRouterRegistryImpl | undefined;
    /**
     * 获取所有插件路由注册器
     */
    getAllPluginRouters(): Map<string, PluginRouterRegistryImpl>;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    /**
     * 调用插件的事件处理方法
     */
    private callPluginEventHandler;
    open(): Promise<void>;
    close(): Promise<void>;
    reload(): Promise<OB11NetworkReloadType>;
}
