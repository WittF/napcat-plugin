import { EventType, OneBotEvent } from '../../event/OneBotEvent';
export declare abstract class OB11BaseRequestEvent extends OneBotEvent {
    readonly post_type = EventType.REQUEST;
    abstract request_type: string;
}
