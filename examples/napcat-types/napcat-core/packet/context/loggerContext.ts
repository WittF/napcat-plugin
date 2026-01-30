import { NapCoreContext } from '../../packet/context/napCoreContext';
export declare class PacketLogger {
    private readonly napLogger;
    constructor(napcore: NapCoreContext);
    private _log;
    debug(...msg: any[]): void;
    info(...msg: any[]): void;
    warn(...msg: any[]): void;
    error(...msg: any[]): void;
    fatal(...msg: any[]): void;
}
