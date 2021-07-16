export declare namespace field {
    // Host export for asserting equality on fields in the store
    // TODO: try to make this a bool
    export function equals(entityType: string, id: string, fieldName: string, expectedVal: string): i32;
}
