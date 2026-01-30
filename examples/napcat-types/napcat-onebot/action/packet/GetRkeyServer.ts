import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
export declare const GetRkeyServerReturnSchema: import("@sinclair/typebox").TObject<{
    private_rkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    group_rkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    expired_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    name: import("@sinclair/typebox").TString;
}>;
export type GetRkeyServerReturn = Static<typeof GetRkeyServerReturnSchema>;
export declare class GetRkeyServer extends GetPacketStatusDepends<void, GetRkeyServerReturn> {
    actionName: "get_rkey_server";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        private_rkey: string;
        group_rkey: string;
        expired_time: number;
        name: string;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TObject<{
        private_rkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        group_rkey: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        expired_time: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        name: import("@sinclair/typebox").TString;
    }>;
    private rkeyCache;
    private expiryTime;
    _handle(): Promise<{
        private_rkey?: string | undefined;
        group_rkey?: string | undefined;
        expired_time?: number | undefined;
        name: string;
    }>;
}
