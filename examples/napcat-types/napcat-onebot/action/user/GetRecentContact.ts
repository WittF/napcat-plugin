import { OneBotAction } from '../../action/OneBotAction';
import { NetworkAdapterConfig } from '../../config/config';
import { Static } from '@sinclair/typebox';
export declare const GetRecentContactPayloadSchema: import("@sinclair/typebox").TObject<{
    count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
export type GetRecentContactPayload = Static<typeof GetRecentContactPayloadSchema>;
export declare const GetRecentContactReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    lastestMsg: import("@sinclair/typebox").TAny;
    peerUin: import("@sinclair/typebox").TString;
    remark: import("@sinclair/typebox").TString;
    msgTime: import("@sinclair/typebox").TString;
    chatType: import("@sinclair/typebox").TNumber;
    msgId: import("@sinclair/typebox").TString;
    sendNickName: import("@sinclair/typebox").TString;
    sendMemberName: import("@sinclair/typebox").TString;
    peerName: import("@sinclair/typebox").TString;
}>>;
export type GetRecentContactReturn = Static<typeof GetRecentContactReturnSchema>;
export default class GetRecentContact extends OneBotAction<GetRecentContactPayload, GetRecentContactReturn> {
    actionName: "get_recent_contact";
    payloadSchema: import("@sinclair/typebox").TObject<{
        count: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        lastestMsg: import("@sinclair/typebox").TAny;
        peerUin: import("@sinclair/typebox").TString;
        remark: import("@sinclair/typebox").TString;
        msgTime: import("@sinclair/typebox").TString;
        chatType: import("@sinclair/typebox").TNumber;
        msgId: import("@sinclair/typebox").TString;
        sendNickName: import("@sinclair/typebox").TString;
        sendMemberName: import("@sinclair/typebox").TString;
        peerName: import("@sinclair/typebox").TString;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        count: number;
    };
    returnExample: {
        peerUin: string;
        peerName: string;
        msgTime: string;
        msgId: string;
        lastestMsg: {};
    }[];
    _handle(payload: GetRecentContactPayload, _adapter: string, config: NetworkAdapterConfig): Promise<GetRecentContactReturn>;
}
