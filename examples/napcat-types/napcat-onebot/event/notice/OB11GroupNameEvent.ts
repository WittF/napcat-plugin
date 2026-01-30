import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupNameEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    sub_type: string;
    name_new: string;
    constructor(core: NapCatCore, groupId: number, userId: number, nameNew: string);
}
