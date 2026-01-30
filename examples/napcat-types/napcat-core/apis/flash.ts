import { GeneralCallResult, InstanceContext, NapCatCore } from '../../napcat-core';
import { createFlashTransferResult, FileListResponse, FlashFileSetInfo, SendStatus } from '../data/flash';
import { Peer } from '../types';
export declare class NTQQFlashApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    /**
     * 发起闪传上传任务
     * @param fileListToUpload 上传文件绝对路径的列表，可以是文件夹！！
     * @param thumbnailPath
     * @param filesetName
     */
    createFlashTransferUploadTask(fileListToUpload: string[], thumbnailPath: string, filesetName: string): Promise<GeneralCallResult & {
        createFlashTransferResult: createFlashTransferResult;
        seq: number;
    }>;
    /**
     * 下载闪传文件集
     * @param fileSetId
     */
    downloadFileSetBySetId(fileSetId: string): Promise<GeneralCallResult & {
        extraInfo: unknown;
    }>;
    /**
     * 获取闪传的外链分享
     * @param fileSetId
     */
    getShareLinkBySetId(fileSetId: string): Promise<GeneralCallResult & {
        shareLink: string;
        expireTimestamp: string;
    }>;
    /**
     * 从分享外链获取文件集id
     * @param shareCode
     */
    fromShareLinkFindSetId(shareCode: string): Promise<GeneralCallResult & {
        fileSetId: string;
    }>;
    /**
     * 获取fileSet的文件结构信息  （未来可能需要深度遍历）
     * == 注意返回结构和其它的不同，没有GeneralCallResult!!! ==
     * @param fileSetId
     */
    getFileListBySetId(fileSetId: string): Promise<FileListResponse>;
    /**
     * 获取闪传文件集合信息
     * @param fileSetId
     */
    getFileSetIndoBySetId(fileSetId: string): Promise<GeneralCallResult & {
        seq: number;
        isCache: boolean;
        fileSet: FlashFileSetInfo;
    }>;
    /**
     * 发送闪传消息（私聊/群聊）
     * @param fileSetId
     * @param peer
     */
    sendFlashMessage(fileSetId: string, peer: Peer): Promise<{
        errCode: number;
        errMsg: string;
        rsp: {
            sendStatus: SendStatus[];
        };
    }>;
    /**
     * 获取闪传文件集中某个文件的下载URL（外链）
     * @param fileSetId
     * @param options
     */
    getFileTransUrl(fileSetId: string, options: {
        fileName?: string;
        fileIndex?: number;
    }): Promise<GeneralCallResult & {
        transferUrl: string;
    }>;
    createFileThumbnail(filePath: string): Promise<any>;
}
