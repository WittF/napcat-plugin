import { InstanceContext, NapCatCore } from '../index';
export declare class NTQQCollectionApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    createCollection(authorUin: string, authorUid: string, authorName: string, brief: string, rawData: string): Promise<unknown>;
    getAllCollection(category?: number, count?: number): Promise<import("../index").GeneralCallResult & {
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
}
