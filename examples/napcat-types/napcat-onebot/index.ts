import { InstanceContext, NapCatCore } from '../napcat-core';
import { OB11ConfigLoader } from './config';
import { OB11NetworkManager } from './network';
import { NapCatPathWrapper } from '../napcat-common/src/path';
import { OneBotFriendApi, OneBotGroupApi, OneBotMsgApi, OneBotQuickActionApi, OneBotUserApi } from './api';
import { ActionMap } from './action';
import { OneBotConfig } from './config/config';
import { OneBotFileApi } from './api/file';
interface ApiListType {
    GroupApi: OneBotGroupApi;
    UserApi: OneBotUserApi;
    FriendApi: OneBotFriendApi;
    MsgApi: OneBotMsgApi;
    QuickActionApi: OneBotQuickActionApi;
    FileApi: OneBotFileApi;
}
export declare class NapCatOneBot11Adapter {
    readonly core: NapCatCore;
    readonly context: InstanceContext;
    configLoader: OB11ConfigLoader;
    apis: ApiListType;
    networkManager: OB11NetworkManager;
    actions: ActionMap;
    private readonly bootTime;
    recallEventCache: Map<string, NodeJS.Timeout>;
    constructor(core: NapCatCore, context: InstanceContext, pathWrapper: NapCatPathWrapper);
    creatOneBotLog(ob11Config: OneBotConfig): Promise<string>;
    InitOneBot(): Promise<void>;
    private reloadNetwork;
    private handleConfigChange;
    private initMsgListener;
    private initBuddyListener;
    private initGroupListener;
    private emitMsg;
    private handleMsg;
    private isSelfMessage;
    private handleGroupEvent;
    private handlePrivateMsgEvent;
    private emitRecallMsg;
    private emitFriendRecallMsg;
    private emitGroupRecallMsg;
}
export * from './types/index';
export * from './api/index';
export * from './event/index';
export * from './config/index';
