import { IHighwayUploader } from '../../../packet/highway/uploader/highwayUploader';
export declare class HighwayHttpUploader extends IHighwayUploader {
    upload(): Promise<void>;
    private uploadBlock;
    private httpPostHighwayContent;
}
