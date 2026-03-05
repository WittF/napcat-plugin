import { GeneralCallResult } from './common';
import { SendStatus, StartFlashTaskRequests, createFlashTransferResult, FlashBaseRequest, FlashFileSetInfo, FileListInfoRequests, FileListResponse, DownloadStatusInfo, SendTargetRequests, FlashOneFileInfo, DownloadSceneType } from '../data/flash';
export interface NodeIKernelFlashTransferService {
    /**
     * 开始闪传服务  并上传文件/文件夹（可以多选，非常好用）
     * @param timestamp
     * @param fileInfo
     */
    createFlashTransferUploadTask(timestamp: number, fileInfo: StartFlashTaskRequests): Promise<GeneralCallResult & {
        createFlashTransferResult: createFlashTransferResult;
        seq: number;
    }>;
    createMergeShareTask(arg1: unknown, arg2: unknown): unknown;
    updateFlashTransfer(arg1: unknown, arg2: unknown): unknown;
    getFileSetList(arg: unknown): unknown;
    getFileSetListCount(arg: unknown): unknown;
    /**
     * 获取file set 的信息
     * @param fileSetIdDict
     */
    getFileSet(fileSetIdDict: FlashBaseRequest): Promise<GeneralCallResult & {
        seq: number;
        isCache: boolean;
        fileSet: FlashFileSetInfo;
    }>;
    /**
     * 获取file set 里面的文件信息（文件夹结构）
     * @param requestArgs
     */
    getFileList(requestArgs: FileListInfoRequests): Promise<{
        rsp: FileListResponse;
    }>;
    getDownloadedFileCount(arg: unknown): unknown;
    getLocalFileList(arg1: number, arg2: string, arg3: Array<unknown>[]): unknown;
    batchRemoveUserFileSetHistory(arg: unknown): unknown;
    /**
     * 获取分享链接
     * @param fileSetId
     */
    getShareLinkReq(fileSetId: string): Promise<GeneralCallResult & {
        shareLink: string;
        expireTimestamp: string;
    }>;
    /**
     * 由分享链接到fileSetId
     * @param shareCode
     */
    getFileSetIdByCode(shareCode: string): Promise<GeneralCallResult & {
        fileSetId: string;
    }>;
    batchRemoveFile(arg: unknown): unknown;
    checkUploadPathValid(arg: unknown): unknown;
    cleanFailedFiles(arg1: number, arg2: Array<unknown>[]): unknown;
    /**
     * 暂停所有的任务
     */
    resumeAllUnfinishedTasks(): unknown;
    addFileSetUploadListener(listener: unknown): unknown;
    removeFileSetUploadListener(listenerId: unknown): unknown;
    /**
     * 开始上传任务  适用于已暂停的
     * @param fileSetId
     */
    startFileSetUpload(fileSetId: unknown): void;
    /**
     * 结束，无法再次启动
     * @param fileSetId
     */
    stopFileSetUpload(fileSetId: string): void;
    /**
     * 暂停上传
     * @param fileSetId
     */
    pauseFileSetUpload(fileSetId: string): void;
    /**
     * 继续上传
     * @param args
     */
    resumeFileSetUpload(fileSetId: unknown): unknown;
    pauseFileUpload(arg: unknown): unknown;
    resumeFileUpload(arg: unknown): unknown;
    stopFileUpload(arg: unknown): unknown;
    asyncGetThumbnailPath(arg1: unknown, arg2: unknown): unknown;
    setDownLoadDefaultFileDir(dir: unknown): unknown;
    setFileSetDownloadDir(arg1: unknown, arg2: unknown): unknown;
    getFileSetDownloadDir(arg: unknown): unknown;
    setFlashTransferDir(arg1: unknown, arg2: unknown): unknown;
    addFileSetDownloadListener(listener: unknown): unknown;
    removeFileSetDownloadListener(listenerId: unknown): unknown;
    /**
     * 开始下载file set的函数  同开始上传
     * @param fileSetId
     * @param downloadSceneType  下载类型 //因为没有peer，其实可以硬编码为1 （好友私聊）
     * @param arg // 默认为false
     */
    startFileSetDownload(fileSetId: string, downloadSceneType: DownloadSceneType, downloadOptionParams: {
        isIncludeCompressInnerFiles: boolean;
    }): Promise<GeneralCallResult & {
        extraInfo: 0;
    }>;
    stopFileSetDownload(fileSetId: string, downloadOptionParams: {
        isIncludeCompressInnerFiles: boolean;
    }): Promise<GeneralCallResult & {
        extraInfo: 0;
    }>;
    pauseFileSetDownload(fileSetId: string, downloadOptionParams: {
        isIncludeCompressInnerFiles: boolean;
    }): Promise<GeneralCallResult & {
        extraInfo: 0;
    }>;
    resumeFileSetDownload(fileSetId: string, downloadOptionParams: {
        isIncludeCompressInnerFiles: boolean;
    }): Promise<GeneralCallResult & {
        extraInfo: 0;
    }>;
    startFileListDownLoad(arg1: string, arg2: number, arg3: Array<unknown>[], arg4: unknown): unknown;
    pauseFileListDownLoad(arg1: unknown, arg2: unknown): unknown;
    resumeFileListDownLoad(arg1: unknown, arg2: unknown): unknown;
    stopFileListDownLoad(arg1: unknown, arg2: unknown): unknown;
    startThumbnailListDownload(fileSetId: string): Promise<GeneralCallResult>;
    stopThumbnailListDownload(fileSetId: string): Promise<GeneralCallResult>;
    asyncRequestDownLoadStatus(fileSetId: string): Promise<DownloadStatusInfo>;
    startFileTransferUrl(fileInfo: FlashOneFileInfo): Promise<{
        ret: number;
        url: string;
        expireTimestampSeconds: string;
    }>;
    startFileListDownLoadBySessionId(arg1: unknown, arg2: unknown): unknown;
    addFileSetSimpleStatusListener(arg1: unknown, arg2: unknown): unknown;
    addFileSetSimpleStatusMonitoring(arg1: unknown, arg2: unknown): unknown;
    removeFileSetSimpleStatusMonitoring(arg1: unknown, arg2: unknown): unknown;
    removeFileSetSimpleStatusListener(arg: unknown): unknown;
    addDesktopFileSetSimpleStatusListener(arg: unknown): unknown;
    addDesktopFileSetSimpleStatusMonitoring(arg: unknown): unknown;
    removeDesktopFileSetSimpleStatusMonitoring(arg: unknown): unknown;
    removeDesktopFileSetSimpleStatusListener(arg: unknown): unknown;
    addFileSetSimpleUploadInfoListener(arg: unknown): unknown;
    addFileSetSimpleUploadInfoMonitoring(arg: unknown): unknown;
    removeFileSetSimpleUploadInfoMonitoring(arg: unknown): unknown;
    removeFileSetSimpleUploadInfoListener(arg: unknown): unknown;
    /**
     * 发送闪传消息
     * @param sendArgs
     */
    sendFlashTransferMsg(sendArgs: SendTargetRequests): Promise<{
        errCode: number;
        errMsg: string;
        rsp: {
            sendStatus: SendStatus[];
        };
    }>;
    addFlashTransferTaskInfoListener(listener: unknown): unknown;
    removeFlashTransferTaskInfoListener(listenerId: unknown): unknown;
    retrieveLocalLastFailedSetTasksInfo(): unknown;
    getFailedFileList(fileSetId: string): Promise<{
        rsp: {
            seq: number;
            result: number;
            errMs: string;
            fileSetId: string;
            fileList: [];
        };
    }>;
    getLocalFileListByStatuses(arg: unknown): unknown;
    addTransferStateListener(listener: unknown): unknown;
    removeTransferStateListener(listenerId: unknown): unknown;
    getFileSetFirstClusteringList(arg1: number, arg2: string, arg3: number): unknown;
    getFileSetClusteringList(arg: unknown): unknown;
    addFileSetClusteringListListener(listener: unknown): unknown;
    removeFileSetClusteringListListener(listenerId: unknown): unknown;
    getFileSetClusteringDetail(arg: unknown): unknown;
    doAIOFlashTransferBubbleActionWithStatus(arg1: string, arg2: number, arg3: number, arg4: unknown): unknown;
    getFilesTransferProgress(arg: unknown): unknown;
    pollFilesTransferProgress(arg: unknown): unknown;
    cancelPollFilesTransferProgress(arg: unknown): unknown;
    checkDownloadStatusBeforeLocalFileOper(arg1: number, arg2: string, arg3: string): unknown;
    getCompressedFileFolder(arg: unknown): unknown;
    addFolderListener(listener: unknown): unknown;
    removeFolderListener(listenerId: unknown): unknown;
    addCompressedFileListener(listener: unknown): unknown;
    removeCompressedFileListener(listenerId: unknown): unknown;
    getFileCategoryList(arg: unknown): unknown;
    addDeviceStatusListener(listener: unknown): unknown;
    removeDeviceStatusListener(listenerId: unknown): unknown;
    checkDeviceStatus(arg: unknown): unknown;
    pauseAllTasks(arg1: number, arg2: number): unknown;
    resumePausedTasksAfterDeviceStatus(arg: unknown): unknown;
    onSystemGoingToSleep(arg: unknown): unknown;
    onSystemWokeUp(arg: unknown): unknown;
    getFileMetas(arg: unknown): unknown;
    addDownloadCntStatisticsListener(listener: unknown): unknown;
    removeDownloadCntStatisticsListener(listenerId: unknown): unknown;
    detectPrivacyInfoInPaths(arg: unknown): unknown;
    getFileThumbnailUrl(arg: unknown): unknown;
    handleDownloadFinishAfterSaveToAlbum(arg: unknown): unknown;
    checkBatchFilesDownloadStatus(arg: unknown): unknown;
    onCheckAlbumStorageStatusResult(arg: unknown): unknown;
    addFileAlbumStorageListener(listener: unknown): unknown;
    removeFileAlbumStorageListener(listenerId: unknown): unknown;
    refreshFolderStatus(arg: unknown): unknown;
}
