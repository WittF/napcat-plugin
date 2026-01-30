import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupRecallNoticeEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    operator_id: number;
    message_id: number;
    constructor(core: NapCatCore, groupId: number, userId: number, operatorId: number, messageId: number);
}
