import { OB11OnlineFileNoticeEvent } from './OB11OnlineFileNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare class OB11OnlineFileSendEvent extends OB11OnlineFileNoticeEvent {
    notice_type: string;
    sub_type: 'receive' | 'refuse';
    constructor(core: NapCatCore, peer_id: number, sub_type: 'receive' | 'refuse');
}
