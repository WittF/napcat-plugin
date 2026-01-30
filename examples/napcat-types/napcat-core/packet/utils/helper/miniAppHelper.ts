import { MiniAppData, MiniAppReqParams, MiniAppRawData, MiniAppReqCustomParams, MiniAppReqTemplateParams } from '../../../packet/entities/miniApp';
type MiniAppTemplateNameList = 'bili' | 'weibo';
export declare abstract class MiniAppInfo {
    static readonly sdkId: string;
    template: MiniAppReqTemplateParams;
    private static readonly appMap;
    protected constructor(template: MiniAppReqTemplateParams);
    static get(name: MiniAppTemplateNameList): MiniAppInfo | undefined;
    static readonly Bili: {
        template: MiniAppReqTemplateParams;
    };
    static readonly WeiBo: {
        template: MiniAppReqTemplateParams;
    };
}
export declare class MiniAppInfoHelper {
    static generateReq(custom: MiniAppReqCustomParams, template: MiniAppReqTemplateParams): MiniAppReqParams;
    static RawToSend(rawData: MiniAppRawData): MiniAppData;
    static SendToRaw(data: MiniAppData): MiniAppRawData;
}
export {};
