import { EventType, OneBotEvent } from '../../event/OneBotEvent';
export declare abstract class OB11BaseNoticeEvent extends OneBotEvent {
    post_type: EventType;
    abstract notice_type: string;
}
