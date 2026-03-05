export interface NodeIKernelMsgBackupService {
    addKernelMsgBackupListener(listener: unknown): number;
    removeKernelMsgBackupListener(listenerId: number): void;
    getMsgBackupLocation(): unknown;
    setMsgBackupLocation(arg: unknown): unknown;
    requestMsgBackup(): unknown;
    requestMsgRestore(arg: unknown): unknown;
    requestMsgMigrate(arg: unknown): unknown;
    getLocalStorageBackup(): unknown;
    deleteLocalBackup(arg: unknown): unknown;
    clearCache(): unknown;
    start(arg: unknown): unknown;
    stop(arg: unknown): unknown;
    pause(arg1: unknown, arg2: unknown): unknown;
}
