import { GrayTipElement, NapCatCore } from '../../napcat-core';
import { NapCatOneBot11Adapter } from '../index';
import { OB11FriendPokeEvent } from '../event/notice/OB11PokeEvent';
export declare class OneBotFriendApi {
    obContext: NapCatOneBot11Adapter;
    core: NapCatCore;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    parsePrivatePokeEvent(grayTipElement: GrayTipElement, uin: number): Promise<OB11FriendPokeEvent | undefined>;
}
