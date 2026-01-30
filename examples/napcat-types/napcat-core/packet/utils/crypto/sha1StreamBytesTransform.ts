import * as stream from 'node:stream';
export declare class CalculateStreamBytesTransform extends stream.Transform {
    private readonly blockSize;
    private readonly sha1;
    private buffer;
    private bytesRead;
    private readonly byteArrayList;
    constructor();
    _transform(chunk: Buffer, _: BufferEncoding, callback: stream.TransformCallback): void;
    _flush(callback: stream.TransformCallback): void;
}
