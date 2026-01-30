/**
 * FFmpeg Native Addon Adapter
 * 使用原生 Node.js Addon 实现的 FFmpeg 适配器
 */
import type { IFFmpegAdapter, VideoInfoResult } from './ffmpeg-adapter-interface';
/**
 * FFmpeg Native Addon 适配器实现
 */
export declare class FFmpegAddonAdapter implements IFFmpegAdapter {
    readonly name = "FFmpegAddon";
    private addon;
    private binaryPath;
    constructor(binaryPath: string);
    /**
       * 检查 Addon 是否可用
       */
    isAvailable(): Promise<boolean>;
    private ensureAddon;
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
    convertToNTSilkTct(inputFile: string, outputFile: string): Promise<void>;
    /**
       * 提取缩略图
       */
    extractThumbnail(videoPath: string, thumbnailPath: string): Promise<void>;
}
