import { test } from "../index";

describe("example", () => {
  it("should execute successfully", () => {
    expect<bool>(test("this is my test", () => {})).toBeTruthy();
  });
});
