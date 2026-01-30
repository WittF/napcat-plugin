import { NapCatCore } from '../../../napcat-core';
import { OB11BaseRequestEvent } from './OB11BaseRequestEvent';
export declare class OB11GroupRequestEvent extends OB11BaseRequestEvent {
    readonly request_type: "group";
    group_id: number;
    user_id: number;
    comment: string;
    flag: string;
    sub_type: string;
    constructor(core: NapCatCore, groupId: number, userId: number, sub_type: string, comment: string, flag: string);
}
