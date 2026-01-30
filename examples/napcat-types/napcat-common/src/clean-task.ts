declare class CleanupQueue {
    private tasks;
    private readonly MAX_RETRIES;
    private isProcessing;
    private pendingOperations;
    /**
       * 执行队列中的待处理操作，确保异步安全
       */
    private executeNextOperation;
    /**
       * 安全执行操作，防止竞态条件
       * @param operation 要执行的操作
       */
    private safeExecute;
    /**
       * 检查文件是否存在
       * @param filePath 文件路径
       * @returns 文件是否存在
       */
    private fileExists;
    /**
       * 添加文件到清理队列
       * @param filePath 文件路径
       * @param cleanupDelay 清理延迟时间(毫秒)
       */
    addFile(filePath: string, cleanupDelay: number): void;
    /**
       * 批量添加文件到清理队列
       * @param filePaths 文件路径数组
       * @param cleanupDelay 清理延迟时间(毫秒)
       */
    addFiles(filePaths: string[], cleanupDelay: number): void;
    /**
       * 清理文件
       * @param record 文件记录
       * @param delay 延迟时间，用于重试
       */
    private cleanupFile;
    /**
       * 取消文件的清理任务
       * @param filePath 文件路径
       * @returns 是否成功取消
       */
    cancelCleanup(filePath: string): boolean;
    /**
       * 获取队列中的文件数量
       * @returns 文件数量
       */
    getQueueSize(): number;
    /**
       * 获取所有待清理的文件
       * @returns 文件路径数组
       */
    getPendingFiles(): string[];
    /**
       * 清空所有清理任务
       */
    clearAll(): void;
}
export declare const cleanTaskQueue: CleanupQueue;
export {};
