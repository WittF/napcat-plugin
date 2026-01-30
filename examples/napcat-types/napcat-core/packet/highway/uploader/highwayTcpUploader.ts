import { IHighwayUploader } from '../../../packet/highway/uploader/highwayUploader';
export declare class HighwayTcpUploader extends IHighwayUploader {
    upload(): Promise<void>;
}
