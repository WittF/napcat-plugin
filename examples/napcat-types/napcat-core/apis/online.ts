import { InstanceContext, NapCatCore } from '../../napcat-core';
import { Peer } from '../types';
export declare class NTQQOnlineApi {
    context: InstanceContext;
    core: NapCatCore;
    constructor(context: InstanceContext, core: NapCatCore);
    /**
     * 这里不等待node返回，因为the fuck wrapper.node 根本不返回（会卡死不知道为什么）！！！  只能手动查询判断死活
     * @param peer
     * @param filePath
     * @param fileName
     */
    sendOnlineFile(peer: Peer, filePath: string, fileName: string): Promise<any>;
    /**
     * 发送在线文件夹
     * @param peer
     * @param folderPath
     * @param folderName
     */
    sendOnlineFolder(peer: Peer, folderPath: string, folderName?: string): Promise<any>;
    /**
     * 获取好友的在线文件消息
     * @param peer
     */
    getOnlineFileMsg(peer: Peer): Promise<any>;
    /**
     * 取消在线文件的发送
     * @param peer
     * @param msgId
     */
    cancelMyOnlineFileMsg(peer: Peer, msgId: string): Promise<void>;
    /**
     * 拒绝接收在线文件
     * @param peer
     * @param msgId
     * @param elementId
     */
    refuseOnlineFileMsg(peer: Peer, msgId: string, elementId: string): Promise<void>;
    /**
     * 接收在线文件/文件夹
     * @param peer
     * @param msgId
     * @param elementId
     * @constructor
     */
    receiveOnlineFileOrFolder(peer: Peer, msgId: string, elementId: string): Promise<any>;
    /**
     * 在线文件/文件夹转离线
     * @param peer
     * @param msgId
     */
    switchFileToOffline(peer: Peer, msgId: string): Promise<void>;
}
