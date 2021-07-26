import { Address, ethereum } from "@graphprotocol/graph-ts";
import { log } from "./log";

export { clearStore } from "./store";
export { assert } from "./assert";
export { addMetadata } from "./event";

const CLASS_IN_FINISHED_STATE_ERROR_MESSAGE = "You can't modify a MockedFunction instance after it has been saved.";

export declare function registerTest(name: string): void;
export declare function mockFunction(contractAddress: Address, fnName: string, fnArgs: ethereum.Value[], returnValue: ethereum.Value): void;

export function test(name: string, f: () => void): void {
    registerTest(name);
    f();
}

export class MockedContract {
    address: string;

    static bind(address: string): MockedContract {
        let contract = new MockedContract();
        contract.address = address;
        return contract;
    }
}

export class MockedFunction {
    isFinishedState: bool = false;
    contractAddress: Address;
    name: string;
    args: ethereum.Value[];

    constructor(contractAddress: Address, fnName: string) {
        this.contractAddress = contractAddress;
        this.name = fnName;
    }

    withArgs(args: ethereum.Value[]): MockedFunction {
        if (!this.isFinishedState) {
            this.args = args;
        } else {
            log.critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
        }
        return this;
    }

    returns(returnValue: ethereum.Value): void {
        if (!this.isFinishedState) {
            mockFunction(this.contractAddress, this.name, this.args, returnValue);
            this.isFinishedState = true;
        } else {
            log.critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
        }
    }

    reverts(): void {
        if (!this.isFinishedState) {
            mockFunction(this.contractAddress, this.name, this.args, ethereum.Value.fromString(""));
            this.isFinishedState = true;
        } else {
            log.critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
        }
    }
}

export function createMockedFunction(
    contractAddress: Address,
    fnName: string
): MockedFunction {
    return new MockedFunction(contractAddress, fnName);
}
