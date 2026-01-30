import { ReturnDataType, SendMsgBase, SendMsgPayload } from './SendMsg';
import { BaseCheckResult } from '../../action/router';
declare class SendPrivateMsg extends SendMsgBase {
    actionName: "send_private_msg";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
        message: string;
    };
    returnExample: {
        message_id: number;
    };
    protected check(payload: SendMsgPayload): Promise<BaseCheckResult>;
    _handle(payload: SendMsgPayload): Promise<ReturnDataType>;
}
export default SendPrivateMsg;
