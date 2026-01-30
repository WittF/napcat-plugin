import { ChatType, Peer } from '../types';
import { NodeIKernelRecentContactListener } from '../listeners/NodeIKernelRecentContactListener';
import { GeneralCallResult } from '../services/common';
import { FSABRecentContactParams } from '../types/contact';
export interface NodeIKernelRecentContactService {
    setGuildDisplayStatus(...args: unknown[]): unknown;
    setContactListTop(...args: unknown[]): unknown;
    updateRecentContactExtBufForUI(...args: unknown[]): unknown;
    upsertRecentContactManually(...args: unknown[]): unknown;
    enterOrExitMsgList(...args: unknown[]): unknown;
    getRecentContactListSnapShot(count: number): Promise<GeneralCallResult & {
        info: {
            errCode: number;
            errMsg: string;
            sortedContactList: Array<number>;
            changedList: Array<{
                remark: unknown;
                peerName: unknown;
                sendMemberName: unknown;
                sendNickName: unknown;
                peerUid: string;
                peerUin: string;
                msgTime: string;
                chatType: ChatType;
                msgId: string;
            }>;
        };
    }>;
    clearMsgUnreadCount(...args: unknown[]): unknown;
    getRecentContactListSyncLimit(count: number): unknown;
    jumpToSpecifyRecentContact(...args: unknown[]): unknown;
    fetchAndSubscribeABatchOfRecentContact(params: FSABRecentContactParams): unknown;
    addRecentContact(peer: Peer): unknown;
    deleteRecentContacts(peer: Peer): unknown;
    getContacts(peers: Peer[]): Promise<unknown>;
    setThirdPartyBusinessInfos(...args: unknown[]): unknown;
    updateGameMsgConfigs(...args: unknown[]): unknown;
    removeKernelRecentContactListener(listenerid: number): unknown;
    addKernelRecentContactListener(listener: NodeIKernelRecentContactListener): void;
    clearRecentContactsByChatType(...args: unknown[]): unknown;
    upInsertModule(...args: unknown[]): unknown;
    jumpToSpecifyRecentContactVer2(...args: unknown[]): unknown;
    deleteRecentContactsVer2(...args: unknown[]): unknown;
    getRecentContactList(): Promise<unknown>;
    getMsgUnreadCount(): unknown;
    clearRecentContacts(): unknown;
    getServiceAssistantRecentContactInfos(): unknown;
    getRecentContactInfos(): unknown;
    getUnreadDetailsInfos(): unknown;
    cleanAllModule(): unknown;
    setAllGameMsgRead(): unknown;
    getRecentContactListSync(): unknown;
}
