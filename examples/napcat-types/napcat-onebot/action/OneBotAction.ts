import { ActionName, BaseCheckResult } from './router';
import { NapCatCore } from '../../napcat-core';
import { NapCatOneBot11Adapter, OB11Return } from '../index';
import { NetworkAdapterConfig } from '../config/config';
import { TSchema } from '@sinclair/typebox';
import { StreamPacket, StreamPacketBasic } from './stream/StreamBasic';
export declare const ActionExamples: {
    Common: {
        errors: {
            code: number;
            description: string;
        }[];
    };
};
export declare class OB11Response {
    private static createResponse;
    static res<T>(data: T, status: string, retcode: number, message?: string, echo?: unknown, useStream?: boolean): OB11Return<T>;
    static ok<T>(data: T, echo?: unknown, useStream?: boolean): OB11Return<T>;
    static error(err: string, retcode: number, echo?: unknown, useStream?: boolean): OB11Return<null | StreamPacketBasic>;
}
export declare abstract class OneBotRequestToolkit {
    abstract send<T>(packet: StreamPacket<T>): Promise<void>;
}
export declare abstract class OneBotAction<PayloadType, ReturnDataType> {
    actionName: typeof ActionName[keyof typeof ActionName];
    core: NapCatCore;
    private validate?;
    payloadSchema?: TSchema;
    returnSchema?: TSchema;
    payloadExample?: unknown;
    returnExample?: unknown;
    actionSummary: string;
    actionDescription: string;
    actionTags: string[];
    obContext: NapCatOneBot11Adapter;
    useStream: boolean;
    errorExamples: Array<{
        code: number;
        description: string;
    }>;
    constructor(obContext: NapCatOneBot11Adapter, core: NapCatCore);
    protected check(payload: PayloadType): Promise<BaseCheckResult>;
    handle(payload: PayloadType, adaptername: string, config: NetworkAdapterConfig, req?: OneBotRequestToolkit, echo?: string): Promise<OB11Return<ReturnDataType | StreamPacketBasic | null>>;
    websocketHandle(payload: PayloadType, echo: unknown, adaptername: string, config: NetworkAdapterConfig, req?: OneBotRequestToolkit): Promise<OB11Return<ReturnDataType | StreamPacketBasic | null>>;
    abstract _handle(payload: PayloadType, adaptername: string, config: NetworkAdapterConfig, req: OneBotRequestToolkit): Promise<ReturnDataType>;
}
