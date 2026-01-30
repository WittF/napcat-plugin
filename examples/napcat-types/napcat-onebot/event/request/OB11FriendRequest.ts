import { NapCatCore } from '../../../napcat-core';
import { OB11BaseRequestEvent } from './OB11BaseRequestEvent';
export declare class OB11FriendRequestEvent extends OB11BaseRequestEvent {
    request_type: string;
    user_id: number;
    comment: string;
    flag: string;
    constructor(core: NapCatCore, user_id: number, comment: string, flag: string);
}
