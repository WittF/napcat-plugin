import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
type GroupIncreaseSubType = 'approve' | 'invite';
export declare class OB11GroupIncreaseEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    operator_id: number;
    sub_type: GroupIncreaseSubType;
    constructor(core: NapCatCore, groupId: number, userId: number, operatorId: number, subType?: GroupIncreaseSubType);
}
export {};
