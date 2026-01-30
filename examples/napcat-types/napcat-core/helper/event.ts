import { NodeIQQNTWrapperSession } from '../wrapper';
import { ListenerNamingMapping, ServiceNamingMapping } from '../index';
type EnsureFunc<T> = T extends (...args: any) => any ? T : never;
type FuncKeys<T> = Extract<{
    [K in keyof T]: EnsureFunc<T[K]> extends never ? never : K;
}[keyof T], string>;
export type ListenerClassBase = Record<string, string>;
export declare class NTEventWrapper {
    private readonly WrapperSession;
    private readonly listenerManager;
    private readonly EventTask;
    constructor(wrapperSession: NodeIQQNTWrapperSession);
    createProxyDispatch(ListenerMainName: string): any;
    createEventFunction<Service extends keyof ServiceNamingMapping, ServiceMethod extends FuncKeys<ServiceNamingMapping[Service]>, T extends (...args: any) => any = EnsureFunc<ServiceNamingMapping[Service][ServiceMethod]>>(eventName: `${Service}/${ServiceMethod}`): T | undefined;
    createListenerFunction<T>(listenerMainName: string, uniqueCode?: string): T;
    dispatcherListener(ListenerMainName: string, ListenerSubName: string, ...args: any[]): Promise<void>;
    callNoListenerEvent<Service extends keyof ServiceNamingMapping, ServiceMethod extends FuncKeys<ServiceNamingMapping[Service]>, EventType extends (...args: any) => any = EnsureFunc<ServiceNamingMapping[Service][ServiceMethod]>>(serviceAndMethod: `${Service}/${ServiceMethod}`, ...args: Parameters<EventType>): Promise<Awaited<ReturnType<EventType>>>;
    registerListen<Listener extends keyof ListenerNamingMapping, ListenerMethod extends FuncKeys<ListenerNamingMapping[Listener]>, ListenerType extends (...args: any) => any = EnsureFunc<ListenerNamingMapping[Listener][ListenerMethod]>>(listenerAndMethod: `${Listener}/${ListenerMethod}`, checker: (...args: Parameters<ListenerType>) => boolean, waitTimes?: number, timeout?: number): Promise<Parameters<ListenerType>>;
    callNormalEventV2<Service extends keyof ServiceNamingMapping, ServiceMethod extends FuncKeys<ServiceNamingMapping[Service]>, Listener extends keyof ListenerNamingMapping, ListenerMethod extends FuncKeys<ListenerNamingMapping[Listener]>, EventType extends (...args: any) => any = EnsureFunc<ServiceNamingMapping[Service][ServiceMethod]>, ListenerType extends (...args: any) => any = EnsureFunc<ListenerNamingMapping[Listener][ListenerMethod]>>(serviceAndMethod: `${Service}/${ServiceMethod}`, listenerAndMethod: `${Listener}/${ListenerMethod}`, args: Parameters<EventType>, checkerEvent?: (ret: Awaited<ReturnType<EventType>>) => boolean, checkerListener?: (...args: Parameters<ListenerType>) => boolean, callbackTimesToWait?: number, timeout?: number): Promise<[EventRet: Awaited<ReturnType<EventType>>, ...Parameters<ListenerType>]>;
}
export {};
