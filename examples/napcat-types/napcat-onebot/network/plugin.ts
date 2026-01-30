import { OB11EmitEventContent, OB11NetworkReloadType } from './index';
import { NapCatOneBot11Adapter, OB11Message } from '../index';
import { NapCatCore } from '../../napcat-core';
import { PluginConfig } from '../config/config';
import { ActionMap } from '../action';
import { IOB11NetworkAdapter } from '../network/adapter';
export interface PluginPackageJson {
    name?: string;
    plugin?: string;
    version?: string;
    main?: string;
}
export interface PluginModule<T extends OB11EmitEventContent = OB11EmitEventContent> {
    plugin_init: (core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap, instance: OB11PluginAdapter) => void | Promise<void>;
    plugin_onmessage?: (adapter: string, core: NapCatCore, obCtx: NapCatOneBot11Adapter, event: OB11Message, actions: ActionMap, instance: OB11PluginAdapter) => void | Promise<void>;
    plugin_onevent?: (adapter: string, core: NapCatCore, obCtx: NapCatOneBot11Adapter, event: T, actions: ActionMap, instance: OB11PluginAdapter) => void | Promise<void>;
    plugin_cleanup?: (core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap, instance: OB11PluginAdapter) => void | Promise<void>;
}
export interface LoadedPlugin {
    name: string;
    version?: string;
    pluginPath: string;
    entryPath: string;
    packageJson?: PluginPackageJson;
    module: PluginModule;
}
export declare class OB11PluginAdapter extends IOB11NetworkAdapter<PluginConfig> {
    private readonly pluginPath;
    private loadedPlugins;
    config: PluginConfig;
    get isActive(): boolean;
    constructor(name: string, core: NapCatCore, obContext: NapCatOneBot11Adapter, actions: ActionMap);
    /**
       * 扫描并加载插件
       */
    private loadPlugins;
    /**
       * 加载单文件插件 (.mjs, .js)
       */
    private loadFilePlugin;
    /**
       * 加载目录插件
       */
    private loadDirectoryPlugin;
    /**
       * 查找插件目录的入口文件
       */
    private findEntryFile;
    /**
       * 检查是否为支持的文件类型
       */
    private isSupportedFile;
    /**
       * 动态导入模块
       */
    private importModule;
    /**
       * 检查模块是否为有效的插件模块
       */
    private isValidPluginModule;
    /**
       * 注册插件
       */
    private registerPlugin;
    /**
       * 卸载插件
       */
    private unloadPlugin;
    onEvent<T extends OB11EmitEventContent>(event: T): Promise<void>;
    /**
       * 调用插件的事件处理方法
       */
    private callPluginEventHandler;
    open(): Promise<void>;
    close(): Promise<void>;
    reload(): Promise<OB11NetworkReloadType>;
    /**
       * 获取已加载的插件列表
       */
    getLoadedPlugins(): LoadedPlugin[];
    /**
       * 获取插件信息
       */
    getPluginInfo(pluginName: string): LoadedPlugin | undefined;
    /**
       * 重载指定插件
       */
    reloadPlugin(pluginName: string): Promise<boolean>;
}
