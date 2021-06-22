import { mockFunction, test } from "../index";

describe("example", () => {
  it("should execute successfully", () => {
    expect<bool>(test("this is my test", () => {})).toBeTruthy();
  });
});

describe("example", () => {
  it("should execute successfully", () => {
    expect((): void => { mockFunction("test", "test", ["te", "st"], "Test") });
  });
});