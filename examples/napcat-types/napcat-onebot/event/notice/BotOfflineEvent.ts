import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class BotOfflineEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    user_id: number;
    tag: string;
    message: string;
    constructor(core: NapCatCore, tag: string, message: string);
}
