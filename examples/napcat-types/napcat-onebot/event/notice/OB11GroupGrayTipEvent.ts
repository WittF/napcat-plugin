import { OB11BaseNoticeEvent } from './OB11BaseNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
/**
 * 群灰条消息事件
 * 用于上报未知类型的灰条消息，便于下游检测和处理伪造灰条攻击
 */
export declare class OB11GroupGrayTipEvent extends OB11BaseNoticeEvent {
    notice_type: string;
    sub_type: string;
    group_id: number;
    user_id: number;
    message_id: number;
    busi_id: string;
    content: string;
    raw_info: unknown;
    constructor(core: NapCatCore, groupId: number, userId: number, messageId: number, busiId: string, content: string, rawInfo: unknown);
}
