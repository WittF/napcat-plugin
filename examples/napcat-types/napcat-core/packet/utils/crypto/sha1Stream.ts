export declare class Sha1Stream {
    readonly Sha1BlockSize = 64;
    readonly Sha1DigestSize = 20;
    private readonly _padding;
    private readonly _state;
    private readonly _count;
    private readonly _buffer;
    private readonly _w;
    constructor();
    private reset;
    private rotateLeft;
    private transform;
    update(data: Buffer, len?: number): void;
    hash(bigEndian?: boolean): Buffer;
    final(): Buffer;
}
