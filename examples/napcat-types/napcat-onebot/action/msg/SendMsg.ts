import { OB11MessageData, OB11MessageDataType, OB11MessageMixType, OB11PostContext } from '../../types';
import { BaseCheckResult } from '../../action/router';
import { NapCatCore, Peer, RawMessage } from '../../../napcat-core';
import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const SendMsgPayloadSchema: import("@sinclair/typebox").TObject<{
    message_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"private">, import("@sinclair/typebox").TLiteral<"group">]>>;
    user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.text>;
        data: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.face>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            resultId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            chainCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.mface>;
        data: import("@sinclair/typebox").TObject<{
            emoji_package_id: import("@sinclair/typebox").TNumber;
            emoji_id: import("@sinclair/typebox").TString;
            key: import("@sinclair/typebox").TString;
            summary: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.at>;
        data: import("@sinclair/typebox").TObject<{
            qq: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.reply>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.image>;
        data: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>, import("@sinclair/typebox").TObject<{
            summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>]>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.voice>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.video>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.file>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">]>;
            id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">, import("@sinclair/typebox").TLiteral<"custom">]>;
            id: import("@sinclair/typebox").TUndefined;
            url: import("@sinclair/typebox").TString;
            audio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            image: import("@sinclair/typebox").TString;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.poke>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TString;
            id: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.dice>;
        data: import("@sinclair/typebox").TObject<{
            result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.rps>;
        data: import("@sinclair/typebox").TObject<{
            result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.contact>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"group">]>;
            id: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.json>;
        data: import("@sinclair/typebox").TObject<{
            data: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{}>]>;
            config: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                token: import("@sinclair/typebox").TString;
            }>>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.markdown>;
        data: import("@sinclair/typebox").TObject<{
            content: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.node>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
            uin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
            nickname: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            content: import("@sinclair/typebox").TAny;
            source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
            }>>>;
            summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.forward>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.onlinefile>;
        data: import("@sinclair/typebox").TObject<{
            msgId: import("@sinclair/typebox").TString;
            elementId: import("@sinclair/typebox").TString;
            fileName: import("@sinclair/typebox").TString;
            fileSize: import("@sinclair/typebox").TString;
            isDir: import("@sinclair/typebox").TBoolean;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.flashtransfer>;
        data: import("@sinclair/typebox").TObject<{
            fileSetId: import("@sinclair/typebox").TString;
        }>;
    }>]>>, import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.text>;
        data: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.face>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            resultId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            chainCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.mface>;
        data: import("@sinclair/typebox").TObject<{
            emoji_package_id: import("@sinclair/typebox").TNumber;
            emoji_id: import("@sinclair/typebox").TString;
            key: import("@sinclair/typebox").TString;
            summary: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.at>;
        data: import("@sinclair/typebox").TObject<{
            qq: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.reply>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.image>;
        data: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>, import("@sinclair/typebox").TObject<{
            summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>]>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.voice>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.video>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.file>;
        data: import("@sinclair/typebox").TObject<{
            file: import("@sinclair/typebox").TString;
            path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">]>;
            id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">, import("@sinclair/typebox").TLiteral<"custom">]>;
            id: import("@sinclair/typebox").TUndefined;
            url: import("@sinclair/typebox").TString;
            audio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            image: import("@sinclair/typebox").TString;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.poke>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TString;
            id: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.dice>;
        data: import("@sinclair/typebox").TObject<{
            result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.rps>;
        data: import("@sinclair/typebox").TObject<{
            result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.contact>;
        data: import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"group">]>;
            id: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.json>;
        data: import("@sinclair/typebox").TObject<{
            data: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{}>]>;
            config: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                token: import("@sinclair/typebox").TString;
            }>>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.markdown>;
        data: import("@sinclair/typebox").TObject<{
            content: import("@sinclair/typebox").TString;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.node>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
            uin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
            nickname: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            content: import("@sinclair/typebox").TAny;
            source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
            }>>>;
            summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.forward>;
        data: import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TString;
            content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.onlinefile>;
        data: import("@sinclair/typebox").TObject<{
            msgId: import("@sinclair/typebox").TString;
            elementId: import("@sinclair/typebox").TString;
            fileName: import("@sinclair/typebox").TString;
            fileSize: import("@sinclair/typebox").TString;
            isDir: import("@sinclair/typebox").TBoolean;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.flashtransfer>;
        data: import("@sinclair/typebox").TObject<{
            fileSetId: import("@sinclair/typebox").TString;
        }>;
    }>]>]>;
    auto_escape: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
    }>>>;
    summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type SendMsgPayload = Static<typeof SendMsgPayloadSchema>;
export declare const SendMsgReturnSchema: import("@sinclair/typebox").TObject<{
    message_id: import("@sinclair/typebox").TNumber;
    res_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    forward_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type ReturnDataType = Static<typeof SendMsgReturnSchema>;
export enum ContextMode {
    Normal = 0,
    Private = 1,
    Group = 2
}
export declare function normalize(message: OB11MessageMixType, autoEscape?: boolean): OB11MessageData[];
export declare function createContext(core: NapCatCore, payload: OB11PostContext | undefined, contextMode?: ContextMode): Promise<Peer>;
export declare class SendMsgBase extends OneBotAction<SendMsgPayload, ReturnDataType> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        message_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"private">, import("@sinclair/typebox").TLiteral<"group">]>>;
        user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.text>;
            data: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.face>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                resultId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chainCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.mface>;
            data: import("@sinclair/typebox").TObject<{
                emoji_package_id: import("@sinclair/typebox").TNumber;
                emoji_id: import("@sinclair/typebox").TString;
                key: import("@sinclair/typebox").TString;
                summary: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.at>;
            data: import("@sinclair/typebox").TObject<{
                qq: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.reply>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.image>;
            data: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TObject<{
                summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>]>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.voice>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.video>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.file>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">]>;
                id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">, import("@sinclair/typebox").TLiteral<"custom">]>;
                id: import("@sinclair/typebox").TUndefined;
                url: import("@sinclair/typebox").TString;
                audio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                image: import("@sinclair/typebox").TString;
                content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.poke>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TString;
                id: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.dice>;
            data: import("@sinclair/typebox").TObject<{
                result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.rps>;
            data: import("@sinclair/typebox").TObject<{
                result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.contact>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"group">]>;
                id: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.json>;
            data: import("@sinclair/typebox").TObject<{
                data: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{}>]>;
                config: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    token: import("@sinclair/typebox").TString;
                }>>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.markdown>;
            data: import("@sinclair/typebox").TObject<{
                content: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.node>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
                uin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
                nickname: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                content: import("@sinclair/typebox").TAny;
                source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                }>>>;
                summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.forward>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.onlinefile>;
            data: import("@sinclair/typebox").TObject<{
                msgId: import("@sinclair/typebox").TString;
                elementId: import("@sinclair/typebox").TString;
                fileName: import("@sinclair/typebox").TString;
                fileSize: import("@sinclair/typebox").TString;
                isDir: import("@sinclair/typebox").TBoolean;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.flashtransfer>;
            data: import("@sinclair/typebox").TObject<{
                fileSetId: import("@sinclair/typebox").TString;
            }>;
        }>]>>, import("@sinclair/typebox").TString, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.text>;
            data: import("@sinclair/typebox").TObject<{
                text: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.face>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                resultId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                chainCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.mface>;
            data: import("@sinclair/typebox").TObject<{
                emoji_package_id: import("@sinclair/typebox").TNumber;
                emoji_id: import("@sinclair/typebox").TString;
                key: import("@sinclair/typebox").TString;
                summary: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.at>;
            data: import("@sinclair/typebox").TObject<{
                qq: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.reply>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.image>;
            data: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>, import("@sinclair/typebox").TObject<{
                summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>]>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.voice>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.video>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.file>;
            data: import("@sinclair/typebox").TObject<{
                file: import("@sinclair/typebox").TString;
                path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">]>;
                id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">, import("@sinclair/typebox").TLiteral<"custom">]>;
                id: import("@sinclair/typebox").TUndefined;
                url: import("@sinclair/typebox").TString;
                audio: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                image: import("@sinclair/typebox").TString;
                content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.poke>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TString;
                id: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.dice>;
            data: import("@sinclair/typebox").TObject<{
                result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.rps>;
            data: import("@sinclair/typebox").TObject<{
                result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.contact>;
            data: import("@sinclair/typebox").TObject<{
                type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"group">]>;
                id: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.json>;
            data: import("@sinclair/typebox").TObject<{
                data: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{}>]>;
                config: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                    token: import("@sinclair/typebox").TString;
                }>>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.markdown>;
            data: import("@sinclair/typebox").TObject<{
                content: import("@sinclair/typebox").TString;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.node>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                user_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
                uin: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
                nickname: import("@sinclair/typebox").TString;
                name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                content: import("@sinclair/typebox").TAny;
                source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                    text: import("@sinclair/typebox").TString;
                }>>>;
                summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.forward>;
            data: import("@sinclair/typebox").TObject<{
                id: import("@sinclair/typebox").TString;
                content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.onlinefile>;
            data: import("@sinclair/typebox").TObject<{
                msgId: import("@sinclair/typebox").TString;
                elementId: import("@sinclair/typebox").TString;
                fileName: import("@sinclair/typebox").TString;
                fileSize: import("@sinclair/typebox").TString;
                isDir: import("@sinclair/typebox").TBoolean;
            }>;
        }>, import("@sinclair/typebox").TObject<{
            type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.flashtransfer>;
            data: import("@sinclair/typebox").TObject<{
                fileSetId: import("@sinclair/typebox").TString;
            }>;
        }>]>]>;
        auto_escape: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
        source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
        }>>>;
        summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        message_id: import("@sinclair/typebox").TNumber;
        res_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        forward_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    actionTags: string[];
    protected check(payload: SendMsgPayload): Promise<BaseCheckResult>;
    _handle(payload: SendMsgPayload): Promise<ReturnDataType>;
    base_handle(payload: SendMsgPayload, contextMode?: ContextMode): Promise<ReturnDataType>;
    private uploadForwardedNodesPacket;
    private handleForwardedNodesPacket;
    private handleForwardedNodes;
    cloneMsg(msg: RawMessage): Promise<RawMessage | undefined>;
}
export default class SendMsg extends SendMsgBase {
    actionName: "send_msg";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        message_type: string;
        group_id: string;
        message: string;
    };
    returnExample: {
        message_id: number;
    };
}
