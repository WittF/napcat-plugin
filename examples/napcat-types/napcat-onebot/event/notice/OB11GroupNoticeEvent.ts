import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare abstract class OB11GroupNoticeEvent extends OB11BaseNoticeEvent {
    group_id: number;
    user_id: number;
    constructor(core: NapCatCore, group_id: number, user_id: number);
}
