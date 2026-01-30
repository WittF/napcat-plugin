import { LogStack } from '../../packet/context/clientContext';
import { NapCoreContext } from '../../packet/context/napCoreContext';
import { PacketLogger } from '../../packet/context/loggerContext';
import { OidbPacket, PacketBuf } from '../../packet/transformer/base';
export interface RecvPacket {
    type: string;
    data: RecvPacketData;
}
export interface RecvPacketData {
    seq: number;
    cmd: string;
    data: Buffer;
}
export interface NativePacketExportType {
    initHook?: (send: string, recv: string) => boolean;
}
export declare class NativePacketClient {
    protected readonly napcore: NapCoreContext;
    protected readonly logger: PacketLogger;
    protected readonly cb: Map<string, (json: RecvPacketData) => Promise<any> | any>;
    logStack: LogStack;
    available: boolean;
    private readonly supportedPlatforms;
    private readonly MoeHooExport;
    constructor(napCore: NapCoreContext, logger: PacketLogger, logStack: LogStack);
    check(): boolean;
    init(_pid: number, recv: string, send: string): Promise<void>;
    sendPacket(cmd: string, data: PacketBuf, rsp?: boolean, timeout?: number): Promise<RecvPacketData>;
    sendOidbPacket(pkt: OidbPacket, rsp?: boolean, timeout?: number): Promise<RecvPacketData>;
}
