import { OidbPacket } from '../../packet/transformer/base';
import { PacketLogger } from '../../packet/context/loggerContext';
import { NapCoreContext } from '../../packet/context/napCoreContext';
export declare class LogStack {
    private stack;
    private readonly logger;
    constructor(logger: PacketLogger);
    push(msg: string): void;
    pushLogInfo(msg: string): void;
    pushLogWarn(msg: string): void;
    pushLogError(msg: string): void;
    clear(): void;
    content(): string;
}
export declare class PacketClientContext {
    private readonly napCore;
    private readonly logger;
    private readonly logStack;
    private readonly _client;
    constructor(napCore: NapCoreContext, logger: PacketLogger);
    get available(): boolean;
    get clientLogStack(): string;
    init(pid: number, recv: string, send: string): Promise<void>;
    sendOidbPacket<T extends boolean = false>(pkt: OidbPacket, rsp?: T, timeout?: number): Promise<T extends true ? Buffer : void>;
    private newClient;
}
