import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"bili">, import("@sinclair/typebox").TLiteral<"weibo">]>;
    title: import("@sinclair/typebox").TString;
    desc: import("@sinclair/typebox").TString;
    picUrl: import("@sinclair/typebox").TString;
    jumpUrl: import("@sinclair/typebox").TString;
    webUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    rawArkData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>, import("@sinclair/typebox").TObject<{
    title: import("@sinclair/typebox").TString;
    desc: import("@sinclair/typebox").TString;
    picUrl: import("@sinclair/typebox").TString;
    jumpUrl: import("@sinclair/typebox").TString;
    iconUrl: import("@sinclair/typebox").TString;
    webUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    appId: import("@sinclair/typebox").TString;
    scene: import("@sinclair/typebox").TString;
    templateType: import("@sinclair/typebox").TString;
    businessType: import("@sinclair/typebox").TString;
    verType: import("@sinclair/typebox").TString;
    shareType: import("@sinclair/typebox").TString;
    versionId: import("@sinclair/typebox").TString;
    sdkId: import("@sinclair/typebox").TString;
    withShareTicket: import("@sinclair/typebox").TString;
    rawArkData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>]>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    data: import("@sinclair/typebox").TAny;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetMiniAppArk extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "get_mini_app_ark";
    payloadSchema: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"bili">, import("@sinclair/typebox").TLiteral<"weibo">]>;
        title: import("@sinclair/typebox").TString;
        desc: import("@sinclair/typebox").TString;
        picUrl: import("@sinclair/typebox").TString;
        jumpUrl: import("@sinclair/typebox").TString;
        webUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        rawArkData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>, import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        desc: import("@sinclair/typebox").TString;
        picUrl: import("@sinclair/typebox").TString;
        jumpUrl: import("@sinclair/typebox").TString;
        iconUrl: import("@sinclair/typebox").TString;
        webUrl: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        appId: import("@sinclair/typebox").TString;
        scene: import("@sinclair/typebox").TString;
        templateType: import("@sinclair/typebox").TString;
        businessType: import("@sinclair/typebox").TString;
        verType: import("@sinclair/typebox").TString;
        shareType: import("@sinclair/typebox").TString;
        versionId: import("@sinclair/typebox").TString;
        sdkId: import("@sinclair/typebox").TString;
        withShareTicket: import("@sinclair/typebox").TString;
        rawArkData: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>]>;
    returnSchema: import("@sinclair/typebox").TObject<{
        data: import("@sinclair/typebox").TAny;
    }>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        type: string;
        title: string;
        desc: string;
        picUrl: string;
        jumpUrl: string;
    };
    returnExample: {
        data: {
            ark: string;
        };
    };
    _handle(payload: PayloadType): Promise<{
        data: import("../../../napcat-core/packet/entities/miniApp").MiniAppData | import("../../../napcat-core/packet/entities/miniApp").MiniAppRawData;
    }>;
}
export {};
