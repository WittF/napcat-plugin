import { WebApiGroupNoticeFeed } from '../../../napcat-core';
import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    sender_id: import("@sinclair/typebox").TNumber;
    publish_time: import("@sinclair/typebox").TNumber;
    notice_id: import("@sinclair/typebox").TString;
    message: import("@sinclair/typebox").TObject<{
        text: import("@sinclair/typebox").TString;
        image: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        images: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    }>;
    settings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    read_num: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export type ApiGroupNotice = ReturnType[number] & WebApiGroupNoticeFeed;
export declare class GetGroupNotice extends OneBotAction<PayloadType, ReturnType> {
    actionName: "_get_group_notice";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        sender_id: import("@sinclair/typebox").TNumber;
        publish_time: import("@sinclair/typebox").TNumber;
        notice_id: import("@sinclair/typebox").TString;
        message: import("@sinclair/typebox").TObject<{
            text: import("@sinclair/typebox").TString;
            image: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
            images: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
        }>;
        settings: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        read_num: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        notice_id: string;
        sender_id: number;
        publish_time: number;
        message: {
            text: string;
            image: never[];
        };
    }[];
    _handle(payload: PayloadType): Promise<{
        settings?: any;
        read_num?: number | undefined;
        message: {
            text: string;
            image: any[];
            images: any[];
        };
        sender_id: number;
        publish_time: number;
        notice_id: string;
    }[]>;
}
export {};
