import { GeneralCallResult } from './common';
export interface NodeIKernelCollectionService {
    addKernelCollectionListener(listener: unknown): void;
    removeKernelCollectionListener(listenerId: number): void;
    getCollectionItemList(param: {
        category: number;
        groupId: number;
        forceSync: boolean;
        forceFromDb: boolean;
        timeStamp: string;
        count: number;
        searchDown: boolean;
    }): Promise<GeneralCallResult & {
        collectionSearchList: {
            collectionItemList: Array<{
                cid: string;
                type: number;
                status: number;
                author: {
                    type: number;
                    numId: string;
                    strId: string;
                    groupId: string;
                    groupName: string;
                    uid: string;
                };
                bid: number;
                category: number;
                createTime: string;
                collectTime: string;
                modifyTime: string;
                sequence: string;
                shareUrl: string;
                customGroupId: number;
                securityBeat: boolean;
                summary: {
                    textSummary: unknown;
                    linkSummary: unknown;
                    gallerySummary: unknown;
                    audioSummary: unknown;
                    videoSummary: unknown;
                    fileSummary: unknown;
                    locationSummary: unknown;
                    richMediaSummary: unknown;
                };
            }>;
            hasMore: boolean;
            bottomTimeStamp: string;
        };
    }>;
    getCollectionContent(arg1: string, arg2: number, arg3: string, arg4: string, arg5: boolean): unknown;
    getCollectionCustomGroupList(): unknown;
    getCollectionUserInfo(): unknown;
    searchCollectionItemList(arg1: string, arg2: unknown): unknown;
    addMsgToCollection(arg1: unknown, arg2: unknown): unknown;
    collectionArkShare(arg: unknown): unknown;
    collectionFileForward(arg1: number, arg2: string, arg3: unknown): unknown;
    downloadCollectionFile(arg1: string, arg2: string, arg3: unknown, arg4: string): unknown;
    downloadCollectionFileThumbPic(arg1: string, arg2: string, arg3: unknown, arg4: number): unknown;
    downloadCollectionPic(arg1: string, arg2: string, arg3: unknown): unknown;
    cancelDownloadCollectionFile(arg: unknown): unknown;
    deleteCollectionItemList(arg: unknown): unknown;
    editCollectionItem(arg1: unknown, arg2: unknown): unknown;
    getEditPicInfoByPath(arg: unknown): unknown;
    collectionFastUpload(arg: unknown): unknown;
    editCollectionItemAfterFastUpload(arg1: unknown, arg2: unknown): unknown;
    createNewCollectionItem(arg: unknown): unknown;
}
