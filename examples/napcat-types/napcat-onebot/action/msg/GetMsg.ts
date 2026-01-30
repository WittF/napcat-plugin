import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    time: import("@sinclair/typebox").TNumber;
    message_type: import("@sinclair/typebox").TString;
    message_id: import("@sinclair/typebox").TNumber;
    real_id: import("@sinclair/typebox").TNumber;
    message_seq: import("@sinclair/typebox").TNumber;
    sender: import("@sinclair/typebox").TAny;
    message: import("@sinclair/typebox").TAny;
    raw_message: import("@sinclair/typebox").TString;
    font: import("@sinclair/typebox").TNumber;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
    user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    emoji_likes_list: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
declare class GetMsg extends OneBotAction<PayloadType, ReturnType> {
    actionName: "get_msg";
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        time: import("@sinclair/typebox").TNumber;
        message_type: import("@sinclair/typebox").TString;
        message_id: import("@sinclair/typebox").TNumber;
        real_id: import("@sinclair/typebox").TNumber;
        message_seq: import("@sinclair/typebox").TNumber;
        sender: import("@sinclair/typebox").TAny;
        message: import("@sinclair/typebox").TAny;
        raw_message: import("@sinclair/typebox").TString;
        font: import("@sinclair/typebox").TNumber;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
        user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        emoji_likes_list: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_id: number;
    };
    returnExample: {
        time: number;
        message_type: string;
        message_id: number;
        real_id: number;
        sender: {
            user_id: number;
            nickname: string;
        };
        message: string;
    };
    _handle(payload: PayloadType, _adapter: string, config: NetworkAdapterConfig): Promise<{
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
            type: import("index").OB11MessageDataType.text;
            data: {
                text: string;
            };
        } | {
            type: import("index").OB11MessageDataType.face;
            data: {
                resultId?: string | undefined;
                chainCount?: number | undefined;
                id: string;
            };
        } | {
            type: import("index").OB11MessageDataType.mface;
            data: {
                key: string;
                summary: string;
                emoji_package_id: number;
                emoji_id: string;
            };
        } | {
            type: import("index").OB11MessageDataType.at;
            data: {
                name?: string | undefined;
                qq: string;
            };
        } | {
            type: import("index").OB11MessageDataType.reply;
            data: {
                id?: string | undefined;
                seq?: number | undefined;
            };
        } | {
            type: import("index").OB11MessageDataType.image;
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
            type: import("index").OB11MessageDataType.voice;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: import("index").OB11MessageDataType.video;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: import("index").OB11MessageDataType.file;
            data: {
                path?: string | undefined;
                url?: string | undefined;
                name?: string | undefined;
                thumb?: string | undefined;
                file: string;
            };
        } | {
            type: import("index").OB11MessageDataType.music;
            data: {
                id: string | number;
                type: "qq" | "163" | "kugou" | "migu" | "kuwo";
            };
        } | {
            type: import("index").OB11MessageDataType.music;
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
            type: import("index").OB11MessageDataType.poke;
            data: {
                id: string;
                type: string;
            };
        } | {
            type: import("index").OB11MessageDataType.dice;
            data: {
                result: string | number;
            };
        } | {
            type: import("index").OB11MessageDataType.rps;
            data: {
                result: string | number;
            };
        } | {
            type: import("index").OB11MessageDataType.contact;
            data: {
                id: string;
                type: "qq" | "group";
            };
        } | {
            type: import("index").OB11MessageDataType.json;
            data: {
                config?: {
                    token: string;
                } | undefined;
                data: string | {};
            };
        } | {
            type: import("index").OB11MessageDataType.markdown;
            data: {
                content: string;
            };
        } | {
            type: import("index").OB11MessageDataType.node;
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
            type: import("index").OB11MessageDataType.forward;
            data: {
                content?: any;
                id: string;
            };
        } | {
            type: import("index").OB11MessageDataType.onlinefile;
            data: {
                elementId: string;
                fileSize: string;
                fileName: string;
                msgId: string;
                isDir: boolean;
            };
        } | {
            type: import("index").OB11MessageDataType.flashtransfer;
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
}
export default GetMsg;
