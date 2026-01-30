import { OB11OnlineFileNoticeEvent } from './OB11OnlineFileNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11OnlineFileReceiveEvent extends OB11OnlineFileNoticeEvent {
    notice_type: string;
    sub_type: string;
    constructor(core: NapCatCore, peer_id: number);
}
