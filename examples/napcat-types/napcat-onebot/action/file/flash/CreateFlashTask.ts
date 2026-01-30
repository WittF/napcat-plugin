import { OneBotAction } from '../../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
export declare const CreateFlashTaskPayloadSchema: import("@sinclair/typebox").TObject<{
    files: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    thumb_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type CreateFlashTaskPayload = Static<typeof CreateFlashTaskPayloadSchema>;
export declare class CreateFlashTask extends OneBotAction<CreateFlashTaskPayload, any> {
    actionName: "create_flash_task";
    payloadSchema: import("@sinclair/typebox").TObject<{
        files: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>, import("@sinclair/typebox").TString]>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        thumb_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionTags: string[];
    payloadExample: {
        files: string;
        name: string;
    };
    returnExample: {
        task_id: string;
    };
    _handle(payload: CreateFlashTaskPayload): Promise<{}>;
}
