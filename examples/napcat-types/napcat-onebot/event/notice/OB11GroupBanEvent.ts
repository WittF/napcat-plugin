import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupBanEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    operator_id: number;
    duration: number;
    sub_type: 'ban' | 'lift_ban';
    constructor(core: NapCatCore, groupId: number, userId: number, operatorId: number, duration: number, sub_type: 'ban' | 'lift_ban');
}
