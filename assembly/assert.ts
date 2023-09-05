import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import { countEntities } from "./store";
// Host exports for assertion.
declare namespace _assert {
  function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): bool;
  function equals(expected: ethereum.Value, actual: ethereum.Value): bool;
  function notInStore(entityType: string, id: string): bool;
}

export namespace assert {
  export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): void {
    if (!_assert.fieldEquals(entityType, id, fieldName, expectedVal)) {
      throw new Error("Assertion Error");
    }
  }

  export function equals(expected: ethereum.Value, actual: ethereum.Value): void {
    if (!_assert.equals(expected, actual)) {
      throw new Error("Assertion Error");
    }
  }

  export function notInStore(entityType: string, id: string): void {
    if (!_assert.notInStore(entityType, id)) {
      throw new Error("Assertion Error");
    }
  }

  export function addressEquals(expected: Address, actual: Address): void {
    assert.equals(ethereum.Value.fromAddress(expected), ethereum.Value.fromAddress(actual));
  }

  export function bytesEquals(expected: Bytes, actual: Bytes): void {
    assert.equals(ethereum.Value.fromBytes(expected), ethereum.Value.fromBytes(actual));
  }
  
  export function i32Equals(expected: i32, actual: i32): void {
    assert.equals(ethereum.Value.fromI32(expected), ethereum.Value.fromI32(actual));
  }

  export function bigIntEquals(expected: BigInt, actual: BigInt): void {
    assert.equals(ethereum.Value.fromSignedBigInt(expected), ethereum.Value.fromSignedBigInt(actual));
  }

  export function booleanEquals(expected: boolean, actual: boolean): void {
    assert.equals(ethereum.Value.fromBoolean(expected), ethereum.Value.fromBoolean(actual));
  }

  export function stringEquals(expected: string, actual: string): void {
    assert.equals(ethereum.Value.fromString(expected), ethereum.Value.fromString(actual));
  }

  export function arrayEquals(expected: Array<ethereum.Value>, actual: Array<ethereum.Value>): void {
    assert.equals(ethereum.Value.fromArray(expected), ethereum.Value.fromArray(actual));
  }

  export function tupleEquals(expected: ethereum.Tuple, actual: ethereum.Tuple): void {
    assert.equals(ethereum.Value.fromTuple(expected), ethereum.Value.fromTuple(actual));
  }

  export function assertTrue(value: boolean): void {
    booleanEquals(true, value);
  }

  export function assertNull<T>(value: T): void {
    assertTrue(value == null);
  }

  export function assertNotNull<T>(value: T): void {
    assertTrue(value != null);
  }

  export function entityCount(entityType: string, expectedCount: i32): void {
    i32Equals(expectedCount, countEntities(entityType));
  }
}
