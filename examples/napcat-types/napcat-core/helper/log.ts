import { RawMessage, SelfInfo } from '../index';
import { ILogWrapper } from '../../napcat-common/src/log-interface';
export enum LogLevel {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error",
    FATAL = "fatal"
}
export type LogListener = (msg: string) => void;
declare class Subscription {
    static MAX_HISTORY: number;
    static history: string[];
    subscribe(listener: LogListener): void;
    unsubscribe(listener: LogListener): void;
    notify(msg: string): void;
}
export declare const logSubscription: Subscription;
export declare class LogWrapper implements ILogWrapper {
    fileLogEnabled: boolean;
    consoleLogEnabled: boolean;
    logger: any;
    constructor(logDir: string);
    cleanOldLogs(logDir: string): void;
    private deleteOldLogFile;
    setFileAndConsoleLogLevel(fileLogLevel: LogLevel, consoleLogLevel: LogLevel): void;
    setLogSelfInfo(selfInfo: {
        nick: string;
        uid: string;
    }): void;
    setFileLogEnabled(isEnabled: boolean): void;
    setConsoleLogEnabled(isEnabled: boolean): void;
    formatMsg(msg: any[]): string;
    _log(level: LogLevel, ...args: any[]): void;
    log(...args: any[]): void;
    logDebug(...args: any[]): void;
    logError(...args: any[]): void;
    logWarn(...args: any[]): void;
    logFatal(...args: any[]): void;
    logMessage(msg: RawMessage, selfInfo: SelfInfo): void;
}
export declare function rawMessageToText(msg: RawMessage, recursiveLevel?: number): string;
export {};
