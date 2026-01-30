import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export interface GroupUploadFile {
    id: string;
    name: string;
    size: number;
    busid: number;
}
export declare class OB11GroupUploadNoticeEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    file: GroupUploadFile;
    constructor(core: NapCatCore, groupId: number, userId: number, file: GroupUploadFile);
}
