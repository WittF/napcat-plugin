import { NodeIQQNTWrapperSession } from '../wrapper';
import { NTEventWrapper } from './event';
/**
 * 创建 Session 的双层代理
 * 第一层：拦截 getXXXService 方法
 * 第二层：拦截 Service 上的具体方法调用
 */
export declare function createSessionProxy(session: NodeIQQNTWrapperSession, eventWrapper: NTEventWrapper): NodeIQQNTWrapperSession;
/**
 * 创建带有 EventWrapper 集成的 InstanceContext
 * 这是推荐的使用方式，在创建 context 时自动代理 session
 */
export declare function createProxiedSession(session: NodeIQQNTWrapperSession, eventWrapper: NTEventWrapper): NodeIQQNTWrapperSession;
