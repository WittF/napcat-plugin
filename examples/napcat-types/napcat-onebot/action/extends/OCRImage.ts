import { OneBotAction } from '../../action/OneBotAction';
import { Static } from '@sinclair/typebox';
declare const PayloadSchema: import("@sinclair/typebox").TObject<{
    image: import("@sinclair/typebox").TString;
}>;
type PayloadType = Static<typeof PayloadSchema>;
declare const ReturnSchema: import("@sinclair/typebox").TAny;
type ReturnType = Static<typeof ReturnSchema>;
declare class OCRImageBase extends OneBotAction<PayloadType, ReturnType> {
    payloadSchema: import("@sinclair/typebox").TObject<{
        image: import("@sinclair/typebox").TString;
    }>;
    returnSchema: import("@sinclair/typebox").TAny;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        image: string;
    };
    returnExample: {
        texts: {
            text: string;
            coordinates: never[];
        }[];
    };
    _handle(payload: PayloadType): Promise<ReturnType>;
}
export declare class OCRImage extends OCRImageBase {
    actionName: "ocr_image";
    actionSummary: string;
}
export declare class IOCRImage extends OCRImageBase {
    actionName: ".ocr_image";
    actionSummary: string;
}
export {};
