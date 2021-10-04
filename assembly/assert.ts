import { Address, BigInt, Bytes, ethereum, store, Value } from "@graphprotocol/graph-ts";

export declare namespace assert {
    // Host export for asserting equality on fields in the store
    export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): void;

    export function equals(expected: ethereum.Value, actual: ethereum.Value): void;

    export function notInStore(entityType: string, id: string): void;
}

export namespace assert {
    export function addressEquals(address1: Address, address2: Address): void {
        assert.equals(ethereum.Value.fromAddress(address1), ethereum.Value.fromAddress(address2));
    }
}
