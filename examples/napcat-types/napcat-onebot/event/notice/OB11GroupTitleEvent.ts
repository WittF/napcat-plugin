import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupTitleEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    sub_type: string;
    title: string;
    constructor(core: NapCatCore, groupId: number, userId: number, title: string);
}
