import { describe, expect, it } from "vitest";
import { normalizeRouterBasename } from "./basePath";

describe("normalizeRouterBasename", () => {
  it("strips the trailing slash from a project base path", () => {
    expect(normalizeRouterBasename("/passenger-ride/")).toBe("/passenger-ride");
  });

  it("keeps the root path as an empty basename", () => {
    expect(normalizeRouterBasename("/")).toBe("");
  });
});
