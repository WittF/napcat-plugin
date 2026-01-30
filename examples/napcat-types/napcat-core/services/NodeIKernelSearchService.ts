import { ChatType, Peer } from '../types';
import { GeneralCallResult } from './common';
export interface NodeIKernelSearchService {
    addKernelSearchListener(listener: unknown): number;
    removeKernelSearchListener(listenerId: number): void;
    searchStranger(unknown: string, searchStranger: unknown, searchParams: unknown): Promise<unknown>;
    searchGroup(param: {
        keyWords: string;
        groupNum: number;
        exactSearch: boolean;
        penetrate: string;
    }): Promise<GeneralCallResult>;
    searchLocalInfo(keywords: string, type: number): unknown;
    cancelSearchLocalInfo(...args: unknown[]): unknown;
    searchBuddyChatInfo(...args: unknown[]): unknown;
    searchMoreBuddyChatInfo(...args: unknown[]): unknown;
    cancelSearchBuddyChatInfo(...args: unknown[]): unknown;
    searchContact(...args: unknown[]): unknown;
    searchMoreContact(...args: unknown[]): unknown;
    cancelSearchContact(...args: unknown[]): unknown;
    searchGroupChatInfo(...args: unknown[]): unknown;
    resetSearchGroupChatInfoSortType(...args: unknown[]): unknown;
    resetSearchGroupChatInfoFilterMembers(...args: unknown[]): unknown;
    searchMoreGroupChatInfo(...args: unknown[]): unknown;
    cancelSearchGroupChatInfo(...args: unknown[]): unknown;
    searchChatsWithKeywords(...args: unknown[]): unknown;
    searchMoreChatsWithKeywords(...args: unknown[]): unknown;
    cancelSearchChatsWithKeywords(...args: unknown[]): unknown;
    searchChatMsgs(...args: unknown[]): unknown;
    searchMoreChatMsgs(...args: unknown[]): unknown;
    cancelSearchChatMsgs(...args: unknown[]): unknown;
    searchMsgWithKeywords(keyWords: string[], param: Peer & {
        searchFields: number;
        pageLimit: number;
    }): Promise<GeneralCallResult>;
    searchMoreMsgWithKeywords(...args: unknown[]): unknown;
    cancelSearchMsgWithKeywords(...args: unknown[]): unknown;
    searchFileWithKeywords(keywords: string[], source: number): Promise<string>;
    searchMoreFileWithKeywords(...args: unknown[]): unknown;
    cancelSearchFileWithKeywords(...args: unknown[]): unknown;
    searchAtMeChats(...args: unknown[]): unknown;
    searchMoreAtMeChats(...args: unknown[]): unknown;
    cancelSearchAtMeChats(...args: unknown[]): unknown;
    searchChatAtMeMsgs(...args: unknown[]): unknown;
    searchMoreChatAtMeMsgs(...args: unknown[]): unknown;
    cancelSearchChatAtMeMsgs(...args: unknown[]): unknown;
    addSearchHistory(param: {
        type: number;
        contactList: [];
        id: number;
        groupInfos: [];
        msgs: [];
        fileInfos: [
            {
                chatType: ChatType;
                buddyChatInfo: Array<{
                    category_name: string;
                    peerUid: string;
                    peerUin: string;
                    remark: string;
                }>;
                discussChatInfo: [];
                groupChatInfo: Array<{
                    groupCode: string;
                    isConf: boolean;
                    hasModifyConfGroupFace: boolean;
                    hasModifyConfGroupName: boolean;
                    groupName: string;
                    remark: string;
                }>;
                dataLineChatInfo: [];
                tmpChatInfo: [];
                msgId: string;
                msgSeq: string;
                msgTime: string;
                senderUid: string;
                senderNick: string;
                senderRemark: string;
                senderCard: string;
                elemId: string;
                elemType: string;
                fileSize: string;
                filePath: string;
                fileName: string;
                hits: Array<{
                    start: 12;
                    end: 14;
                }>;
            }
        ];
    }): Promise<{
        result: number;
        errMsg: string;
        id?: number;
    }>;
    removeSearchHistory(...args: unknown[]): unknown;
    searchCache(...args: unknown[]): unknown;
    clearSearchCache(...args: unknown[]): unknown;
}
