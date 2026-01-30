import { ChatType } from './msg';
/**
 * 聊天缓存列表
 */
export interface ChatCacheList {
    pageCount: number;
    infos: ChatCacheListItem[];
}
/**
 * 聊天缓存列表项
 */
export interface ChatCacheListItem {
    chatType: ChatType;
    basicChatCacheInfo: ChatCacheListItemBasic;
    guildChatCacheInfo: unknown[];
}
/**
 * 基本聊天缓存信息
 */
export interface ChatCacheListItemBasic {
    chatSize: string;
    chatTime: string;
    uid: string;
    uin: string;
    remarkName: string;
    nickName: string;
    chatType?: ChatType;
    isChecked?: boolean;
}
/**
 * 缓存文件类型枚举
 */
export enum CacheFileType {
    IMAGE = 0,// 图片
    VIDEO = 1,// 视频
    AUDIO = 2,// 音频
    DOCUMENT = 3,// 文档
    OTHER = 4
}
/**
 * 缓存文件列表
 */
export interface CacheFileList {
    infos: CacheFileListItem[];
}
/**
 * 缓存文件列表项
 */
export interface CacheFileListItem {
    fileSize: string;
    fileTime: string;
    fileKey: string;
    elementId: string;
    elementIdStr: string;
    fileType: CacheFileType;
    path: string;
    fileName: string;
    senderId: string;
    previewPath: string;
    senderName: string;
    isChecked?: boolean;
}
