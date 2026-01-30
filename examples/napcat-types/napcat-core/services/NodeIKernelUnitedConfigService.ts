export interface NodeIKernelUnitedConfigService {
    addKernelUnitedConfigListener(listener: unknown): number;
    removeKernelUnitedConfigListener(listenerId: number): void;
    fetchUnitedSwitchConfig(...args: unknown[]): unknown;
    isUnitedConfigSwitchOn(...args: unknown[]): unknown;
    registerUnitedConfigPushGroupList(...args: unknown[]): unknown;
    fetchUnitedCommendConfig(ids: `${string}`[]): void;
    loadUnitedConfig(id: string): Promise<unknown>;
}
