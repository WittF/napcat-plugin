export declare class Frame {
    static pack(head: Buffer, body: Buffer): Buffer;
    static unpack(frame: Buffer): [Buffer, Buffer];
}
