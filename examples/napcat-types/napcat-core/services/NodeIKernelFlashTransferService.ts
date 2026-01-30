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
    createMergeShareTask(...args: unknown[]): unknown;
    updateFlashTransfer(...args: unknown[]): unknown;
    getFileSetList(...args: unknown[]): unknown;
    getFileSetListCount(...args: unknown[]): unknown;
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
    getDownloadedFileCount(...args: unknown[]): unknown;
    getLocalFileList(...args: unknown[]): unknown;
    batchRemoveUserFileSetHistory(...args: unknown[]): unknown;
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
    batchRemoveFile(...args: unknown[]): unknown;
    checkUploadPathValid(...args: unknown[]): unknown;
    cleanFailedFiles(...args: unknown[]): unknown;
    /**
     * 暂停所有的任务
     */
    resumeAllUnfinishedTasks(): unknown;
    addFileSetUploadListener(...args: unknown[]): unknown;
    removeFileSetUploadListener(...args: unknown[]): unknown;
    /**
     * 开始上传任务  适用于已暂停的
     * @param fileSetId
     */
    startFileSetUpload(fileSetId: string): void;
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
    resumeFileSetUpload(...args: unknown[]): unknown;
    pauseFileUpload(...args: unknown[]): unknown;
    resumeFileUpload(...args: unknown[]): unknown;
    stopFileUpload(...args: unknown[]): unknown;
    asyncGetThumbnailPath(...args: unknown[]): unknown;
    setDownLoadDefaultFileDir(...args: unknown[]): unknown;
    setFileSetDownloadDir(...args: unknown[]): unknown;
    getFileSetDownloadDir(...args: unknown[]): unknown;
    setFlashTransferDir(...args: unknown[]): unknown;
    addFileSetDownloadListener(...args: unknown[]): unknown;
    removeFileSetDownloadListener(...args: unknown[]): unknown;
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
    startFileListDownLoad(...args: unknown[]): unknown;
    pauseFileListDownLoad(...args: unknown[]): unknown;
    resumeFileListDownLoad(...args: unknown[]): unknown;
    stopFileListDownLoad(...args: unknown[]): unknown;
    startThumbnailListDownload(fileSetId: string): Promise<GeneralCallResult>;
    stopThumbnailListDownload(fileSetId: string): Promise<GeneralCallResult>;
    asyncRequestDownLoadStatus(fileSetId: string): Promise<DownloadStatusInfo>;
    startFileTransferUrl(fileInfo: FlashOneFileInfo): Promise<{
        ret: number;
        url: string;
        expireTimestampSeconds: string;
    }>;
    startFileListDownLoadBySessionId(...args: unknown[]): unknown;
    addFileSetSimpleStatusListener(...args: unknown[]): unknown;
    addFileSetSimpleStatusMonitoring(...args: unknown[]): unknown;
    removeFileSetSimpleStatusMonitoring(...args: unknown[]): unknown;
    removeFileSetSimpleStatusListener(...args: unknown[]): unknown;
    addDesktopFileSetSimpleStatusListener(...args: unknown[]): unknown;
    addDesktopFileSetSimpleStatusMonitoring(...args: unknown[]): unknown;
    removeDesktopFileSetSimpleStatusMonitoring(...args: unknown[]): unknown;
    removeDesktopFileSetSimpleStatusListener(...args: unknown[]): unknown;
    addFileSetSimpleUploadInfoListener(...args: unknown[]): unknown;
    addFileSetSimpleUploadInfoMonitoring(...args: unknown[]): unknown;
    removeFileSetSimpleUploadInfoMonitoring(...args: unknown[]): unknown;
    removeFileSetSimpleUploadInfoListener(...args: unknown[]): unknown;
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
    addFlashTransferTaskInfoListener(...args: unknown[]): unknown;
    removeFlashTransferTaskInfoListener(...args: unknown[]): unknown;
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
    getLocalFileListByStatuses(...args: unknown[]): unknown;
    addTransferStateListener(...args: unknown[]): unknown;
    removeTransferStateListener(...args: unknown[]): unknown;
    getFileSetFirstClusteringList(...args: unknown[]): unknown;
    getFileSetClusteringList(...args: unknown[]): unknown;
    addFileSetClusteringListListener(...args: unknown[]): unknown;
    removeFileSetClusteringListListener(...args: unknown[]): unknown;
    getFileSetClusteringDetail(...args: unknown[]): unknown;
    doAIOFlashTransferBubbleActionWithStatus(...args: unknown[]): unknown;
    getFilesTransferProgress(...args: unknown[]): unknown;
    pollFilesTransferProgress(...args: unknown[]): unknown;
    cancelPollFilesTransferProgress(...args: unknown[]): unknown;
    checkDownloadStatusBeforeLocalFileOper(...args: unknown[]): unknown;
    getCompressedFileFolder(...args: unknown[]): unknown;
    addFolderListener(...args: unknown[]): unknown;
    removeFolderListener(...args: unknown[]): unknown;
    addCompressedFileListener(...args: unknown[]): unknown;
    removeCompressedFileListener(...args: unknown[]): unknown;
    getFileCategoryList(...args: unknown[]): unknown;
    addDeviceStatusListener(...args: unknown[]): unknown;
    removeDeviceStatusListener(...args: unknown[]): unknown;
    checkDeviceStatus(...args: unknown[]): unknown;
    pauseAllTasks(...args: unknown[]): unknown;
    resumePausedTasksAfterDeviceStatus(...args: unknown[]): unknown;
    onSystemGoingToSleep(...args: unknown[]): unknown;
    onSystemWokeUp(...args: unknown[]): unknown;
    getFileMetas(...args: unknown[]): unknown;
    addDownloadCntStatisticsListener(...args: unknown[]): unknown;
    removeDownloadCntStatisticsListener(...args: unknown[]): unknown;
    detectPrivacyInfoInPaths(...args: unknown[]): unknown;
    getFileThumbnailUrl(...args: unknown[]): unknown;
    handleDownloadFinishAfterSaveToAlbum(...args: unknown[]): unknown;
    checkBatchFilesDownloadStatus(...args: unknown[]): unknown;
    onCheckAlbumStorageStatusResult(...args: unknown[]): unknown;
    addFileAlbumStorageListener(...args: unknown[]): unknown;
    removeFileAlbumStorageListener(...args: unknown[]): unknown;
    refreshFolderStatus(...args: unknown[]): unknown;
}
