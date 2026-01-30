import { NapCatCore } from '../index';
export declare class PacketClientSession {
    private readonly context;
    constructor(core: NapCatCore);
    init(pid: number, recv: string, send: string): Promise<void>;
    get clientLogStack(): string;
    get available(): boolean;
    get operation(): import("./context/operationContext").PacketOperationContext;
    get msgConverter(): import("./message/converter").PacketMsgConverter;
}
