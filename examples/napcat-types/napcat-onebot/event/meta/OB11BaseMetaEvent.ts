import { EventType, OneBotEvent } from '../../event/OneBotEvent';
export declare abstract class OB11BaseMetaEvent extends OneBotEvent {
    post_type: EventType;
    abstract meta_event_type: string;
}
