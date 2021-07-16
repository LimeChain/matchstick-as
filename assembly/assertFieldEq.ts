export declare namespace expect {
    // Host export for asserting equality on fields in the store
    // TODO: try to make this a bool
    export function fieldEquals(entityType: string, id: string, fieldName: string, expectedVal: string): i32;
}
