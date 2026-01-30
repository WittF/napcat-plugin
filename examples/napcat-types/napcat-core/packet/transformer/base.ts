import { PacketMsgBuilder } from '../../packet/message/builder';
export type PacketBuf = Buffer & {
    readonly hexNya: unique symbol;
};
export declare const PacketBufBuilder: (str: Uint8Array) => PacketBuf;
export interface OidbPacket {
    cmd: string;
    data: PacketBuf;
}
export declare abstract class PacketTransformer<T> {
    protected msgBuilder: PacketMsgBuilder;
    constructor();
    abstract build(...args: any[]): OidbPacket | Promise<OidbPacket>;
    abstract parse(data: Buffer): any;
}
