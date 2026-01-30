import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export type GroupDecreaseSubType = 'leave' | 'kick' | 'kick_me' | 'disband';
export declare class OB11GroupDecreaseEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    sub_type: GroupDecreaseSubType;
    operator_id: number;
    constructor(core: NapCatCore, groupId: number, userId: number, operatorId: number, subType?: GroupDecreaseSubType);
}
