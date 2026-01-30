import { NapCatCore } from '../../napcat-core';
export enum EventType {
    META = "meta_event",
    REQUEST = "request",
    NOTICE = "notice",
    MESSAGE = "message",
    MESSAGE_SENT = "message_sent"
}
export declare abstract class OneBotEvent {
    time: number;
    self_id: number;
    abstract post_type: EventType;
    constructor(core: NapCatCore);
}
