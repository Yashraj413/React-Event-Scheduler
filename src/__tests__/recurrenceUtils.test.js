import { generateOccurrences } from "../utils/recurrenceUtils";

describe("generateOccurrences", () => {
  it("generates just one date for 'none'", () => {
    expect(generateOccurrences("2024-07-01", "none"))
      .toEqual(["2024-07-01"]);
  });
  it("generates daily occurrences", () => {
    expect(generateOccurrences("2024-07-01", "daily", 3))
      .toEqual(["2024-07-01", "2024-07-02", "2024-07-03"]);
  });
  it("generates weekly occurrences", () => {
    expect(generateOccurrences("2024-07-01", "weekly", 2))
      .toEqual(["2024-07-01", "2024-07-08"]);
  });
  it("generates monthly occurrences", () => {
    expect(generateOccurrences("2024-07-01", "monthly", 2))
      .toEqual(["2024-07-01", "2024-08-01"]);
  });
  it("handles empty startDate", () => {
    expect(generateOccurrences("", "daily")).toEqual([]);
  });
});
