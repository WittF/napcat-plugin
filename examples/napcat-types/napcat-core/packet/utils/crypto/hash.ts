export declare function calculateSha1(filePath: string): Promise<Buffer>;
export declare function computeMd5AndLengthWithLimit(filePath: string, limit?: number): Promise<Buffer>;
export declare function calculateSha1StreamBytes(filePath: string): Promise<Buffer[]>;
