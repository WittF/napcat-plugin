import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11FriendAddNoticeEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    user_id: number;
    constructor(core: NapCatCore, userId: number);
}
