import { Entity } from "@graphprotocol/graph-ts";
import { log } from "./log";

let storeMap = new Map<string, Map<string, Entity>>();
export namespace store {
  export function get(entityType: string, id: string): Entity {
    if (storeMap.has(entityType)) {
      if (storeMap.get(entityType).has(id)) {
        return storeMap.get(entityType).get(id);
      } else {
        log.error("Id: " + id + " is missing for type: " + entityType);
      }
    } else {
      log.error("Following type is absent from map: " + entityType);
    }
    return new Entity();
  }

  export function set(entityType: string, id: string, data: Entity): void {
    if (!storeMap.has(entityType)) {
      storeMap.set(entityType, new Map<string, Entity>());
    }
    storeMap.get(entityType).set(id, data);
  }

  export function remove(entityType: string, id: string): void {
    if (storeMap.has(entityType) && storeMap.get(entityType).has(id)) {
      storeMap.get(entityType).delete(id);
    }
  }

  export function assertFieldEq(
    entityType: string,
    id: string,
    fieldName: string,
    expectedVal: string
  ): bool {
    if (
      storeMap.has(entityType) &&
      storeMap.get(entityType).has(id) &&
      storeMap.get(entityType).get(id).get(fieldName) != null
    ) {
      return (
        storeMap.get(entityType).get(id).get(fieldName)!.toString() ==
        expectedVal
      );
    }
    return false;
  }

  export function clear(): void {
    storeMap.clear();
  }
}
