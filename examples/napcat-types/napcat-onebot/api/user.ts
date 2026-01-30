import { NapCatCore } from '../../napcat-core';
import { NapCatOneBot11Adapter } from '../index';
import { OB11ProfileLikeEvent } from '../event/notice/OB11ProfileLikeEvent';
export declare class OneBotUserApi {
    obContext: NapCatOneBot11Adapter;
    core: NapCatCore;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    parseLikeEvent(wrappedBody: Uint8Array): Promise<OB11ProfileLikeEvent | undefined>;
}
