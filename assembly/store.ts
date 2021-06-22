import { Entity } from "@graphprotocol/graph-ts";

let storeMap = new Map<string, Map<string, Entity>>();

export namespace store {
    function get(entityType: string, id: string): Entity | null {
        if (storeMap.has(entityType)) {
            return storeMap.get(entityType).get(id);
        }
        throw new Error("Following type is absent from map: " + entityType);
    }

    function set(entityType: string, id: string, data: Entity): void {
        if (!storeMap.has(entityType)) {
            storeMap.set(entityType, new Map);
        }
        storeMap.get(entityType).set(id, data);
    }

    function remove(entityType: string, id: string): void {
        if (storeMap.has(entityType) && storeMap.get(entityType).has(id)) {
            storeMap.get(entityType).delete(id);
        }
    }

    function assertFieldEq(entityType: string, id: string, fieldName: string, expectedVal: string): bool {
        if (storeMap.has(entityType) && storeMap.get(entityType).has(id) && storeMap.get(entityType).get(id).get(fieldName) != null) {
            return storeMap.get(entityType).get(id).get(fieldName)?.toString() == expectedVal
        }
        return false;
    }

    function clear(): void {
        storeMap.clear();
    }
}
