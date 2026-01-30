import { LogWrapper } from '../helper/log';
export declare function encodeSilk(filePath: string, TEMP_DIR: string, logger: LogWrapper): Promise<{
    converted: boolean;
    path: string;
    duration: number;
} | {
    converted?: undefined;
    path?: undefined;
    duration?: undefined;
}>;
