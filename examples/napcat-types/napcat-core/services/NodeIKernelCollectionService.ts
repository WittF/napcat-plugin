import { GeneralCallResult } from './common';
export interface NodeIKernelCollectionService {
    addKernelCollectionListener(...args: unknown[]): void;
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
    getCollectionContent(...args: unknown[]): unknown;
    getCollectionCustomGroupList(...args: unknown[]): unknown;
    getCollectionUserInfo(...args: unknown[]): unknown;
    searchCollectionItemList(...args: unknown[]): unknown;
    addMsgToCollection(...args: unknown[]): unknown;
    collectionArkShare(...args: unknown[]): unknown;
    collectionFileForward(...args: unknown[]): unknown;
    downloadCollectionFile(...args: unknown[]): unknown;
    downloadCollectionFileThumbPic(...args: unknown[]): unknown;
    downloadCollectionPic(...args: unknown[]): unknown;
    cancelDownloadCollectionFile(...args: unknown[]): unknown;
    deleteCollectionItemList(...args: unknown[]): unknown;
    editCollectionItem(...args: unknown[]): unknown;
    getEditPicInfoByPath(...args: unknown[]): unknown;
    collectionFastUpload(...args: unknown[]): unknown;
    editCollectionItemAfterFastUpload(...args: unknown[]): unknown;
    createNewCollectionItem(...args: unknown[]): unknown;
}
