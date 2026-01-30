import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    user_id: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TNumber;
    ext_status: import("@sinclair/typebox").TNumber;
}>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetUserStatus extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "nc_get_user_status";
    payloadSchema: import("@sinclair/typebox").TObject<{
        user_id: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TObject<{
        status: import("@sinclair/typebox").TNumber;
        ext_status: import("@sinclair/typebox").TNumber;
    }>;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        user_id: string;
    };
    returnExample: {
        status: number;
        ext_status: number;
    };
    _handle(payload: PayloadType): Promise<{
        status: number;
        ext_status: number;
    }>;
}
export {};
