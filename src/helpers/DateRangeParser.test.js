// @flow

import { parseDateRange } from "./DateRangeParser";

describe("parseDateRange", () => {
  describe("when given text without a date range", () => {
    it("returns the an empty array for empty string", () => {
      expect(parseDateRange("")).toEqual([]);
    });

    it("returns the an empty array for non date text input", () => {
      expect(parseDateRange("foo")).toEqual([]);
      expect(parseDateRange("foo bar")).toEqual([]);
      expect(parseDateRange(` Rauhoitettu				`)).toEqual([]);
      expect(parseDateRange(`Kielletty`)).toEqual([]);
    });
  });

  describe("when given raw text date range", () => {
    it("returns the date range as array of date objects", () => {
      expect(parseDateRange("10.9.2017 — 10.10.2017")).toEqual([
        "2017-9-10",
        "2017-10-10"
      ]);
    });

    describe("with start time", () => {
      it("returns the date range as array of date objects", () => {
        expect(parseDateRange("20.8.2017 Klo 12 — 31.12.2017")).toEqual([
          "2017-8-20",
          "2017-12-31"
        ]);
      });
    });

    describe("with trailing extra info", () => {
      it("returns the date range as array of date objects", () => {
        expect(
          parseDateRange(
            "1.6.2017 — 15.6.2017 koiras, kartta osoitteessa: http://www.finlex.fi/data/sdliite/liite/6528.pdf"
          )
        ).toEqual(["2017-6-1", "2017-6-15"]);
      });
    });
  });
});
