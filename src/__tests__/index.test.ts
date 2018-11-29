import { hello } from "../index";

describe("Simple Test", () => {
  it("can test", () => {
    const result = hello("foo");
    expect(result).toEqual("Hello foo!");
  });
});
