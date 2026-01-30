import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
declare class OB11PokeEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    sub_type: string;
    target_id: number;
    user_id: number;
}
export declare class OB11FriendPokeEvent extends OB11PokeEvent {
    raw_info: unknown;
    sender_id: number;
    constructor(core: NapCatCore, user_id: number, sender_id: number, target_id: number, raw_message: unknown);
}
export declare class OB11GroupPokeEvent extends OB11PokeEvent {
    group_id: number;
    raw_info: unknown;
    constructor(core: NapCatCore, group_id: number, user_id: number, target_id: number, raw_message: unknown);
}
export {};
