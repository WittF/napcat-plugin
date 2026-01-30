import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    category: import("@sinclair/typebox").TString;
    count: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetCollectionList extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_collection_list";
    payloadSchema: import("@sinclair/typebox").TObject<{
        category: import("@sinclair/typebox").TString;
        count: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        category: string;
        count: string;
    };
    returnExample: {
        errCode: number;
        errMsg: string;
        collectionSearchList: {
            collectionItemList: {
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
                    textSummary: null;
                    linkSummary: null;
                    gallerySummary: null;
                    audioSummary: null;
                    videoSummary: null;
                    fileSummary: null;
                    locationSummary: null;
                    richMediaSummary: {
                        title: string;
                        subTitle: string;
                        brief: string;
                        picList: never[];
                        contentType: number;
                        originalUri: string;
                        publisher: string;
                        richMediaVersion: number;
                    };
                };
            }[];
            hasMore: boolean;
            bottomTimeStamp: string;
        };
    };
    _handle(payload: PayloadType): Promise<import("../../../napcat-core").GeneralCallResult & {
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
export {};
