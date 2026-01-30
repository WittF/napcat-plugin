import { NapCatOneBot11Adapter } from '../index';
import { NapCatCore, PicSubType, SendFileElement, SendPicElement, SendPttElement, SendVideoElement } from '../../napcat-core';
import { SendMessageContext } from './msg';
export declare class OneBotFileApi {
    obContext: NapCatOneBot11Adapter;
    core: NapCatCore;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    createValidSendFileElement(context: SendMessageContext, filePath: string, fileName?: string, folderId?: string, uploadGroupFile?: boolean): Promise<SendFileElement>;
    createValidSendPicElement(context: SendMessageContext, picPath: string, summary?: string, subType?: PicSubType): Promise<SendPicElement>;
    createValidSendVideoElement(context: SendMessageContext, filePath: string, fileName?: string, _diyThumbPath?: string): Promise<SendVideoElement>;
    createValidSendPttElement(_context: SendMessageContext, pttPath: string): Promise<SendPttElement>;
}
