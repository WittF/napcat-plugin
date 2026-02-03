import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    uin: import("@sinclair/typebox").TNumber;
    uid: import("@sinclair/typebox").TString;
    nick_name: import("@sinclair/typebox").TString;
    age: import("@sinclair/typebox").TNumber;
    source: import("@sinclair/typebox").TString;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetUnidirectionalFriendList extends OneBotAction<void, ReturnType> {
    actionName: "get_unidirectional_friend_list";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        uin: import("@sinclair/typebox").TNumber;
        uid: import("@sinclair/typebox").TString;
        nick_name: import("@sinclair/typebox").TString;
        age: import("@sinclair/typebox").TNumber;
        source: import("@sinclair/typebox").TString;
    }>>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        uin: number;
        uid: string;
        nick_name: string;
        age: number;
        source: string;
    }[];
    pack_data(data: string): Promise<Uint8Array>;
    _handle(): Promise<ReturnType>;
}
export {};
