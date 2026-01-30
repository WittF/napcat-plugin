import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetRkey extends GetPacketStatusDepends<void, ReturnType> {
    actionName: "nc_get_rkey";
    payloadSchema: import("@sinclair/typebox").TVoid;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TAny>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {};
    returnExample: {
        key: string;
        expired: number;
    }[];
    _handle(): Promise<NonNullable<{
        rkey: string;
        ttl: bigint;
        time: number;
        type: number;
    } & {}>[]>;
}
export {};
