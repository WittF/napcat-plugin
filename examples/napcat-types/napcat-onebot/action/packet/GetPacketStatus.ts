import { OneBotAction } from '../../action/OneBotAction';
import { BaseCheckResult } from '../../action/router';
export declare abstract class GetPacketStatusDepends<PT, RT> extends OneBotAction<PT, RT> {
    protected check(payload: PT): Promise<BaseCheckResult>;
}
export declare class GetPacketStatus extends GetPacketStatusDepends<void, void> {
    actionName: "nc_get_packet_status";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: null;
    _handle(): Promise<void>;
}
