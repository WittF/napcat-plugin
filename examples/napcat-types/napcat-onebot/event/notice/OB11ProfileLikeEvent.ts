import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11ProfileLikeEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    sub_type: string;
    operator_id: number;
    operator_nick: string;
    times: number;
    time: number;
    constructor(core: NapCatCore, operatorId: number, operatorNick: string, times: number, time: number);
}
