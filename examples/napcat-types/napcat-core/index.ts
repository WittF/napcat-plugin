import { NTQQFileApi, NTQQFriendApi, NTQQGroupApi, NTQQMsgApi, NTQQSystemApi, NTQQUserApi, NTQQWebApi, NTQQFlashApi, NTQQOnlineApi } from './apis';
import { NTQQCollectionApi } from './apis/collection';
import { NodeIQQNTWrapperSession, NodeQQNTWrapperUtil, WrapperNodeApi, WrapperSessionInitConfig } from './wrapper';
import { LogWrapper } from './helper/log';
import { QQBasicInfoWrapper } from './helper/qq-basic-info';
import { NapCatPathWrapper } from '../napcat-common/src/path';
import { NTEventWrapper } from './helper/event';
import { SelfInfo } from './types';
import { NapCatConfigLoader } from './helper/config';
import { NTQQPacketApi } from './apis/packet';
import { NativePacketHandler } from './packet/handler/client';
import { TypedEventEmitter } from './packet/handler/typeEvent';
export * from './wrapper';
export * from './types/index';
export * from './services/index';
export * from './listeners/index';
export * from './apis/index';
export * from './helper/log';
export * from './helper/qq-basic-info';
export * from './helper/event';
export * from './helper/config';
export * from './helper/config-base';
export * from './helper/proxy-handler';
export * from './helper/session-proxy';
export enum NapCatCoreWorkingEnv {
    Unknown = 0,
    Shell = 1,
    Framework = 2
}
export declare function loadQQWrapper(execPath: string | undefined, QQVersion: string): WrapperNodeApi;
export declare function getMajorPath(execPath: string, QQVersion: string): string;
export declare class NapCatCore {
    readonly context: InstanceContext;
    readonly eventWrapper: NTEventWrapper;
    event: TypedEventEmitter<import("./packet/handler/eventList").AppEvents>;
    NapCatDataPath: string;
    NapCatTempPath: string;
    apis: StableNTApiWrapper;
    selfInfo: SelfInfo;
    util: NodeQQNTWrapperUtil;
    configLoader: NapCatConfigLoader;
    constructor(context: InstanceContext, selfInfo: SelfInfo);
    initCore(): Promise<void>;
    get dataPath(): string;
    initNapCatCoreListeners(): Promise<void>;
}
export declare function genSessionConfig(guid: string, QQVersionAppid: string, QQVersion: string, selfUin: string, selfUid: string, account_path: string): Promise<WrapperSessionInitConfig>;
export interface InstanceContext {
    readonly workingEnv: NapCatCoreWorkingEnv;
    readonly wrapper: WrapperNodeApi;
    readonly session: NodeIQQNTWrapperSession;
    readonly logger: LogWrapper;
    readonly basicInfoWrapper: QQBasicInfoWrapper;
    readonly pathWrapper: NapCatPathWrapper;
    readonly packetHandler: NativePacketHandler;
}
export interface StableNTApiWrapper {
    FileApi: NTQQFileApi;
    SystemApi: NTQQSystemApi;
    PacketApi: NTQQPacketApi;
    CollectionApi: NTQQCollectionApi;
    WebApi: NTQQWebApi;
    FriendApi: NTQQFriendApi;
    MsgApi: NTQQMsgApi;
    UserApi: NTQQUserApi;
    GroupApi: NTQQGroupApi;
    FlashApi: NTQQFlashApi;
    OnlineApi: NTQQOnlineApi;
}
