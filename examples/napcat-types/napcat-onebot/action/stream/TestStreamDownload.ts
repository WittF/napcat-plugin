import { OneBotAction, OneBotRequestToolkit } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
import { NetworkAdapterConfig } from '../../config/config';
import { StreamPacket, StreamStatus } from './StreamBasic';
export declare const TestDownloadStreamPayloadSchema: import("@sinclair/typebox").TObject<{
    error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export type TestDownloadStreamPayload = Static<typeof TestDownloadStreamPayloadSchema>;
export declare class TestDownloadStream extends OneBotAction<TestDownloadStreamPayload, StreamPacket<{
    data: string;
}>> {
    actionName: "test_download_stream";
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        url: string;
    };
    returnExample: {
        success: boolean;
    };
    payloadSchema: import("@sinclair/typebox").TObject<{
        error: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    useStream: boolean;
    _handle(_payload: TestDownloadStreamPayload, _adaptername: string, _config: NetworkAdapterConfig, req: OneBotRequestToolkit): Promise<{
        type: StreamStatus;
        data_type: string;
        data: string;
    }>;
}
