import { GetPacketStatusDepends } from '../../action/packet/GetPacketStatus';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    group_id: import("@sinclair/typebox").TString;
    chat_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TString;
    characters: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        character_id: import("@sinclair/typebox").TString;
        character_name: import("@sinclair/typebox").TString;
        preview_url: import("@sinclair/typebox").TString;
    }>>;
}>>;
type ReturnType = Static<typeof ReturnSchema>;
export declare class GetAiCharacters extends GetPacketStatusDepends<PayloadType, ReturnType> {
    actionName: "get_ai_characters";
    payloadSchema: import("@sinclair/typebox").TObject<{
        group_id: import("@sinclair/typebox").TString;
        chat_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    }>;
    returnSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TString;
        characters: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            character_id: import("@sinclair/typebox").TString;
            character_name: import("@sinclair/typebox").TString;
            preview_url: import("@sinclair/typebox").TString;
        }>>;
    }>>;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        group_id: string;
    };
    returnExample: {
        type: string;
        characters: {
            character_id: string;
            character_name: string;
            preview_url: string;
        }[];
    }[];
    _handle(payload: PayloadType): Promise<{
        type: string;
        characters: {
            character_id: string;
            character_name: string;
            preview_url: string;
        }[];
    }[]>;
}
export {};
