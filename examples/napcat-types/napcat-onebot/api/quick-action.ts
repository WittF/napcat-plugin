import type { NapCatOneBot11Adapter, OB11Message, QuickAction, QuickActionEvent, QuickActionFriendRequest, QuickActionGroupRequest } from '../index';
import { type NapCatCore } from '../../napcat-core';
import type { OB11FriendRequestEvent } from '../event/request/OB11FriendRequest';
import type { OB11GroupRequestEvent } from '../event/request/OB11GroupRequest';
export declare class OneBotQuickActionApi {
    obContext: NapCatOneBot11Adapter;
    core: NapCatCore;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    handleQuickOperation(eventContext: QuickActionEvent, quickAction: QuickAction): Promise<void>;
    handleMsg(msg: OB11Message, quickAction: QuickAction): Promise<void>;
    findNotify(flag: string): Promise<{
        doubt: boolean;
        notify: import("../../napcat-core").GroupNotify | undefined;
    }>;
    handleGroupRequest(request: OB11GroupRequestEvent, quickAction: QuickActionGroupRequest): Promise<void>;
    handleFriendRequest(request: OB11FriendRequestEvent, quickAction: QuickActionFriendRequest): Promise<void>;
}
