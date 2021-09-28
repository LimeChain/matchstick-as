import { Address, ethereum } from "@graphprotocol/graph-ts";
import { critical } from "./log";

export { clearStore, logStore } from "./store";
export { newMockEvent } from "./event";
export { assert } from "./assert";
export { critical, success, error, info, debug, warning } from "./log";

const CLASS_IN_FINISHED_STATE_ERROR_MESSAGE =
  "You can't modify a MockedFunction instance after it has been saved.";

export declare function registerTest(name: string, shouldFail: bool): bool;
export declare function mockFunction(
  contractAddress: Address,
  fnName: string,
  fnSignature: string,
  fnArgs: ethereum.Value[],
  returnValue: ethereum.Value[],
  reverts: u32
): void;

export function test(name: string, f: () => void, shouldFail: bool = false): void {
  if (registerTest(name, shouldFail)) {
    f();
  }
}

export class MockedFunction {
  isFinishedState: bool = false;
  contractAddress: Address;
  name: string;
  signature: string;
  args: ethereum.Value[] = [];

  constructor(contractAddress: Address, fnName: string, fnSignature: string) {
    this.contractAddress = contractAddress;
    this.name = fnName;
    this.signature = fnSignature;
  }

  withArgs(args: ethereum.Value[]): MockedFunction {
    if (!this.isFinishedState) {
      this.args = args;
    } else {
      critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
    }
    return this;
  }

  returns(returnValue: ethereum.Value[]): void {
    if (!this.isFinishedState) {
      mockFunction(
        this.contractAddress,
        this.name,
        this.signature,
        this.args,
        returnValue,
        0
      );
      this.isFinishedState = true;
    } else {
      critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
    }
  }

  reverts(): void {
    if (!this.isFinishedState) {
      mockFunction(
        this.contractAddress,
        this.name,
        this.signature,
        this.args,
        [],
        1
      );
      this.isFinishedState = true;
    } else {
      critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
    }
  }
}

export function createMockedFunction(
  contractAddress: Address,
  fnName: string,
  fnSignature: string
): MockedFunction {
  return new MockedFunction(contractAddress, fnName, fnSignature);
}
