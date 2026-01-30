import { Peer } from './types';
export declare class LimitedHashTable<K, V> {
    private readonly keyToValue;
    private readonly valueToKey;
    private maxSize;
    constructor(maxSize: number);
    resize(count: number): void;
    set(key: K, value: V): void;
    getValue(key: K): V | undefined;
    getKey(value: V): K | undefined;
    deleteByValue(value: V): void;
    deleteByKey(key: K): void;
    getKeyList(): K[];
    getHeads(size: number): {
        key: K;
        value: V;
    }[] | undefined;
}
declare class MessageUniqueWrapper {
    private readonly msgDataMap;
    private readonly msgIdMap;
    constructor(maxMap?: number);
    getRecentMsgIds(Peer: Peer, size: number): string[];
    createUniqueMsgId(peer: Peer, msgId: string): number;
    getMsgIdAndPeerByShortId(shortId: number): {
        MsgId: string;
        Peer: Peer;
    } | undefined;
    getShortIdByMsgId(msgId: string): number | undefined;
    getPeerByMsgId(msgId: string): {
        MsgId: string;
        Peer: Peer;
    } | undefined;
    resize(maxSize: number): void;
    isShortId(message_id: string): boolean;
}
export declare const MessageUnique: MessageUniqueWrapper;
export {};
