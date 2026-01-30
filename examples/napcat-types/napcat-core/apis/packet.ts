import { InstanceContext, NapCatCore } from '../index';
import { PacketClientSession } from '../packet/clientSession';
import { LogWrapper } from '../helper/log';
export declare class NTQQPacketApi {
    context: InstanceContext;
    core: NapCatCore;
    logger: LogWrapper;
    qqVersion: string | undefined;
    pkt: PacketClientSession;
    errStack: string[];
    packetStatus: boolean;
    constructor(context: InstanceContext, core: NapCatCore);
    initApi(): Promise<void>;
    get available(): boolean;
    get clientLogStack(): string;
    InitSendPacket(qqVer: string): Promise<boolean>;
}
