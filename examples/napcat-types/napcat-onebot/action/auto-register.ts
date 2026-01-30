import { OneBotAction } from './OneBotAction';
export declare const AutoRegisterRouter: Array<new (...args: any[]) => OneBotAction<unknown, unknown>>;
export declare function ActionHandler(target: new (...args: any[]) => OneBotAction<unknown, unknown>): void;
