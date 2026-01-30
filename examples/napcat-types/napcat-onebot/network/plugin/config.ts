import { PluginConfigItem, PluginConfigSchema } from './types';
/**
 * NapCat 插件配置构建器
 * 提供便捷的配置项创建方法
 */
export declare class NapCatConfig {
    static text(key: string, label: string, defaultValue?: string, description?: string, reactive?: boolean): PluginConfigItem;
    static number(key: string, label: string, defaultValue?: number, description?: string, reactive?: boolean): PluginConfigItem;
    static boolean(key: string, label: string, defaultValue?: boolean, description?: string, reactive?: boolean): PluginConfigItem;
    static select(key: string, label: string, options: {
        label: string;
        value: string | number;
    }[], defaultValue?: string | number, description?: string, reactive?: boolean): PluginConfigItem;
    static multiSelect(key: string, label: string, options: {
        label: string;
        value: string | number;
    }[], defaultValue?: (string | number)[], description?: string, reactive?: boolean): PluginConfigItem;
    static html(content: string): PluginConfigItem;
    static plainText(content: string): PluginConfigItem;
    static combine(...items: PluginConfigItem[]): PluginConfigSchema;
}
