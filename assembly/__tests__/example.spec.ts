// import { Entity } from "../../node_modules/@graphprotocol/graph-ts";
import { Entity } from "@graphprotocol/graph-ts";
import { mockFunction, callFunction, test } from "../index";
import { store } from "../store";

beforeEach(() => { store.clear() });

describe("example", () => {
  it("should execute successfully", () => {
    expect(() => { test("this is my test", () => {}) }).not.toThrow();
  });
});

describe("mocking function and checking to see if it got mocked correctly", () => {
  it("should add and then call function with the given return value", () => {
    expect(() => { mockFunction("test", "test", ["te", "st"], "Test") }).not.toThrow();
    expect<string>(callFunction("test", "test", ["te", "st"])).toBe("Test");
  });
});

describe("calling non existent function", () => {
  it("should not return anything from the map", () => {
    expect<string>(callFunction("nothing", "to", ["see", "here"]))
      .toBe("No function with name 'to', contract address 'nothing' and given arguments found.");
  });
});

describe("setting and getting entity from store", () => {
  it("should set and then return a non null entity", () => {
    expect(() => { store.set("outer", "inner", new Entity()) }).not.toThrow();
    expect<Entity>(store.get("outer", "inner")).not.toBeNull();
  });
});

describe("getting non existent entity", () => {
  it("should throw", () => {
    expect(() => { store.get("not", "exist") }).toThrow();
  });
});

describe("removing an entry from the store", () => {
  it("should correctly and and then remove without throwing errors", () => {
    expect(() => { store.set("outer", "inner", new Entity()) }).not.toThrow();
    expect(() => { store.remove("outer", "inner") }).not.toThrow();
  });
});