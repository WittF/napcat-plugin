import { PacketMsg } from '../packet/message/message';
interface ForwardMsgJson {
    app: string;
    config: ForwardMsgJsonConfig;
    desc: string;
    extra: ForwardMsgJsonExtra;
    meta: ForwardMsgJsonMeta;
    prompt: string;
    ver: string;
    view: string;
}
interface ForwardMsgJsonConfig {
    autosize: number;
    forward: number;
    round: number;
    type: string;
    width: number;
}
interface ForwardMsgJsonExtra {
    filename: string;
    tsum: number;
}
interface ForwardMsgJsonMeta {
    detail: ForwardMsgJsonMetaDetail;
}
interface ForwardMsgJsonMetaDetail {
    news: {
        text: string;
    }[];
    resid: string;
    source: string;
    summary: string;
    uniseq: string;
}
export declare class ForwardMsgBuilder {
    private static build;
    static fromResId(resId: string): ForwardMsgJson;
    static fromPacketMsg(resId: string, packetMsg: PacketMsg[], source?: string, news?: ForwardMsgJsonMetaDetail['news'], summary?: string, prompt?: string, uuid?: string): ForwardMsgJson;
}
export {};
