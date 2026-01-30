import { GetFileBase } from './GetFile';
export default class GetImage extends GetFileBase {
    actionName: "get_image";
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    payloadExample: {
        file: string;
    };
    returnExample: {
        file: string;
        url: string;
    };
}
