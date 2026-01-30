import { OB11BaseMetaEvent } from './OB11BaseMetaEvent';
import { NapCatCore } from '../../../napcat-core';
export enum LifeCycleSubType {
    ENABLE = "enable",
    DISABLE = "disable",
    CONNECT = "connect"
}
export declare class OB11LifeCycleEvent extends OB11BaseMetaEvent {
    meta_event_type: string;
    sub_type: LifeCycleSubType;
    constructor(core: NapCatCore, subType: LifeCycleSubType);
}
