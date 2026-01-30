import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export declare abstract class OB11OnlineFileNoticeEvent extends OB11BaseNoticeEvent {
    peer_id: number;
    protected constructor(core: NapCatCore, peer_id: number);
}
