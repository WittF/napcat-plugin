export declare class LRUCache<K, V> {
    private capacity;
    cache: Map<K, V>;
    constructor(capacity: number);
    get(key: K): V | undefined;
    put(key: K, value: V): void;
    resetCapacity(newCapacity: number): void;
}
