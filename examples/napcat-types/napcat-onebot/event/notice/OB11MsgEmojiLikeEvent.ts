import { OB11GroupNoticeEvent } from './OB11GroupNoticeEvent';
import { NapCatCore } from '../../../napcat-core';
export interface MsgEmojiLike {
    emoji_id: string;
    count: number;
}
export declare class OB11GroupMsgEmojiLikeEvent extends OB11GroupNoticeEvent {
    notice_type: string;
    message_id: number;
    likes: MsgEmojiLike[];
    is_add: boolean;
    message_seq?: string;
    constructor(core: NapCatCore, groupId: number, userId: number, messageId: number, likes: MsgEmojiLike[], isAdd: boolean, _messageSeq?: string);
}
