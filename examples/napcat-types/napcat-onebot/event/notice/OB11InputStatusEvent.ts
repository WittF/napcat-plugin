import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11InputStatusEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    sub_type: string;
    status_text: string;
    event_type: number;
    user_id: number;
    group_id: number;
    constructor(core: NapCatCore, user_id: number, eventType: number, status_text: string);
}
