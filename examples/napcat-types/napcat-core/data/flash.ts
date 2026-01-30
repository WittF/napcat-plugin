export interface FlashBaseRequest {
    fileSetId: string;
}
export interface UploaderInfo {
    uin: string;
    nickname: string;
    uid: string;
    sendEntrance: string;
}
export interface thumbnailInfo {
    id: string;
    url: {
        spec: number;
        uri: string;
    }[];
    localCachePath: string;
}
export interface SendTarget {
    destType: number;
    destUin?: string;
    destUid: string;
}
export interface SendTargetRequests {
    fileSetId: string;
    targets: SendTarget[];
}
export interface DownloadStatusInfo {
    result: number;
    fileSetId: string;
    status: number;
    info: {
        curDownLoadFailFileNum: number;
        curDownLoadedPauseFileNum: number;
        curDownLoadedFileNum: number;
        curRealDownLoadedFileNum: number;
        curDownloadingFileNum: number;
        totalDownLoadedFileNum: number;
        curDownLoadedBytes: string;
        totalDownLoadedBytes: string;
        curSpeedBps: number;
        avgSpeedBps: number;
        maxSpeedBps: number;
        remainDownLoadSeconds: number;
        failFileIdList: [];
        allFileIdList: [];
        hasNormalFileDownloading: boolean;
        onlyCompressInnerFileDownloading: boolean;
        isAllFileAlreadyDownloaded: boolean;
        saveFileSetDir: string;
        allWaitingStatusTask: boolean;
        downloadSceneType: DownloadSceneType;
        retryCount: number;
        statisticInfo: {
            downloadTaskId: string;
            downloadFilesetName: string;
            downloadFileTypeDistribution: string;
            downloadFileSizeDistribution: string;
        };
        albumStorageFailImageNum: number;
        albumStorageFailVideoNum: number;
        albumStorageFailFileIdList: [];
        albumStorageSucImageNum: number;
        albumStorageSucVideoNum: number;
        albumStorageSucFileIdList: [];
        albumStorageFileNum: number;
    };
}
export interface physicalInfo {
    id: string;
    url: string;
    status: number;
    processing: string;
    localPath: string;
    width: 0;
    height: 0;
    time: number;
}
export interface downloadInfo {
    status: number;
    curDownLoadBytes: string;
    totalFileBytes: string;
    errorCode: number;
}
export interface uploadInfo {
    uploadedBytes: string;
    errorCode: number;
    svrRrrCode: number;
    errMsg: string;
    isNeedDelDeviceInfo: boolean;
    thumbnailUploadState: number;
    isSecondHit: boolean;
    hasModifiedErr: boolean;
}
export interface folderUploadInfo {
    totalUploadedFileSize: string;
    successCount: number;
    failedCount: number;
}
export interface folderDownloadInfo {
    totalDownloadedFileSize: string;
    totalFileSize: string;
    totalDownloadFileCount: number;
    successCount: number;
    failedCount: number;
    pausedCount: number;
    cancelCount: number;
    downloadingCount: number;
    partialDownloadCount: number;
    curLevelDownloadedFileCount: number;
    curLevelUnDownloadedFileCount: number;
}
export interface compressFileFolderInfo {
    downloadStatus: number;
    saveFileDirPath: string;
    totalFileCount: string;
    totalFileSize: string;
}
export interface albumStorgeInfo {
    status: number;
    localIdentifier: string;
    errorCode: number;
    timeCost: number;
}
export interface FlashOneFileInfo {
    fileSetId: string;
    cliFileId: string;
    compressedFileFolderId: string;
    archiveIndex: 0;
    indexPath: string;
    isDir: boolean;
    parentId: string;
    depth: number;
    cliFileIndex: number;
    fileType: number;
    name: string;
    namePinyin: string;
    isCover: boolean;
    isCoverOriginal: boolean;
    fileSize: string;
    fileCount: number;
    thumbnail: thumbnailInfo;
    physical: physicalInfo;
    srvFileId: string;
    srvParentFileId: string;
    svrLastUpdateTimestamp: string;
    downloadInfo: downloadInfo;
    saveFilePath: string;
    search_relative_path: string;
    disk_relative_path: string;
    uploadInfo: uploadInfo;
    status: number;
    uploadStatus: number;
    downloadStatus: number;
    folderUploadInfo: folderUploadInfo;
    folderDownloadInfo: folderDownloadInfo;
    sha1: string;
    bookmark: string;
    compressFileFolderInfo: compressFileFolderInfo;
    uploadPauseReason: string;
    downloadPauseReason: string;
    filePhysicalSize: string;
    thumbnail_sha1: string | null;
    thumbnail_size: string | null;
    needAlbumStorage: boolean;
    albumStorageInfo: albumStorgeInfo;
}
export interface fileListsInfo {
    parentId: string;
    depth: number;
    fileList: FlashOneFileInfo[];
    paginationInfo: {};
    isEnd: boolean;
    isCache: boolean;
}
export interface FileListResponse {
    seq: number;
    result: number;
    errMs: string;
    fileLists: fileListsInfo[];
}
export interface createFlashTransferResult {
    fileSetId: string;
    shareLink: string;
    expireTime: string;
    expireLeftTime: string;
}
export enum UploadSceneType {
    KUPLOADSCENEUNKNOWN = 0,
    KUPLOADSCENEFLOATWINDOWRIGHTCLICKMENU = 1,
    KUPLOADSCENEFLOATWINDOWDRAG = 2,
    KUPLOADSCENEFLOATWINDOWFILESELECTOR = 3,
    KUPLOADSCENEFLOATWINDOWSHORTCUTKEYCTRLCV = 4,
    KUPLOADSCENEH5LAUNCHCLIENTRIGHTCLICKMENU = 5,
    KUPLOADSCENEH5LAUNCHCLIENTDRAG = 6,
    KUPLOADSCENEH5LAUNCHCLIENTFILESELECTOR = 7,
    KUPLOADSCENEH5LAUNCHCLIENTSHORTCUTKEYCTRLCV = 8,
    KUPLOADSCENEAIODRAG = 9,
    KUPLOADSCENEAIOFILESELECTOR = 10,
    KUPLOADSCENEAIOSHORTCUTKEYCTRLCV = 11
}
export interface StartFlashTaskRequests {
    screen: number;
    name?: string;
    uploaders: UploaderInfo[];
    permission?: {};
    coverPath?: string;
    paths: string[];
    excludePaths?: string[];
    expireLeftTime?: number;
    isNeedDelDeviceInfo: boolean;
    isNeedDelLocation: boolean;
    coverOriginalInfos?: {
        path: string;
        thumbnailPath: string;
    }[];
    uploadSceneType: UploadSceneType;
    detectPrivacyInfoResult: {
        exists: boolean;
        allDetectResults: {};
    };
}
export enum BusiScene {
    KBUSISCENEINVALID = 0,
    KBUSISCENEFLASHSCENE = 1
}
export interface FileListInfoRequests {
    seq: number;
    fileSetId: string;
    isUseCache: boolean;
    sceneType: BusiScene;
    reqInfos: {
        count: number;
        paginationInfo: {};
        parentId: string;
        reqIndexPath: string;
        reqDepth: number;
        filterCondition: {
            fileCategory: number;
            filterType: number;
        };
        sortConditions: {
            sortField: number;
            sortOrder: number;
        }[];
        isNeedPhysicalInfoReady: boolean;
    }[];
}
export enum DownloadSceneType {
    KDOWNLOADSCENEUNKNOWN = 0,
    KDOWNLOADSCENEARKC2C = 1,
    KDOWNLOADSCENEARKC2CDETAILPAGE = 2,
    KDOWNLOADSCENEARKGROUP = 3,
    KDOWNLOADSCENEARKGROUPDETAILPAGE = 4,
    KDOWNLOADSCENELINKC2C = 5,
    KDOWNLOADSCENELINKGROUP = 6,
    KDOWNLOADSCENELINKCHANNEL = 7,
    KDOWNLOADSCENELINKTEMPCHAT = 8,
    KDOWNLOADSCENELINKOTHERINQQ = 9,
    KDOWNLOADSCENESCANQRCODE = 10,
    KDWONLOADSCENEFLASHTRANSFERCENTERCLIENT = 11,
    KDWONLOADSCENEFLASHTRANSFERCENTERSCHEMA = 12
}
export interface FlashFileSetInfo {
    fileSetId: string;
    name: string;
    namePinyin: string;
    totalFileCount: number;
    totalFileSize: number;
    permission: {};
    shareInfo: {
        shareLink: string;
        extractionCode: string;
    };
    cover: {
        id: string;
        urls: [
            {
                spec: number;
                url: string;
            }
        ];
        localCachePath: string;
    };
    uploaders: [
        {
            uin: string;
            nickname: string;
            uid: string;
            sendEntrance: string;
        }
    ];
    expireLeftTime: number;
    aiClusteringStatus: {
        firstClusteringList: [];
        shouldPull: boolean;
    };
    createTime: number;
    expireTime: number;
    firstLevelItemCount: 1;
    svrLastUpdateTimestamp: 0;
    taskId: string;
    uploadInfo: {
        totalUploadedFileSize: number;
        successCount: number;
        failedCount: number;
    };
    downloadInfo: {
        totalDownloadedFileSize: 0;
        totalFileSize: 0;
        totalDownloadFileCount: 0;
        successCount: 0;
        failedCount: 0;
        pausedCount: 0;
        cancelCount: 0;
        status: 0;
        curLevelDownloadedFileCount: number;
        curLevelUnDownloadedFileCount: 0;
    };
    transferType: number;
    isLocalCreate: true;
    status: number;
    uploadStatus: number;
    uploadPauseReason: 0;
    downloadStatus: 0;
    downloadPauseReason: 0;
    saveFileSetDir: string;
    uploadSceneType: UploadSceneType;
    downloadSceneType: DownloadSceneType;
    retryCount: number;
    isMergeShareUpload: 0;
    isRemoveDeviceInfo: boolean;
    isRemoveLocation: boolean;
}
export interface SendStatus {
    result: number;
    msg: string;
    target: {
        destType: number;
        destUid: string;
    };
}
