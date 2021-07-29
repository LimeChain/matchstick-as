export declare namespace assert {
    // Host export for asserting equality on fields in the store
    export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): void;

    export function equals(expected: string, actual: string): void;
}
