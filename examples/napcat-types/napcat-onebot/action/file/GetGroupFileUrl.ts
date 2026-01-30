import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    file_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetGroupFileUrl extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "get_group_file_url";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        file_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
        file_id: string;
        busid: number;
    };
    returnExample: {
        url: string;
    };
    _handle(payload: PayloadType): Promise<{
        url: string;
    }>;
}
export {};
