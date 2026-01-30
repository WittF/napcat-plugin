import { PacketHighwayContext } from '../../packet/highway/highwayContext';
import { NapCatCore } from '../../index';
import { PacketLogger } from '../../packet/context/loggerContext';
import { NapCoreContext } from '../../packet/context/napCoreContext';
import { PacketClientContext } from '../../packet/context/clientContext';
import { PacketOperationContext } from '../../packet/context/operationContext';
import { PacketMsgConverter } from '../../packet/message/converter';
export declare class PacketContext {
    readonly msgConverter: PacketMsgConverter;
    readonly napcore: NapCoreContext;
    readonly logger: PacketLogger;
    readonly client: PacketClientContext;
    readonly highway: PacketHighwayContext;
    readonly operation: PacketOperationContext;
    constructor(core: NapCatCore);
}
