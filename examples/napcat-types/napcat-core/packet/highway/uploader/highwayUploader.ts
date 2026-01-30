import { PacketHighwayTrans } from '../../../packet/highway/client';
import { PacketLogger } from '../../../packet/context/loggerContext';
export declare abstract class IHighwayUploader {
    readonly trans: PacketHighwayTrans;
    readonly logger: PacketLogger;
    constructor(trans: PacketHighwayTrans, logger: PacketLogger);
    protected timeout(): Promise<void>;
    buildPicUpHead(offset: number, bodyLength: number, bodyMd5: Uint8Array): Uint8Array;
    abstract upload(): Promise<void>;
}
