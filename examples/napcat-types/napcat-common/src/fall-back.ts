type Handler<T> = () => T | Promise<T>;
type Checker<T> = (result: T) => T | Promise<T>;
export declare class Fallback<T> {
    private handlers;
    private checker;
    constructor(checker?: Checker<T>);
    add(handler: Handler<T>): this;
    run(): Promise<T>;
}
export declare class FallbackUtil {
    static boolchecker<T>(value: T, condition: boolean): T;
}
export {};
