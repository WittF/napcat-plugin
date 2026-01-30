import { OneBotAction } from '../../action/OneBotAction';
import { QuickAction, QuickActionEvent } from '../../types';
import { Static } from '@sinclair/typebox';
export declare const GoCQHTTPHandleQuickActionPayloadSchema: import("@sinclair/typebox").TObject<{
    context: import("@sinclair/typebox").TObject<{
        time: import("@sinclair/typebox").TNumber;
        self_id: import("@sinclair/typebox").TNumber;
        post_type: import("@sinclair/typebox").TString;
        message_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user_id: import("@sinclair/typebox").TString;
        group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        real_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        sender: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            user_id: import("@sinclair/typebox").TString;
            nickname: import("@sinclair/typebox").TString;
            sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
        message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        message_format: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        raw_message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        font: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        notice_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        meta_event_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    operation: import("@sinclair/typebox").TObject<{
        reply: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        auto_escape: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        at_sender: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        delete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        kick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        ban: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        ban_duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export type GoCQHTTPHandleQuickActionPayload = {
    context: QuickActionEvent;
    operation: QuickAction;
} & Static<typeof GoCQHTTPHandleQuickActionPayloadSchema>;
export declare class GoCQHTTPHandleQuickAction extends OneBotAction<GoCQHTTPHandleQuickActionPayload, void> {
    actionName: ".handle_quick_operation";
    payloadSchema: import("@sinclair/typebox").TObject<{
        context: import("@sinclair/typebox").TObject<{
            time: import("@sinclair/typebox").TNumber;
            self_id: import("@sinclair/typebox").TNumber;
            post_type: import("@sinclair/typebox").TString;
            message_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            sub_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            user_id: import("@sinclair/typebox").TString;
            group_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            message_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            message_seq: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            real_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            sender: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                user_id: import("@sinclair/typebox").TString;
                nickname: import("@sinclair/typebox").TString;
                sex: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                age: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                card: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                level: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                role: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>;
            message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
            message_format: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            raw_message: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            font: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            notice_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            meta_event_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
        operation: import("@sinclair/typebox").TObject<{
            reply: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            auto_escape: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            at_sender: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            delete: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            kick: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            ban: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            ban_duration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            approve: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    }>;
    returnSchema: import("@sinclair/typebox").TNull;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        context: {};
        operation: {};
    };
    returnExample: {};
    _handle(payload: GoCQHTTPHandleQuickActionPayload): Promise<void>;
}
