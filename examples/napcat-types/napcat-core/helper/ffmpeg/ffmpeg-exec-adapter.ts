/**
 * FFmpeg Exec Adapter
 * 使用 execFile 调用 FFmpeg 命令行工具的适配器实现
 */
import { LogWrapper } from '../../helper/log';
import type { IFFmpegAdapter, VideoInfoResult } from './ffmpeg-adapter-interface';
/**
 * FFmpeg 命令行适配器实现
 */
export declare class FFmpegExecAdapter implements IFFmpegAdapter {
    private ffmpegPath;
    private ffprobePath;
    private binaryPath?;
    private logger?;
    readonly name = "FFmpegExec";
    private downloadAttempted;
    constructor(ffmpegPath?: string, ffprobePath?: string, binaryPath?: string | undefined, logger?: LogWrapper | undefined);
    /**
       * 检查 FFmpeg 是否可用，如果不可用则尝试下载
       */
    isAvailable(): Promise<boolean>;
    /**
       * 设置 FFmpeg 路径
       */
    setFFmpegPath(ffmpegPath: string): void;
    /**
       * 设置 FFprobe 路径
       */
    setFFprobePath(ffprobePath: string): void;
    /**
       * 获取视频信息
       */
    getVideoInfo(videoPath: string): Promise<VideoInfoResult>;
    /**
       * 获取时长
       */
    getDuration(filePath: string): Promise<number>;
    /**
     * 判断是否为 Silk 格式
     */
    isSilk(filePath: string): Promise<boolean>;
    /**
       * 转换为 PCM
       */
    convertToPCM(filePath: string, pcmPath: string): Promise<{
        result: boolean;
        sampleRate: number;
    }>;
    /**
       * 转换文件
       */
    convertFile(inputFile: string, outputFile: string, format: string): Promise<void>;
    /**
       * 提取缩略图
       */
    extractThumbnail(videoPath: string, thumbnailPath: string): Promise<void>;
    convertToNTSilkTct(_inputFile: string, _outputFile: string): Promise<void>;
}
