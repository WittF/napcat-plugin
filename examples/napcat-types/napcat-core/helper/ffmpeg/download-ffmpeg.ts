import { LogWrapper } from '../../helper/log';
/**
 * 下载并设置FFmpeg
 * @param destDir 目标安装目录，默认为用户临时目录下的ffmpeg文件夹
 * @param tempDir 临时文件目录，默认为系统临时目录
 * @returns 返回ffmpeg可执行文件的路径，如果失败则返回null
 */
export declare function downloadFFmpeg(destDir?: string, tempDir?: string, progressCallback?: (percent: number, stage: string) => void): Promise<string | null>;
export declare function downloadFFmpegIfNotExists(log: LogWrapper): Promise<{
    path: null;
    reset: boolean;
} | {
    path: string;
    reset: boolean;
}>;
