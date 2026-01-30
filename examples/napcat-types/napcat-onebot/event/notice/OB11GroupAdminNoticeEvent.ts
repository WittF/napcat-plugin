import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupAdminNoticeEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    sub_type: 'set' | 'unset';
    constructor(core: NapCatCore, group_id: number, user_id: number, sub_type: 'set' | 'unset');
}
