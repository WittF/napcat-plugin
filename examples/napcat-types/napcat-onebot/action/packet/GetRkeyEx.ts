import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
export declare const GetRkeyExReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TString;
    rkey: import("@sinclair/typebox").TString;
    created_at: import("@sinclair/typebox").TNumber;
    ttl: import("@sinclair/typebox").TNumber;
}>>;
export type GetRkeyExReturn = Static<typeof GetRkeyExReturnSchema>;
export declare class GetRkeyEx extends GetPacketStatusDepends<void, GetRkeyExReturn> {
    actionName: "get_rkey";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TString;
        rkey: import("@sinclair/typebox").TString;
        created_at: import("@sinclair/typebox").TNumber;
        ttl: import("@sinclair/typebox").TNumber;
    }>>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        type: string;
        rkey: string;
        created_at: number;
        ttl: number;
    }[];
    _handle(): Promise<{
        type: string;
        rkey: string;
        created_at: number;
        ttl: number;
    }[]>;
}
