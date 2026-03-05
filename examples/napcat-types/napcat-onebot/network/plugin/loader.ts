import { LogWrapper } from '../../../napcat-core/helper/log';
import { PluginModule, PluginEntry, PluginStatusConfig } from './types';
/**
 * 插件加载器
 * 负责扫描、加载和导入插件模块
 */
export declare class PluginLoader {
    private readonly pluginPath;
    private readonly configPath;
    private readonly logger;
    constructor(pluginPath: string, configPath: string, logger: LogWrapper);
    /**
     * 加载插件状态配置
     */
    loadPluginStatusConfig(): PluginStatusConfig;
    /**
     * 保存插件状态配置
     */
    savePluginStatusConfig(config: PluginStatusConfig): void;
    /**
     * 扫描插件目录，收集所有有效插件条目（异步版本，验证模块有效性）
     * 只有包含有效 plugin_init 函数的插件才会被收集
     */
    scanPlugins(): Promise<PluginEntry[]>;
    /**
     * 扫描单个目录插件
     */
    private scanDirectoryPlugin;
    /**
     * 查找插件目录的入口文件
     */
    private findEntryFile;
    /**
     * 动态导入模块
     */
    importModule(filePath: string): Promise<any>;
    /**
     * 加载插件模块
     */
    loadPluginModule(entry: PluginEntry): Promise<PluginModule | null>;
    /**
     * 检查模块是否为有效的插件模块
     */
    isValidPluginModule(module: any): module is PluginModule;
    /**
     * 验证插件入口文件是否包含有效的 plugin_init 函数
     * 用于扫描阶段快速验证
     */
    validatePluginEntry(entryPath: string): Promise<{
        valid: boolean;
        error?: string;
    }>;
    /**
     * 重新扫描单个插件
     */
    rescanPlugin(dirname: string): PluginEntry | null;
    /**
     * 通过 ID 查找插件目录名
     */
    findPluginDirById(pluginId: string): string | null;
    /**
     * 清除插件文件的 require 缓存
     * 用于确保卸载插件时清理 CJS 模块缓存
     */
    clearCache(pluginPath: string): void;
}
