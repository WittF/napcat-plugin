export type TaskExecutor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void, onCancel: (callback: () => void) => void) => void | Promise<void>;
export declare class CancelableTask<T> {
    private promise;
    private cancelCallback;
    private isCanceled;
    private cancelListeners;
    constructor(executor: TaskExecutor<T>);
    cancel(): void;
    isTaskCanceled(): boolean;
    onCancel(listener: () => void): void;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
    [Symbol.asyncIterator](): {
        next: () => Promise<{
            value: T;
            done: boolean;
        }>;
    };
}
