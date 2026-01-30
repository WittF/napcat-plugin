import { GrayTipElement, GroupNotify, MessageElement, NapCatCore, Peer, RawMessage, SendMessageElement } from '../../napcat-core';
import { NapCatOneBot11Adapter, OB11Message, OB11MessageData, OB11MessageDataType } from '../index';
import { OB11FriendAddNoticeEvent } from '../event/notice/OB11FriendAddNoticeEvent';
import { OB11GroupIncreaseEvent } from '../event/notice/OB11GroupIncreaseEvent';
import { GroupDecreaseSubType, OB11GroupDecreaseEvent } from '../event/notice/OB11GroupDecreaseEvent';
import { OB11GroupAdminNoticeEvent } from '../event/notice/OB11GroupAdminNoticeEvent';
import { OB11GroupRequestEvent } from '../event/request/OB11GroupRequest';
import { LRUCache } from '../../napcat-common/src/lru-cache';
import { OB11OnlineFileReceiveEvent } from '../event/notice/OB11OnlineFileReceiveEvent';
import { OB11OnlineFileSendEvent } from '../event/notice/OB11OnlineFileSendEvent';
type RawToOb11Converters = {
    [Key in keyof MessageElement as Key extends `${string}Element` ? Key : never]: (element: Exclude<MessageElement[Key], null | undefined>, msg: RawMessage, elementWrapper: MessageElement, context: RecvMessageContext) => Promise<OB11MessageData | null | undefined>;
};
type Ob11ToRawConverters = {
    [Key in OB11MessageDataType]: (sendMsg: Extract<OB11MessageData, {
        type: Key;
    }>, context: SendMessageContext) => Promise<SendMessageElement | undefined>;
};
export type SendMessageContext = {
    deleteAfterSentFiles: string[];
    peer: Peer;
};
export type RecvMessageContext = {
    parseMultMsg: boolean;
    disableGetUrl: boolean;
    quick_reply: boolean;
};
export declare class OneBotMsgApi {
    obContext: NapCatOneBot11Adapter;
    core: NapCatCore;
    notifyGroupInvite: LRUCache<string, GroupNotify>;
    rawToOb11Converters: RawToOb11Converters;
    ob11ToRawConverters: Ob11ToRawConverters;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    /**
       * 解析带有JSON标记的文本
       * @param text 要解析的文本
       * @returns 解析后的结果数组，每个元素包含类型(text或json)和内容
       */
    parseTextWithJson(text: string): {
        type: "text" | "json";
        content: string | object;
    }[];
    parsePrivateMsgEvent(msg: RawMessage, grayTipElement: GrayTipElement): Promise<import("../index").OB11FriendPokeEvent | OB11FriendAddNoticeEvent | undefined>;
    private getMultiMessages;
    private parseMultiMessageContent;
    parseMessage(msg: RawMessage, messagePostFormat: string, parseMultMsg?: boolean, disableGetUrl?: boolean, quick_reply?: boolean): Promise<{
        group_id?: string | number | undefined;
        emoji_likes_list?: {
            emoji_id: string;
            emoji_type: string;
            likes_cnt: string;
        }[] | undefined;
        real_seq?: string | undefined;
        temp_source?: number | undefined;
        message_sent_type?: string | undefined;
        target_id?: number | undefined;
        self_id?: number | undefined;
        group_name?: string | undefined;
        sub_type?: "normal" | "group" | "friend" | undefined;
        post_type?: string | undefined;
        raw?: unknown;
        time: number;
        message: string | ({
            type: OB11MessageDataType.text;
            data: {
                text: string;
            };
        } | {
            type: OB11MessageDataType.face;
            data: {
                resultId?: string | undefined;
                chainCount?: number | undefined;
                id: string;
            };
        } | {
            type: OB11MessageDataType.mface;
            data: {
                key: string;
                summary: string;
                emoji_package_id: number;
                emoji_id: string;
            };
        } | {
            type: OB11MessageDataType.at;
            data: {
                name?: string | undefined;
                qq: string;
            };
        } | {
            type: OB11MessageDataType.reply;
            data: {
                id?: string | undefined;
                seq?: number | undefined;
            };
        } | {
            type: OB11MessageDataType.image;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            } & {
                summary?: string | undefined;
                sub_type?: number | undefined;
            };
        } | {
            type: OB11MessageDataType.voice;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.video;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.file;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.music;
            data: {
                id: string | number;
                type: "qq" | "163" | "kugou" | "migu" | "kuwo";
            };
        } | {
            type: OB11MessageDataType.music;
            data: {
                content?: string | undefined;
                title?: string | undefined;
                audio?: string | undefined;
                id: undefined;
                type: "qq" | "163" | "kugou" | "migu" | "kuwo" | "custom";
                url: string;
                image: string;
            };
        } | {
            type: OB11MessageDataType.poke;
            data: {
                id: string;
                type: string;
            };
        } | {
            type: OB11MessageDataType.dice;
            data: {
                result: string | number;
            };
        } | {
            type: OB11MessageDataType.rps;
            data: {
                result: string | number;
            };
        } | {
            type: OB11MessageDataType.contact;
            data: {
                id: string;
                type: "qq" | "group";
            };
        } | {
            type: OB11MessageDataType.json;
            data: {
                config?: {
                    token: string;
                } | undefined;
                data: string | {};
            };
        } | {
            type: OB11MessageDataType.markdown;
            data: {
                content: string;
            };
        } | {
            type: OB11MessageDataType.node;
            data: {
                summary?: string | undefined;
                id?: string | undefined;
                time?: string | undefined;
                name?: string | undefined;
                uin?: string | number | undefined;
                source?: string | undefined;
                news?: {
                    text: string;
                }[] | undefined;
                user_id?: string | number | undefined;
                prompt?: string | undefined;
                content: any;
                nickname: string;
            };
        } | {
            type: OB11MessageDataType.forward;
            data: {
                content?: any;
                id: string;
            };
        } | {
            type: OB11MessageDataType.onlinefile;
            data: {
                elementId: string;
                fileSize: string;
                fileName: string;
                msgId: string;
                isDir: boolean;
            };
        } | {
            type: OB11MessageDataType.flashtransfer;
            data: {
                fileSetId: string;
            };
        })[];
        message_id: number;
        message_type: "group" | "private";
        real_id: number;
        message_seq: number;
        sender: {
            level?: string | undefined;
            age?: number | undefined;
            sex?: string | undefined;
            area?: string | undefined;
            title?: string | undefined;
            card?: string | undefined;
            role?: string | undefined;
            user_id: string | number;
            nickname: string;
        };
        raw_message: string;
        font: number;
        user_id: string | number;
        message_format: "string" | "array";
    } | undefined>;
    parseMessageV2(msg: RawMessage, parseMultMsg?: boolean, disableGetUrl?: boolean, quick_reply?: boolean): Promise<{
        stringMsg: {
            group_id?: string | number | undefined;
            emoji_likes_list?: {
                emoji_id: string;
                emoji_type: string;
                likes_cnt: string;
            }[] | undefined;
            real_seq?: string | undefined;
            temp_source?: number | undefined;
            message_sent_type?: string | undefined;
            target_id?: number | undefined;
            self_id?: number | undefined;
            group_name?: string | undefined;
            sub_type?: "normal" | "group" | "friend" | undefined;
            post_type?: string | undefined;
            raw?: unknown;
            time: number;
            message: string | ({
                type: OB11MessageDataType.text;
                data: {
                    text: string;
                };
            } | {
                type: OB11MessageDataType.face;
                data: {
                    resultId?: string | undefined;
                    chainCount?: number | undefined;
                    id: string;
                };
            } | {
                type: OB11MessageDataType.mface;
                data: {
                    key: string;
                    summary: string;
                    emoji_package_id: number;
                    emoji_id: string;
                };
            } | {
                type: OB11MessageDataType.at;
                data: {
                    name?: string | undefined;
                    qq: string;
                };
            } | {
                type: OB11MessageDataType.reply;
                data: {
                    id?: string | undefined;
                    seq?: number | undefined;
                };
            } | {
                type: OB11MessageDataType.image;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                } & {
                    summary?: string | undefined;
                    sub_type?: number | undefined;
                };
            } | {
                type: OB11MessageDataType.voice;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.video;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.file;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.music;
                data: {
                    id: string | number;
                    type: "qq" | "163" | "kugou" | "migu" | "kuwo";
                };
            } | {
                type: OB11MessageDataType.music;
                data: {
                    content?: string | undefined;
                    title?: string | undefined;
                    audio?: string | undefined;
                    id: undefined;
                    type: "qq" | "163" | "kugou" | "migu" | "kuwo" | "custom";
                    url: string;
                    image: string;
                };
            } | {
                type: OB11MessageDataType.poke;
                data: {
                    id: string;
                    type: string;
                };
            } | {
                type: OB11MessageDataType.dice;
                data: {
                    result: string | number;
                };
            } | {
                type: OB11MessageDataType.rps;
                data: {
                    result: string | number;
                };
            } | {
                type: OB11MessageDataType.contact;
                data: {
                    id: string;
                    type: "qq" | "group";
                };
            } | {
                type: OB11MessageDataType.json;
                data: {
                    config?: {
                        token: string;
                    } | undefined;
                    data: string | {};
                };
            } | {
                type: OB11MessageDataType.markdown;
                data: {
                    content: string;
                };
            } | {
                type: OB11MessageDataType.node;
                data: {
                    summary?: string | undefined;
                    id?: string | undefined;
                    time?: string | undefined;
                    name?: string | undefined;
                    uin?: string | number | undefined;
                    source?: string | undefined;
                    news?: {
                        text: string;
                    }[] | undefined;
                    user_id?: string | number | undefined;
                    prompt?: string | undefined;
                    content: any;
                    nickname: string;
                };
            } | {
                type: OB11MessageDataType.forward;
                data: {
                    content?: any;
                    id: string;
                };
            } | {
                type: OB11MessageDataType.onlinefile;
                data: {
                    elementId: string;
                    fileSize: string;
                    fileName: string;
                    msgId: string;
                    isDir: boolean;
                };
            } | {
                type: OB11MessageDataType.flashtransfer;
                data: {
                    fileSetId: string;
                };
            })[];
            message_id: number;
            message_type: "group" | "private";
            real_id: number;
            message_seq: number;
            sender: {
                level?: string | undefined;
                age?: number | undefined;
                sex?: string | undefined;
                area?: string | undefined;
                title?: string | undefined;
                card?: string | undefined;
                role?: string | undefined;
                user_id: string | number;
                nickname: string;
            };
            raw_message: string;
            font: number;
            user_id: string | number;
            message_format: "string" | "array";
        };
        arrayMsg: {
            group_id?: string | number | undefined;
            emoji_likes_list?: {
                emoji_id: string;
                emoji_type: string;
                likes_cnt: string;
            }[] | undefined;
            real_seq?: string | undefined;
            temp_source?: number | undefined;
            message_sent_type?: string | undefined;
            target_id?: number | undefined;
            self_id?: number | undefined;
            group_name?: string | undefined;
            sub_type?: "normal" | "group" | "friend" | undefined;
            post_type?: string | undefined;
            raw?: unknown;
            time: number;
            message: string | ({
                type: OB11MessageDataType.text;
                data: {
                    text: string;
                };
            } | {
                type: OB11MessageDataType.face;
                data: {
                    resultId?: string | undefined;
                    chainCount?: number | undefined;
                    id: string;
                };
            } | {
                type: OB11MessageDataType.mface;
                data: {
                    key: string;
                    summary: string;
                    emoji_package_id: number;
                    emoji_id: string;
                };
            } | {
                type: OB11MessageDataType.at;
                data: {
                    name?: string | undefined;
                    qq: string;
                };
            } | {
                type: OB11MessageDataType.reply;
                data: {
                    id?: string | undefined;
                    seq?: number | undefined;
                };
            } | {
                type: OB11MessageDataType.image;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                } & {
                    summary?: string | undefined;
                    sub_type?: number | undefined;
                };
            } | {
                type: OB11MessageDataType.voice;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.video;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.file;
                data: {
                    path?: string | undefined;
                    url?: string | undefined;
                    name?: string | undefined;
                    thumb?: string | undefined;
                    file: string;
                };
            } | {
                type: OB11MessageDataType.music;
                data: {
                    id: string | number;
                    type: "qq" | "163" | "kugou" | "migu" | "kuwo";
                };
            } | {
                type: OB11MessageDataType.music;
                data: {
                    content?: string | undefined;
                    title?: string | undefined;
                    audio?: string | undefined;
                    id: undefined;
                    type: "qq" | "163" | "kugou" | "migu" | "kuwo" | "custom";
                    url: string;
                    image: string;
                };
            } | {
                type: OB11MessageDataType.poke;
                data: {
                    id: string;
                    type: string;
                };
            } | {
                type: OB11MessageDataType.dice;
                data: {
                    result: string | number;
                };
            } | {
                type: OB11MessageDataType.rps;
                data: {
                    result: string | number;
                };
            } | {
                type: OB11MessageDataType.contact;
                data: {
                    id: string;
                    type: "qq" | "group";
                };
            } | {
                type: OB11MessageDataType.json;
                data: {
                    config?: {
                        token: string;
                    } | undefined;
                    data: string | {};
                };
            } | {
                type: OB11MessageDataType.markdown;
                data: {
                    content: string;
                };
            } | {
                type: OB11MessageDataType.node;
                data: {
                    summary?: string | undefined;
                    id?: string | undefined;
                    time?: string | undefined;
                    name?: string | undefined;
                    uin?: string | number | undefined;
                    source?: string | undefined;
                    news?: {
                        text: string;
                    }[] | undefined;
                    user_id?: string | number | undefined;
                    prompt?: string | undefined;
                    content: any;
                    nickname: string;
                };
            } | {
                type: OB11MessageDataType.forward;
                data: {
                    content?: any;
                    id: string;
                };
            } | {
                type: OB11MessageDataType.onlinefile;
                data: {
                    elementId: string;
                    fileSize: string;
                    fileName: string;
                    msgId: string;
                    isDir: boolean;
                };
            } | {
                type: OB11MessageDataType.flashtransfer;
                data: {
                    fileSetId: string;
                };
            })[];
            message_id: number;
            message_type: "group" | "private";
            real_id: number;
            message_seq: number;
            sender: {
                level?: string | undefined;
                age?: number | undefined;
                sex?: string | undefined;
                area?: string | undefined;
                title?: string | undefined;
                card?: string | undefined;
                role?: string | undefined;
                user_id: string | number;
                nickname: string;
            };
            raw_message: string;
            font: number;
            user_id: string | number;
            message_format: "string" | "array";
        };
    } | undefined>;
    private initializeMessage;
    private handleGroupMessage;
    private handlePrivateMessage;
    private handleTempGroupMessage;
    private parseMessageSegments;
    private convertArrayToStringMessage;
    importArrayTostringMsg(originMsg: OB11Message): Promise<{
        group_id?: string | number | undefined;
        emoji_likes_list?: {
            emoji_id: string;
            emoji_type: string;
            likes_cnt: string;
        }[] | undefined;
        real_seq?: string | undefined;
        temp_source?: number | undefined;
        message_sent_type?: string | undefined;
        target_id?: number | undefined;
        self_id?: number | undefined;
        group_name?: string | undefined;
        sub_type?: "normal" | "group" | "friend" | undefined;
        post_type?: string | undefined;
        raw?: unknown;
        time: number;
        message: string | ({
            type: OB11MessageDataType.text;
            data: {
                text: string;
            };
        } | {
            type: OB11MessageDataType.face;
            data: {
                resultId?: string | undefined;
                chainCount?: number | undefined;
                id: string;
            };
        } | {
            type: OB11MessageDataType.mface;
            data: {
                key: string;
                summary: string;
                emoji_package_id: number;
                emoji_id: string;
            };
        } | {
            type: OB11MessageDataType.at;
            data: {
                name?: string | undefined;
                qq: string;
            };
        } | {
            type: OB11MessageDataType.reply;
            data: {
                id?: string | undefined;
                seq?: number | undefined;
            };
        } | {
            type: OB11MessageDataType.image;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            } & {
                summary?: string | undefined;
                sub_type?: number | undefined;
            };
        } | {
            type: OB11MessageDataType.voice;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.video;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.file;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: OB11MessageDataType.music;
            data: {
                id: string | number;
                type: "qq" | "163" | "kugou" | "migu" | "kuwo";
            };
        } | {
            type: OB11MessageDataType.music;
            data: {
                content?: string | undefined;
                title?: string | undefined;
                audio?: string | undefined;
                id: undefined;
                type: "qq" | "163" | "kugou" | "migu" | "kuwo" | "custom";
                url: string;
                image: string;
            };
        } | {
            type: OB11MessageDataType.poke;
            data: {
                id: string;
                type: string;
            };
        } | {
            type: OB11MessageDataType.dice;
            data: {
                result: string | number;
            };
        } | {
            type: OB11MessageDataType.rps;
            data: {
                result: string | number;
            };
        } | {
            type: OB11MessageDataType.contact;
            data: {
                id: string;
                type: "qq" | "group";
            };
        } | {
            type: OB11MessageDataType.json;
            data: {
                config?: {
                    token: string;
                } | undefined;
                data: string | {};
            };
        } | {
            type: OB11MessageDataType.markdown;
            data: {
                content: string;
            };
        } | {
            type: OB11MessageDataType.node;
            data: {
                summary?: string | undefined;
                id?: string | undefined;
                time?: string | undefined;
                name?: string | undefined;
                uin?: string | number | undefined;
                source?: string | undefined;
                news?: {
                    text: string;
                }[] | undefined;
                user_id?: string | number | undefined;
                prompt?: string | undefined;
                content: any;
                nickname: string;
            };
        } | {
            type: OB11MessageDataType.forward;
            data: {
                content?: any;
                id: string;
            };
        } | {
            type: OB11MessageDataType.onlinefile;
            data: {
                elementId: string;
                fileSize: string;
                fileName: string;
                msgId: string;
                isDir: boolean;
            };
        } | {
            type: OB11MessageDataType.flashtransfer;
            data: {
                fileSetId: string;
            };
        })[];
        message_id: number;
        message_type: "group" | "private";
        real_id: number;
        message_seq: number;
        sender: {
            level?: string | undefined;
            age?: number | undefined;
            sex?: string | undefined;
            area?: string | undefined;
            title?: string | undefined;
            card?: string | undefined;
            role?: string | undefined;
            user_id: string | number;
            nickname: string;
        };
        raw_message: string;
        font: number;
        user_id: string | number;
        message_format: "string" | "array";
    }>;
    createSendElements(messageData: OB11MessageData[], peer: Peer, ignoreTypes?: OB11MessageDataType[]): Promise<{
        sendElements: SendMessageElement[];
        deleteAfterSentFiles: string[];
    }>;
    sendMsgWithOb11UniqueId(peer: Peer, sendElements: SendMessageElement[], deleteAfterSentFiles: string[]): Promise<RawMessage>;
    private handleOb11FileLikeMessage;
    handleObfuckName(name: string): Promise<string | undefined>;
    groupChangDecreseType2String(type: number): GroupDecreaseSubType;
    waitGroupNotify(groupUin: string, memberUid?: string, operatorUid?: string): Promise<string | undefined>;
    parseSysMessage(msg: number[]): Promise<OB11GroupIncreaseEvent | import("../index").OB11ProfileLikeEvent | OB11GroupDecreaseEvent | OB11GroupAdminNoticeEvent | OB11GroupRequestEvent | OB11OnlineFileReceiveEvent | OB11OnlineFileSendEvent | undefined>;
}
export {};
