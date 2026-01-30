import { OB11BaseMetaEvent } from './OB11BaseMetaEvent';
import { NapCatCore } from '../../../napcat-core';
interface HeartbeatStatus {
    online: boolean | undefined;
    good: boolean;
}
export declare class OB11HeartbeatEvent extends OB11BaseMetaEvent {
    meta_event_type: string;
    status: HeartbeatStatus;
    interval: number;
    constructor(core: NapCatCore, interval: number, isOnline: boolean, isGood: boolean);
}
export {};
