import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupEssenceEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    message_id: number;
    sender_id: number;
    operator_id: number;
    sub_type: 'add' | 'delete';
    constructor(core: NapCatCore, groupId: number, message_id: number, sender_id: number, operator_id: number);
}
