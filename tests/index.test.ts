import exampleFunction from "../src/index";
import { describe, it, expect } from "vitest";

describe("vite-library-template", () => {
  it("does math", () => {
    expect(exampleFunction(1, 2)).toBe(3);
  });
});
