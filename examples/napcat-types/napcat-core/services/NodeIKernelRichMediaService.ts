import { GetFileListParam, MessageElement, Peer } from '../types';
import { GeneralCallResult } from './common';
export enum UrlFileDownloadType {
    KUNKNOWN = 0,
    KURLFILEDOWNLOADPRIVILEGEICON = 1,
    KURLFILEDOWNLOADPHOTOWALL = 2,
    KURLFILEDOWNLOADQZONE = 3,
    KURLFILEDOWNLOADCOMMON = 4,
    KURLFILEDOWNLOADINSTALLAPP = 5
}
export enum RMBizTypeEnum {
    KUNKNOWN = 0,
    KC2CFILE = 1,
    KGROUPFILE = 2,
    KC2CPIC = 3,
    KGROUPPIC = 4,
    KDISCPIC = 5,
    KC2CVIDEO = 6,
    KGROUPVIDEO = 7,
    KC2CPTT = 8,
    KGROUPPTT = 9,
    KFEEDCOMMENTPIC = 10,
    KGUILDFILE = 11,
    KGUILDPIC = 12,
    KGUILDPTT = 13,
    KGUILDVIDEO = 14
}
export interface CommonFileInfo {
    bizType: number;
    chatType: number;
    elemId: string;
    favId: string;
    fileModelId: string;
    fileName: string;
    fileSize: string;
    md5: string;
    md510m: string;
    msgId: string;
    msgTime: string;
    parent: string;
    peerUid: string;
    picThumbPath: Array<string>;
    sha: string;
    sha3: string;
    subId: string;
    uuid: string;
}
export interface NodeIKernelRichMediaService {
    getVideoPlayUrl(peer: Peer, msgId: string, elemId: string, videoCodecFormat: number, VideoRequestWay: number): Promise<unknown>;
    getVideoPlayUrlV2(peer: Peer, msgId: string, elemId: string, videoCodecFormat: number, exParams: {
        downSourceType: number;
        triggerType: number;
    }): Promise<GeneralCallResult & {
        urlResult: {
            v4IpUrl: [];
            v6IpUrl: [];
            domainUrl: Array<{
                url: string;
                isHttps: boolean;
                httpsDomain: string;
            }>;
            videoCodecFormat: number;
        };
    }>;
    getRichMediaFileDir(elementType: number, downType: number, isTemp: boolean): unknown;
    getVideoPlayUrlInVisit(arg: {
        downloadType: number;
        thumbSize: number;
        msgId: string;
        msgRandom: string;
        msgSeq: string;
        msgTime: string;
        chatType: number;
        senderUid: string;
        peerUid: string;
        guildId: string;
        ele: MessageElement;
        useHttps: boolean;
    }): Promise<unknown>;
    isFileExpired(arg: number): unknown;
    deleteGroupFolder(GroupCode: string, FolderId: string): Promise<GeneralCallResult & {
        groupFileCommonResult: {
            retCode: number;
            retMsg: string;
            clientWording: string;
        };
    }>;
    downloadRichMediaInVisit(arg: {
        downloadType: number;
        thumbSize: number;
        msgId: string;
        msgRandom: string;
        msgSeq: string;
        msgTime: string;
        chatType: number;
        senderUid: string;
        peerUid: string;
        guildId: string;
        ele: MessageElement;
        useHttps: boolean;
    }): unknown;
    downloadFileForModelId(peer: Peer, ModelId: string[], unknown: string): Promise<unknown>;
    downloadFileForFileUuid(peer: Peer, uuid: string, arg3: {
        fileId: string;
        fileName: string;
        fileSize: string;
        fileModelId: string;
    }[]): Promise<unknown>;
    downloadFileByUrlList(fileDownloadTyp: UrlFileDownloadType, urlList: Array<string>): unknown;
    downloadFileForFileInfo(fileInfo: CommonFileInfo[], savePath: string): unknown;
    createGroupFolder(GroupCode: string, FolderName: string): Promise<GeneralCallResult & {
        resultWithGroupItem: {
            result: unknown;
            groupItem: Array<unknown>;
        };
    }>;
    downloadFile(commonFile: CommonFileInfo, arg2: unknown, arg3: unknown, savePath: string): unknown;
    createGroupFolder(arg1: unknown, arg2: unknown): unknown;
    downloadGroupFolder(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
    renameGroupFolder(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
    deleteGroupFolder(arg1: unknown, arg2: unknown): unknown;
    deleteTransferInfo(arg1: unknown, arg2: unknown): unknown;
    cancelTransferTask(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
    cancelUrlDownload(arg: unknown): unknown;
    updateOnlineVideoElemStatus(arg: unknown): unknown;
    getGroupSpace(arg: unknown): unknown;
    getGroupFileList(groupCode: string, params: GetFileListParam): Promise<GeneralCallResult & {
        groupSpaceResult: {
            retCode: number;
            retMsg: string;
            clientWording: string;
            totalSpace: number;
            usedSpace: number;
            allUpload: boolean;
        };
    }>;
    getGroupFileInfo(arg1: unknown, arg2: unknown): unknown;
    getGroupTransferList(arg1: unknown, arg2: unknown): unknown;
    renameGroupFile(arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown, arg5: unknown): unknown;
    moveGroupFile(groupCode: string, busId: Array<number>, fileList: Array<string>, currentParentDirectory: string, targetParentDirectory: string): Promise<GeneralCallResult & {
        moveGroupFileResult: {
            result: {
                retCode: number;
                retMsg: symbol;
                clientWording: string;
            };
            successFileIdList: Array<string>;
            failFileIdList: Array<string>;
        };
    }>;
    transGroupFile(groupCode: string, fileId: string): Promise<GeneralCallResult & {
        transGroupFileResult: {
            result: {
                retCode: number;
                retMsg: string;
                clientWording: string;
            };
            saveBusId: number;
            saveFilePath: string;
        };
    }>;
    searchGroupFile(keywords: Array<string>, param: {
        groupIds: Array<string>;
        fileType: number;
        context: string;
        count: number;
        sortType: number;
        groupNames: Array<string>;
    }): Promise<unknown>;
    searchGroupFileByWord(arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown, arg5: unknown): unknown;
    deleteGroupFile(GroupCode: string, params: Array<number>, Files: Array<string>): Promise<GeneralCallResult & {
        transGroupFileResult: {
            result: unknown;
            successFileIdList: Array<unknown>;
            failFileIdList: Array<unknown>;
        };
    }>;
    translateEnWordToZn(words: string[]): Promise<GeneralCallResult & {
        words: string[];
    }>;
    getScreenOCR(path: string): Promise<unknown>;
    batchGetGroupFileCount(Gids: Array<string>): Promise<GeneralCallResult & {
        groupCodes: Array<string>;
        groupFileCounts: Array<number>;
    }>;
    queryPicDownloadSize(arg: unknown): unknown;
    searchGroupFile(arg1: unknown, arg2: unknown): unknown;
    searchMoreGroupFile(arg: unknown): unknown;
    cancelSearcheGroupFile(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
    onlyDownloadFile(peer: Peer, arg2: unknown, arg3: Array<{
        fileId: string;
        fileName: string;
        fileSize: string;
        fileModelId: string;
    }>): unknown;
    onlyUploadFile(arg1: unknown, arg2: unknown): unknown;
    isExtraLargePic(arg1: unknown, arg2: unknown, arg3: unknown): unknown;
    uploadRMFileWithoutMsg(arg: {
        bizType: RMBizTypeEnum;
        filePath: string;
        peerUid: string;
        transferId: string;
        useNTV2: string;
    }): Promise<unknown>;
    isNull(): boolean;
}
