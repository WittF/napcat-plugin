import { Static } from '@sinclair/typebox';
export enum OB11MessageDataType {
    text = "text",
    image = "image",
    music = "music",
    video = "video",
    voice = "record",
    file = "file",
    at = "at",
    reply = "reply",
    json = "json",
    face = "face",
    mface = "mface",// 商城表情
    markdown = "markdown",
    node = "node",// 合并转发消息节点
    forward = "forward",// 合并转发消息，用于上报
    xml = "xml",
    poke = "poke",
    dice = "dice",
    rps = "rps",
    miniapp = "miniapp",// json类
    contact = "contact",
    location = "location",
    onlinefile = "onlinefile",// 在线文件/文件夹
    flashtransfer = "flashtransfer"
}
export declare const OB11MessageTextSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.text>;
    data: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageFaceSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.face>;
    data: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        resultId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        chainCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
}>;
export declare const OB11MessageMFaceSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.mface>;
    data: import("@sinclair/typebox").TObject<{
        emoji_package_id: import("@sinclair/typebox").TNumber;
        emoji_id: import("@sinclair/typebox").TString;
        key: import("@sinclair/typebox").TString;
        summary: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageAtSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.at>;
    data: import("@sinclair/typebox").TObject<{
        qq: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageReplySchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.reply>;
    data: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>;
}>;
export declare const FileBaseDataSchema: import("@sinclair/typebox").TObject<{
    file: import("@sinclair/typebox").TString;
    path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const OB11MessageFileBaseSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageImageSchema: import("@sinclair/typebox").TObject<{
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
}>;
export declare const OB11MessageRecordSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.voice>;
    data: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageVideoSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.video>;
    data: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageFileSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.file>;
    data: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TString;
        path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        thumb: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageIdMusicSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.music>;
    data: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"163">, import("@sinclair/typebox").TLiteral<"kugou">, import("@sinclair/typebox").TLiteral<"migu">, import("@sinclair/typebox").TLiteral<"kuwo">]>;
        id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
    }>;
}>;
export declare const OB11MessageCustomMusicSchema: import("@sinclair/typebox").TObject<{
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
}>;
export declare const OB11MessagePokeSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.poke>;
    data: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TString;
        id: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageDiceSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.dice>;
    data: import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
}>;
export declare const OB11MessageRPSSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.rps>;
    data: import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
}>;
export declare const OB11MessageContactSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.contact>;
    data: import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"qq">, import("@sinclair/typebox").TLiteral<"group">]>;
        id: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageLocationSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.location>;
    data: import("@sinclair/typebox").TObject<{
        lat: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        lon: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNumber]>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const OB11MessageJsonSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.json>;
    data: import("@sinclair/typebox").TObject<{
        data: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TObject<{}>]>;
        config: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            token: import("@sinclair/typebox").TString;
        }>>;
    }>;
}>;
export declare const OB11MessageXmlSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.xml>;
    data: import("@sinclair/typebox").TObject<{
        data: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageMarkdownSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.markdown>;
    data: import("@sinclair/typebox").TObject<{
        content: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageMiniAppSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.miniapp>;
    data: import("@sinclair/typebox").TObject<{
        data: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageOnlineFileSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.onlinefile>;
    data: import("@sinclair/typebox").TObject<{
        msgId: import("@sinclair/typebox").TString;
        elementId: import("@sinclair/typebox").TString;
        fileName: import("@sinclair/typebox").TString;
        fileSize: import("@sinclair/typebox").TString;
        isDir: import("@sinclair/typebox").TBoolean;
    }>;
}>;
export declare const OB11MessageFlashTransferSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.flashtransfer>;
    data: import("@sinclair/typebox").TObject<{
        fileSetId: import("@sinclair/typebox").TString;
    }>;
}>;
export declare const OB11MessageNodeSchema: import("@sinclair/typebox").TObject<{
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
}>;
export declare const OB11MessageForwardSchema: import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TLiteral<OB11MessageDataType.forward>;
    data: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
        content: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>;
}>;
export declare const OB11MessageDataSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
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
}>]>;
export declare const OB11MessageMixTypeSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
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
export declare const OB11PostSendMsgSchema: import("@sinclair/typebox").TObject<{
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
    messages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
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
    }>]>]>>;
    auto_escape: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TBoolean, import("@sinclair/typebox").TString]>>;
    source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    news: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
    }>>>;
    summary: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    prompt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const OB11SenderSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    nickname: import("@sinclair/typebox").TString;
    card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    area: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const OB11MessageSchema: import("@sinclair/typebox").TObject<{
    real_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    temp_source: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    message_sent_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    target_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    self_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    time: import("@sinclair/typebox").TNumber;
    message_id: import("@sinclair/typebox").TNumber;
    message_seq: import("@sinclair/typebox").TNumber;
    real_id: import("@sinclair/typebox").TNumber;
    user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>>;
    group_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    message_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"private">, import("@sinclair/typebox").TLiteral<"group">]>;
    sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"friend">, import("@sinclair/typebox").TLiteral<"group">, import("@sinclair/typebox").TLiteral<"normal">]>>;
    sender: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
        nickname: import("@sinclair/typebox").TString;
        card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        area: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        title: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
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
    }>]>>, import("@sinclair/typebox").TString]>;
    message_format: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"array">, import("@sinclair/typebox").TLiteral<"string">]>;
    raw_message: import("@sinclair/typebox").TString;
    font: import("@sinclair/typebox").TNumber;
    post_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    raw: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnknown>;
    emoji_likes_list: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        emoji_id: import("@sinclair/typebox").TString;
        emoji_type: import("@sinclair/typebox").TString;
        likes_cnt: import("@sinclair/typebox").TString;
    }>>>;
}>;
export type OB11MessageText = Static<typeof OB11MessageTextSchema>;
export type OB11MessageFace = Static<typeof OB11MessageFaceSchema>;
export type OB11MessageMFace = Static<typeof OB11MessageMFaceSchema>;
export type OB11MessageAt = Static<typeof OB11MessageAtSchema>;
export type OB11MessageReply = Static<typeof OB11MessageReplySchema>;
export type OB11MessageFileBase = Static<typeof OB11MessageFileBaseSchema>;
export type OB11MessageImage = Static<typeof OB11MessageImageSchema>;
export type OB11MessageRecord = Static<typeof OB11MessageRecordSchema>;
export type OB11MessageVideo = Static<typeof OB11MessageVideoSchema>;
export type OB11MessageFile = Static<typeof OB11MessageFileSchema>;
export type OB11MessageIdMusic = Static<typeof OB11MessageIdMusicSchema>;
export type OB11MessageCustomMusic = Static<typeof OB11MessageCustomMusicSchema>;
export type OB11MessagePoke = Static<typeof OB11MessagePokeSchema>;
export type OB11MessageDice = Static<typeof OB11MessageDiceSchema>;
export type OB11MessageRPS = Static<typeof OB11MessageRPSSchema>;
export type OB11MessageContact = Static<typeof OB11MessageContactSchema>;
export type OB11MessageLocation = Static<typeof OB11MessageLocationSchema>;
export type OB11MessageJson = Static<typeof OB11MessageJsonSchema>;
export type OB11MessageXml = Static<typeof OB11MessageXmlSchema>;
export type OB11MessageMarkdown = Static<typeof OB11MessageMarkdownSchema>;
export type OB11MessageMiniApp = Static<typeof OB11MessageMiniAppSchema>;
export type OB11MessageNode = Static<typeof OB11MessageNodeSchema>;
export type OB11MessageForward = Static<typeof OB11MessageForwardSchema>;
export type OB11MessageOnlineFile = Static<typeof OB11MessageOnlineFileSchema>;
export type OB11MessageFlashTransfer = Static<typeof OB11MessageFlashTransferSchema>;
export type OB11MessageData = Static<typeof OB11MessageDataSchema>;
export type OB11MessageMixType = Static<typeof OB11MessageMixTypeSchema>;
export type OB11PostSendMsg = Static<typeof OB11PostSendMsgSchema>;
export type OB11Message = Static<typeof OB11MessageSchema>;
export type OB11MessageNodePlain = OB11MessageNode & {
    data: {
        content?: Array<OB11MessageData>;
        message: Array<OB11MessageData>;
    };
};
export interface OB11Return<DataType> {
    status: string;
    retcode: number;
    data: DataType;
    message: string;
    echo?: unknown;
    wording?: string;
    stream?: 'stream-action' | 'normal-action';
}
export interface OB11ForwardMessage extends OB11Message {
    content: OB11MessageData[] | string;
}
export enum OB11MessageType {
    private = "private",
    group = "group"
}
export interface OB11PostContext {
    message_type?: 'private' | 'group';
    user_id?: string;
    group_id?: string;
}
