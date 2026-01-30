export interface HttpDownloadOptions {
    url: string;
    headers?: Record<string, string> | string;
    proxy?: string;
}
type Uri2LocalRes = {
    success: boolean;
    errMsg: string;
    fileName: string;
    path: string;
};
export declare function checkFileExist(path: string, timeout?: number): Promise<void>;
export declare function checkFileExistV2(path: string, timeout?: number): Promise<void>;
export declare function calculateFileMD5(filePath: string): Promise<string>;
export declare function httpDownload(options: string | HttpDownloadOptions): Promise<Buffer>;
export enum FileUriType {
    Unknown = 0,
    Local = 1,
    Remote = 2,
    Base64 = 3
}
export declare function checkUriType(Uri: string): Promise<{
    Uri: string;
    Type: FileUriType;
}>;
export declare function uriToLocalFile(dir: string, uri: string, filename?: string, headers?: Record<string, string>, proxy?: string): Promise<Uri2LocalRes>;
export {};
