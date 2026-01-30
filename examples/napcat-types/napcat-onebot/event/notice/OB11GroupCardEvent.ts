import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11GroupCardEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    card_new: string;
    card_old: string;
    constructor(core: NapCatCore, groupId: number, userId: number, cardNew: string, cardOld: string);
}
