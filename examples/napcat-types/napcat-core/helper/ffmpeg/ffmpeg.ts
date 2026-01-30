import type { VideoInfo } from './video';
import { LogWrapper } from '../../helper/log';
export declare let FFMPEG_CMD: string;
export declare let FFPROBE_CMD: string;
export declare class FFmpegService {
    private static adapter;
    private static initialized;
    /**
       * 初始化 FFmpeg 服务
       * @param binaryPath 二进制文件路径(来自 pathWrapper.binaryPath)
       * @param logger 日志记录器
       */
    static init(binaryPath: string, logger: LogWrapper): Promise<void>;
    static getAdapterName(): string;
    /**
       * 获取 FFmpeg 适配器
       */
    private static getAdapter;
    static convertToNTSilkTct(inputFile: string, outputFile: string): Promise<void>;
    /**
       * 设置 FFmpeg 路径并更新适配器
       * @deprecated 建议使用 init() 方法初始化
       */
    static setFfmpegPath(ffmpegPath: string, logger: LogWrapper): Promise<void>;
    /**
       * 提取视频缩略图
       */
    static extractThumbnail(videoPath: string, thumbnailPath: string): Promise<void>;
    /**
       * 转换音频文件
       */
    static convertAudioFmt(inputFile: string, outputFile: string, format: string): Promise<void>;
    /**
     * 获取音频时长
     */
    static getDuration(filePath: string): Promise<number>;
    /**
     * 判断是否为 Silk 格式
     */
    static isSilk(filePath: string): Promise<boolean>;
    /**
       * 转换为 PCM 格式
       */
    static convert(filePath: string, pcmPath: string): Promise<{
        result: boolean;
        sampleRate: number;
    }>;
    /**
       * 获取视频信息
       */
    static getVideoInfo(videoPath: string, thumbnailPath: string): Promise<VideoInfo>;
}
