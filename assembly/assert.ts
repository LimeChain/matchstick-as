import { ethereum } from "@graphprotocol/graph-ts";

export declare namespace assert {
    // Host export for asserting equality on fields in the store
    export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): void;

    export function equals(expected: ethereum.Value, actual: ethereum.Value): void;

    export function notInStore(entityType: string, id: string): void;
}
