import { CanSend } from './CanSendRecord';
export default class CanSendImage extends CanSend {
    actionName: "can_send_image";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        yes: boolean;
    };
}
