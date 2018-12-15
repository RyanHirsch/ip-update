import fetch from "../fetch";
import nodeFetch from "node-fetch";

jest.mock("node-fetch");

(nodeFetch as jest.Mock).mockImplementation(() =>
  Promise.resolve({ json: () => Promise.resolve({}) })
);

describe("Observable Fetch", () => {
  it("returns an empty object", async () => {
    const result = await fetch("lies").toPromise();
    expect(result).toEqual({});
  });
});
