import { OB11MessageMixType } from '../../types';
import { ReturnDataType, SendMsgBase, SendMsgPayload } from '../../action/msg/SendMsg';
type GoCQHTTPSendForwardMsgPayload = SendMsgPayload & {
    messages?: OB11MessageMixType;
};
export declare class GoCQHTTPSendForwardMsgBase extends SendMsgBase {
    protected check(payload: GoCQHTTPSendForwardMsgPayload): Promise<import("../../action/router").BaseCheckResult>;
}
export declare class GoCQHTTPSendForwardMsg extends GoCQHTTPSendForwardMsgBase {
    actionName: "send_forward_msg";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        messages: never[];
    };
    returnExample: {
        message_id: number;
    };
    protected check(payload: GoCQHTTPSendForwardMsgPayload): Promise<import("../../action/router").BaseCheckResult>;
}
export declare class GoCQHTTPSendPrivateForwardMsg extends GoCQHTTPSendForwardMsgBase {
    actionName: "send_private_forward_msg";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        messages: never[];
    };
    returnExample: {
        message_id: number;
    };
    _handle(payload: GoCQHTTPSendForwardMsgPayload): Promise<ReturnDataType>;
}
export declare class GoCQHTTPSendGroupForwardMsg extends GoCQHTTPSendForwardMsgBase {
    actionName: "send_group_forward_msg";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        messages: never[];
    };
    returnExample: {
        message_id: number;
    };
    _handle(payload: GoCQHTTPSendForwardMsgPayload): Promise<ReturnDataType>;
}
export {};
