import { ethereum } from "@graphprotocol/graph-ts";
import { log } from "./log";

export { clearStore } from "./store";
export { assert } from "./assert";
export { addMetadata } from "./event";

const CLASS_IN_FINISHED_STATE_ERROR_MESSAGE = "You can't modify a MockedFunction instance after it has been saved.";

export declare function registerTest(name: string): void;
export declare function mockFunction(contractAddress: string, fnName: string, fnArgs: ethereum.Value[], returnValue: ethereum.Value, reverts: bool): void;

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

    // callFunction(fnName: string, fnArgs: string []): string {
    //     let hash = createHash(this.address, fnName, fnArgs);
    //     if (hashAndReturnValue.has(hash)) {
    //         return hashAndReturnValue.get(hash);
    //     }
    //     log.error(
    //         "No function with name '" +
    //         fnName +
    //         "', contract address '" +
    //         this.address +
    //         "' and given arguments found."
    //     );
    //     return "";
    // }
}

export class MockedFunction {
    isFinishedState: bool = false;
    contractAddress: string;
    name: string;
    args: ethereum.Value[];

    constructor(contractAddress: string, fnName: string) {
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
            mockFunction(this.contractAddress, this.name, this.args, returnValue, false);
            this.isFinishedState = true;
        } else {
            log.critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
        }
    }

    reverts(): void {
        if (!this.isFinishedState) {
            mockFunction(this.contractAddress, this.name, this.args, ethereum.Value.fromString(""), true);
            this.isFinishedState = true;
        } else {
            log.critical(CLASS_IN_FINISHED_STATE_ERROR_MESSAGE);
        }
    }
}

export function createMockedFunction(
    contractAddress: string,
    fnName: string
): MockedFunction {
    return new MockedFunction(contractAddress, fnName);
}

// function createHash(
//     address: string,
//     fnName: string,
//     fnArguments: string[],
// ): i32 {
//     let stringToHash = address + fnName;
//     for (let i = 0; i < fnArguments.length; i++) {
//         stringToHash.concat(fnArguments[i]);
//     }

//     let hash = 0;
//     if (stringToHash.length == 0) {
//         return hash;
//     }

//     for (let i = 0; i < stringToHash.length; i++) {
//         let char = stringToHash.charCodeAt(i);
//         hash = (hash << 5) - hash + char;
//         hash = hash & hash;
//     }

//     return hash;
// }
