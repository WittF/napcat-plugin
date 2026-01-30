import { OneBotAction } from '../OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    bot_appid: import("@sinclair/typebox").TString;
    button_id: import("@sinclair/typebox").TString;
    callback_data: import("@sinclair/typebox").TString;
    msg_seq: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
export declare class ClickInlineKeyboardButton extends OneBotAction<PayloadType, ReturnType> {
    actionName: "click_inline_keyboard_button";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        bot_appid: import("@sinclair/typebox").TString;
        button_id: import("@sinclair/typebox").TString;
        callback_data: import("@sinclair/typebox").TString;
        msg_seq: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        bot_appid: string;
        button_id: string;
        callback_data: string;
        msg_seq: string;
    };
    returnExample: {};
    _handle(payload: PayloadType): Promise<import("../../../napcat-core").GeneralCallResult & {
        status: number;
        promptText: string;
        promptType: number;
        promptIcon: number;
    }>;
}
export {};
