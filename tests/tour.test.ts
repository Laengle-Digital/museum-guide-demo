import { describe, it, expect } from "vitest";
import { Tour } from "../src/tour/Tour";
import { stops } from "../src/tour/stops";

describe("Tour", () => {
  it("moves to the next stop", () => {
    const tour = new Tour(stops);
    expect(tour.next()?.id).toBe("s2");
  });
});
