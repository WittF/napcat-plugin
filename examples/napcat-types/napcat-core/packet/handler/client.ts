import { LogWrapper } from '../../helper/log';
export interface NativePacketExportType {
    initHook?: (send: string, recv: string, callback: (type: PacketType, uin: string, cmd: string, seq: number, hex_data: string) => void, o3_hook: boolean) => boolean;
}
export type PacketType = 0 | 1;
export type PacketCallback = (data: {
    type: PacketType;
    uin: string;
    cmd: string;
    seq: number;
    hex_data: string;
}) => void;
export declare class NativePacketHandler {
    private readonly supportedPlatforms;
    private readonly MoeHooExport;
    protected readonly logger: LogWrapper;
    private loaded;
    private readonly listeners;
    constructor({ logger }: {
        logger: LogWrapper;
    });
    /**
       * 添加监听器的通用方法
       */
    private addListener;
    /**
       * 移除监听器的通用方法
       */
    private removeListener;
    /** 监听所有数据包 */
    onAll(callback: PacketCallback): () => void;
    /** 监听特定类型的数据包 (0: send, 1: recv) */
    onType(type: PacketType, callback: PacketCallback): () => void;
    /** 监听所有发送的数据包 */
    onSend(callback: PacketCallback): () => void;
    /** 监听所有接收的数据包 */
    onRecv(callback: PacketCallback): () => void;
    /** 监听特定cmd的数据包(不限type) */
    onCmd(cmd: string, callback: PacketCallback): () => void;
    /** 监听特定type和cmd的数据包(精确匹配) */
    onExact(type: PacketType, cmd: string, callback: PacketCallback): () => void;
    /** 一次性监听所有数据包 */
    onceAll(callback: PacketCallback): () => void;
    /** 一次性监听特定类型的数据包 */
    onceType(type: PacketType, callback: PacketCallback): () => void;
    /** 一次性监听所有发送的数据包 */
    onceSend(callback: PacketCallback): () => void;
    /** 一次性监听所有接收的数据包 */
    onceRecv(callback: PacketCallback): () => void;
    /** 一次性监听特定cmd的数据包 */
    onceCmd(cmd: string, callback: PacketCallback): () => void;
    /** 一次性监听特定type和cmd的数据包 */
    onceExact(type: PacketType, cmd: string, callback: PacketCallback): () => void;
    /** 移除特定的全局监听器 */
    off(key: string, callback: PacketCallback): boolean;
    /** 移除特定key下的所有监听器 */
    offAll(key: string): void;
    /** 移除所有监听器 */
    removeAllListeners(): void;
    /**
       * 触发监听器 - 按优先级触发: 精确匹配 > cmd匹配 > type匹配 > 全局
       */
    private emitPacket;
    init(version: string): Promise<boolean>;
}
