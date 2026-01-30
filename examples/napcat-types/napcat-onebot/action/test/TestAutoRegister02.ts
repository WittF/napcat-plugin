import { OneBotAction } from '../../action/OneBotAction';
export default class TestAutoRegister02 extends OneBotAction<void, string> {
    actionName: "test_auto_register_02";
    payloadSchema: import("@sinclair/typebox").TObject<{}>;
    returnSchema: import("@sinclair/typebox").TString;
    _handle(_payload: void): Promise<string>;
}
