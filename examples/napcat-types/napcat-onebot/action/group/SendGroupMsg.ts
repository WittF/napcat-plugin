import { ReturnDataType, SendMsgBase, SendMsgPayload } from '../../action/msg/SendMsg';
import { BaseCheckResult } from '../../action/router';
declare class SendGroupMsg extends SendMsgBase {
    actionName: "send_group_msg";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        message: string;
    };
    returnExample: {
        message_id: number;
    };
    protected check(payload: SendMsgPayload): Promise<BaseCheckResult>;
    _handle(payload: SendMsgPayload): Promise<ReturnDataType>;
}
export default SendGroupMsg;
