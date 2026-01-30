import { MsfChangeReasonType, MsfStatusType } from '../types/adapter';
export declare class NodeIDependsAdapter {
    onMSFStatusChange(_statusType: MsfStatusType, _changeReasonType: MsfChangeReasonType): void;
    onMSFSsoError(_code: number, _desc: string): void;
    getGroupCode(_args: unknown): void;
}
