export declare class TypedEventEmitter<E extends Record<string, any>> {
    private emitter;
    on<K extends keyof E>(event: K, listener: (payload: E[K]) => void): () => void;
    once<K extends keyof E>(event: K, listener: (payload: E[K]) => void): void;
    off<K extends keyof E>(event: K, listener: (payload: E[K]) => void): void;
    emit<K extends keyof E>(event: K, payload: E[K]): void;
}
