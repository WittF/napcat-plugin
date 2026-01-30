import { OneBotAction } from '../../action/OneBotAction';
export default class TestAutoRegister01 extends OneBotAction<void, string> {
    actionName: "test_auto_register_01";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TString;
    _handle(_payload: void): Promise<string>;
}
