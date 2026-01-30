import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIGlobalAdapter } from './adapters';
import { GeneralCallResult, NodeIKernelAvatarService, NodeIKernelBuddyService, NodeIKernelGroupService, NodeIKernelLoginService, NodeIKernelMsgService, NodeIKernelProfileLikeService, NodeIKernelProfileService, NodeIKernelRichMediaService, NodeIKernelRobotService, NodeIKernelSessionListener, NodeIKernelStorageCleanService, NodeIKernelTicketService, NodeIKernelTipOffService } from './index';
import { NodeIKernelNodeMiscService } from './services/NodeIKernelNodeMiscService';
import { NodeIKernelUixConvertService } from './services/NodeIKernelUixConvertService';
import { NodeIKernelMsgBackupService } from './services/NodeIKernelMsgBackupService';
import { NodeIKernelAlbumService } from './services/NodeIKernelAlbumService';
import { NodeIKernelTianShuService } from './services/NodeIKernelTianShuService';
import { NodeIKernelUnitedConfigService } from './services/NodeIKernelUnitedConfigService';
import { NodeIKernelSearchService } from './services/NodeIKernelSearchService';
import { NodeIKernelCollectionService } from './services/NodeIKernelCollectionService';
import { NodeIKernelRecentContactService } from './services/NodeIKernelRecentContactService';
import { NodeIKernelMSFService } from './services/NodeIKernelMSFService';
import { NodeIkernelTestPerformanceService } from './services/NodeIkernelTestPerformanceService';
import { NodeIKernelECDHService } from './services/NodeIKernelECDHService';
import { NodeIO3MiscService } from './services/NodeIO3MiscService';
import { NodeIKernelFlashTransferService } from './services/NodeIKernelFlashTransferService';
export interface NodeQQNTWrapperUtil {
    get(): NodeQQNTWrapperUtil;
    getNTUserDataInfoConfig(): string;
    emptyWorkingSet(n: number): void;
    getSsoCmdOfOidbReq(arg1: number, arg2: number): unknown;
    getSsoBufferOfOidbReq(...args: unknown[]): unknown;
    getOidbRspInfo(arg: string): unknown;
    getFileSize(path: string): Promise<number>;
    genFileMd5Buf(arg: string): unknown;
    genFileMd5Hex(path: string): unknown;
    genFileShaBuf(path: string): unknown;
    genFileCumulateSha1(path: string): unknown;
    genFileShaHex(path: string): unknown;
    fileIsExist(path: string): unknown;
    startTrace(path: string): unknown;
    copyFile(src: string, dst: string): unknown;
    genFileShaAndMd5Hex(path: string, unknown: number): unknown;
    setTraceInfo(unknown: unknown): unknown;
    encodeOffLine(unknown: unknown): unknown;
    decodeOffLine(arg: string): unknown;
    DecoderRecentInfo(arg: string): unknown;
    getPinyin(arg0: string, arg1: boolean): unknown;
    matchInPinyin(arg0: unknown[], arg1: string): unknown;
    makeDirByPath(arg0: string): unknown;
    emptyWorkingSet(arg0: number): unknown;
    runProcess(arg0: string, arg1: boolean): unknown;
    runProcessArgs(arg0: string, arg1: {
        [key: string]: string;
    }, arg2: boolean): unknown;
    calcThumbSize(arg0: number, arg1: number, arg2: unknown): unknown;
    fullWordToHalfWord(word: string): unknown;
    getNTUserDataInfoConfig(): unknown;
    pathIsReadableAndWriteable(path: string): unknown;
    resetUserDataSavePathToDocument(): unknown;
    getSoBuildInfo(): unknown;
    registerCountInstruments(arg0: string, arg1: string[], arg2: number, arg3: number): unknown;
    registerValueInstruments(arg0: string, arg1: string[], arg2: number, arg3: number): unknown;
    registerValueInstrumentsWithBoundary(arg0: string, arg1: unknown, arg2: unknown, arg3: number, arg4: number): unknown;
    reportCountIndicators(arg0: string, arg1: Map<unknown, unknown>, arg2: string, arg3: number, arg4: boolean): unknown;
    reportValueIndicators(arg0: string, arg1: Map<unknown, unknown>, arg2: string, arg3: boolean, arg4: number): unknown;
    checkNewUserDataSaveDirAvailable(arg0: string): unknown;
    copyUserData(arg0: string, arg1: string): Promise<unknown>;
    setUserDataSaveDirectory(arg0: string): Promise<unknown>;
    hasOtherRunningQQProcess(): boolean;
    quitAllRunningQQProcess(arg: boolean): unknown;
    checkNvidiaConfig(): unknown;
    repairNvidiaConfig(): unknown;
    getNvidiaDriverVersion(): unknown;
    isNull(): unknown;
    createThumbnailImage(serviceName: string, filePath: string, targetPath: string, imgSize: {
        width: number;
        height: number;
    }, fileFormat: string, arg: number | null | undefined): Promise<GeneralCallResult & {
        targetPath?: string;
    }>;
}
export interface NodeIQQNTStartupSessionWrapper {
    create(): NodeIQQNTStartupSessionWrapper;
    stop(): void;
    start(): void;
    createWithModuleList(uk: unknown): unknown;
    getSessionIdList(): unknown;
}
export interface NodeIQQNTWrapperSession {
    getNTWrapperSession(str: string): NodeIQQNTWrapperSession;
    get(): NodeIQQNTWrapperSession;
    new (): NodeIQQNTWrapperSession;
    create(): NodeIQQNTWrapperSession;
    init(wrapperSessionInitConfig: WrapperSessionInitConfig, nodeIDependsAdapter: NodeIDependsAdapter, nodeIDispatcherAdapter: NodeIDispatcherAdapter, nodeIKernelSessionListener: NodeIKernelSessionListener): void;
    startNT(session: number): void;
    startNT(): void;
    getBdhUploadService(): unknown;
    getECDHService(): NodeIKernelECDHService;
    getMsgService(): NodeIKernelMsgService;
    getProfileService(): NodeIKernelProfileService;
    getProfileLikeService(): NodeIKernelProfileLikeService;
    getGroupService(): NodeIKernelGroupService;
    getStorageCleanService(): NodeIKernelStorageCleanService;
    getBuddyService(): NodeIKernelBuddyService;
    getRobotService(): NodeIKernelRobotService;
    getTicketService(): NodeIKernelTicketService;
    getTipOffService(): NodeIKernelTipOffService;
    getNodeMiscService(): NodeIKernelNodeMiscService;
    getRichMediaService(): NodeIKernelRichMediaService;
    getMsgBackupService(): NodeIKernelMsgBackupService;
    getAlbumService(): NodeIKernelAlbumService;
    getTianShuService(): NodeIKernelTianShuService;
    getUnitedConfigService(): NodeIKernelUnitedConfigService;
    getSearchService(): NodeIKernelSearchService;
    getFlashTransferService(): NodeIKernelFlashTransferService;
    getDirectSessionService(): unknown;
    getRDeliveryService(): unknown;
    getAvatarService(): NodeIKernelAvatarService;
    getFeedChannelService(): unknown;
    getYellowFaceService(): unknown;
    getCollectionService(): NodeIKernelCollectionService;
    getSettingService(): unknown;
    getQiDianService(): unknown;
    getFileAssistantService(): unknown;
    getGuildService(): unknown;
    getSkinService(): unknown;
    getTestPerformanceService(): NodeIkernelTestPerformanceService;
    getQQPlayService(): unknown;
    getDbToolsService(): unknown;
    getUixConvertService(): NodeIKernelUixConvertService;
    getOnlineStatusService(): unknown;
    getRemotingService(): unknown;
    getGroupTabService(): unknown;
    getGroupSchoolService(): unknown;
    getLiteBusinessService(): unknown;
    getGuildMsgService(): unknown;
    getLockService(): unknown;
    getMSFService(): NodeIKernelMSFService;
    getGuildHotUpdateService(): unknown;
    getAVSDKService(): unknown;
    getRecentContactService(): NodeIKernelRecentContactService;
    getConfigMgrService(): unknown;
}
export interface EnginInitDesktopConfig {
    base_path_prefix: string;
    platform_type: PlatformType;
    app_type: 4;
    app_version: string;
    os_version: string;
    use_xlog: boolean;
    qua: string;
    global_path_config: {
        desktopGlobalPath: string;
    };
    thumb_config: {
        maxSide: 324;
        minSide: 48;
        longLimit: 6;
        density: 2;
    };
}
export interface NodeIQQNTWrapperEngine {
    get(): NodeIQQNTWrapperEngine;
    initWithDeskTopConfig(config: EnginInitDesktopConfig, nodeIGlobalAdapter: NodeIGlobalAdapter): void;
}
export interface WrapperNodeApi {
    NodeIO3MiscService: NodeIO3MiscService;
    NodeQQNTWrapperUtil: NodeQQNTWrapperUtil;
    NodeIQQNTWrapperSession: NodeIQQNTWrapperSession;
    NodeIQQNTStartupSessionWrapper: NodeIQQNTStartupSessionWrapper;
    NodeIQQNTWrapperEngine: NodeIQQNTWrapperEngine;
    NodeIKernelLoginService: NodeIKernelLoginService;
}
export enum PlatformType {
    KUNKNOWN = 0,
    KANDROID = 1,
    KIOS = 2,
    KWINDOWS = 3,
    KMAC = 4,
    KLINUX = 5
}
export enum DeviceType {
    KUNKNOWN = 0,
    KPHONE = 1,
    KPAD = 2,
    KCOMPUTER = 3
}
export enum VendorType {
    KNOSETONIOS = 0,
    KSUPPORTGOOGLEPUSH = 99,
    KSUPPORTHMS = 3,
    KSUPPORTOPPOPUSH = 4,
    KSUPPORTTPNS = 2,
    KSUPPORTVIVOPUSH = 5,
    KUNSUPPORTANDROIDPUSH = 1
}
export interface WrapperSessionInitConfig {
    selfUin: string;
    selfUid: string;
    desktopPathConfig: {
        account_path: string;
    };
    clientVer: string;
    a2: string;
    d2: string;
    d2Key: string;
    machineId: string;
    platform: PlatformType;
    platVer: string;
    appid: string;
    rdeliveryConfig: {
        appKey: string;
        systemId: number;
        appId: string;
        logicEnvironment: string;
        platform: PlatformType;
        language: string;
        sdkVersion: string;
        userId: string;
        appVersion: string;
        osVersion: string;
        bundleId: string;
        serverUrl: string;
        fixedAfterHitKeys: string[];
    };
    defaultFileDownloadPath: string;
    deviceInfo: {
        guid: string;
        buildVer: string;
        localId: number;
        devName: string;
        devType: string;
        vendorName: string;
        osVer: string;
        vendorOsName: string;
        setMute: boolean;
        vendorType: VendorType;
    };
    deviceConfig: '{"appearance":{"isSplitViewMode":true},"msg":{}}';
}
