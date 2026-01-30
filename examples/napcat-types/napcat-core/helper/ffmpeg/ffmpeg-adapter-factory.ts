/**
 * FFmpeg Adapter Factory
 * 自动检测并选择最佳的 FFmpeg 适配器
 */
import { LogWrapper } from '../../helper/log';
import type { IFFmpegAdapter } from './ffmpeg-adapter-interface';
/**
 * FFmpeg 适配器工厂
 */
export declare class FFmpegAdapterFactory {
    private static instance;
    private static initPromise;
    /**
       * 初始化并获取最佳的 FFmpeg 适配器
       * @param logger 日志记录器
       * @param ffmpegPath FFmpeg 可执行文件路径(用于 Exec 适配器)
       * @param ffprobePath FFprobe 可执行文件路径(用于 Exec 适配器)
       * @param binaryPath 二进制文件路径(来自 pathWrapper.binaryPath,用于 Addon 适配器)
       */
    static getAdapter(logger: LogWrapper, ffmpegPath?: string, ffprobePath?: string, binaryPath?: string): Promise<IFFmpegAdapter>;
    /**
       * 初始化适配器
       */
    private static initialize;
    /**
       * 重置适配器(用于测试或重新初始化)
       */
    static reset(): void;
    /**
       * 更新 FFmpeg 路径并重新初始化
       * @param logger 日志记录器
       * @param ffmpegPath FFmpeg 可执行文件路径
       * @param ffprobePath FFprobe 可执行文件路径
       */
    static updateFFmpegPath(logger: LogWrapper, ffmpegPath: string, ffprobePath: string): Promise<void>;
    /**
       * 获取当前适配器(不初始化)
       */
    static getCurrentAdapter(): IFFmpegAdapter | null;
}
