import * as stream from 'node:stream';
import { ReadStream } from 'node:fs';
import { PacketHighwaySig } from '../../packet/highway/highwayContext';
import { PacketLogger } from '../../packet/context/loggerContext';
export interface PacketHighwayTrans {
    uin: string;
    cmd: number;
    command: string;
    data: stream.Readable;
    sum: Uint8Array;
    size: number;
    ticket: Uint8Array;
    loginSig?: Uint8Array;
    ext: Uint8Array;
    encrypt: boolean;
    timeout?: number;
    server: string;
    port: number;
}
export declare class PacketHighwayClient {
    sig: PacketHighwaySig;
    server: string;
    port: number;
    logger: PacketLogger;
    constructor(sig: PacketHighwaySig, logger: PacketLogger, _server?: string, _port?: number);
    changeServer(server: string, port: number): void;
    private buildDataUpTrans;
    upload(cmd: number, data: ReadStream, fileSize: number, md5: Uint8Array, extendInfo: Uint8Array): Promise<void>;
}
