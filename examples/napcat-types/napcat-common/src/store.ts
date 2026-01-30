declare class Store {
    private store;
    set<T>(key: string, value: T, ttl?: number): void;
    get<T>(key: string): T | null;
    exists(...keys: string[]): number;
}
declare const store: Store;
export default store;
