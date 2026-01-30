export interface NodeIKernelMsgBackupService {
    addKernelMsgBackupListener(listener: unknown): number;
    removeKernelMsgBackupListener(listenerId: number): void;
    getMsgBackupLocation(...args: unknown[]): unknown;
    setMsgBackupLocation(...args: unknown[]): unknown;
    requestMsgBackup(...args: unknown[]): unknown;
    requestMsgRestore(...args: unknown[]): unknown;
    requestMsgMigrate(...args: unknown[]): unknown;
    getLocalStorageBackup(...args: unknown[]): unknown;
    deleteLocalBackup(...args: unknown[]): unknown;
    clearCache(...args: unknown[]): unknown;
    start(...args: unknown[]): unknown;
    stop(...args: unknown[]): unknown;
    pause(...args: unknown[]): unknown;
}
