import { log } from "./log";
import { assertFieldEq } from "./assertFieldEq";
import { testPassed, resetTestPassedValue } from  "./store";

export { addMetadata } from "./event";

let hashAndReturnValue = new Map<i32, string>();
let testNames = new Set<string>();

export function test(name: string, f: () => void): void {
    if (testNames.has(name)) {
        log.critical("Test with name: '" + name + "' already exists.");
    } else {
        testNames.add(name);
        f()
        if (testPassed) {
            log.success("TEST " + name + " ✅");
            testUtil.incrementSuccessfulTestsCount();
        } else {
            log.error("TEST " + name + " ❌");
            resetTestPassedValue();
            testUtil.incrementFailedTestsCount();
        }
    }
}

export declare namespace testUtil {
    export function incrementSuccessfulTestsCount(): void;
    export function incrementFailedTestsCount(): void;
}

export function mockFunction(
    contractAddress: string,
    fnName: string,
    fnArguments: string[],
    expectedReturnValue: string,
    reverts: bool,
): void {
    let hash = createHash(contractAddress, fnName, fnArguments);
    if (reverts) {
        hashAndReturnValue.set(hash, "");
    } else {
        hashAndReturnValue.set(hash, expectedReturnValue);
    }
}

export function callFunction(
    contractAddress: string,
    fnName: string,
    fnArguments: string[],
): string {
    let hash = createHash(contractAddress, fnName, fnArguments);
    if (hashAndReturnValue.has(hash)) {
        return hashAndReturnValue.get(hash);
    }
    log.error(
        "No function with name '" +
        fnName +
        "', contract address '" +
        contractAddress +
        "' and given arguments found.",
    );
    return "";
}

function createHash(
    address: string,
    fnName: string,
    fnArguments: string[],
): i32 {
    let stringToHash = address + fnName;
    for (let i = 0; i < fnArguments.length; i++) {
        stringToHash.concat(fnArguments[i]);
    }

    let hash = 0;
    if (stringToHash.length == 0) {
        return hash;
    }

    for (let i = 0; i < stringToHash.length; i++) {
        let char = stringToHash.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }

    return hash;
}
