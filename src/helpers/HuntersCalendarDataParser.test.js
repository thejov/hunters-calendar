// @flow

import { parseHuntersCalendarData } from "./HuntersCalendarDataParser";

describe("parseHuntersCalendarData", () => {
  describe("when given empty input", () => {
    it("returns an empty array", () => {
      expect(parseHuntersCalendarData("")).toEqual([]);
    });
  });

  describe("when given input with single animal hunting seasons", () => {
    it("returns array with  parsed animal species with its hunting regions and dates", () => {
      const expected = [
        {
          species: "Sini- eli heinäsorsa",
          region: "Koko maassa",
          huntingSeason: {
            text: "20.8.2017 Klo 12 — 31.12.2017",
            dates: ["2017-8-20", "2017-12-31"]
          }
        }
      ];

      const filepath = "./fixtures/hunting_seasons_single_species.csv";
      expect(parseHuntersCalendarData(filepath)).toEqual(expected);
    });
  });

  describe("when given input with multiple animal hunting seasons", () => {
    it("returns the listed game animal species, hunting regions and dates parsed", () => {
      const expected = [
        {
          species: "Piisami",
          region: "Koko maassa",
          huntingSeason: {
            text: "1.10.2017 — 19.5.2018",
            dates: ["2017-10-1", "2018-5-19"]
          }
        },
        {
          species: "Kettu",
          region: "Lapin maakunnassa",
          huntingSeason: {
            text: "1.8.2017 — 30.4.2018",
            dates: ["2017-8-1", "2018-4-30"]
          }
        },
        {
          species: "Kettu",
          region: "Muualla maassa",
          huntingSeason: {
            text: "1.8.2017 — 14.4.2018",
            dates: ["2017-8-1", "2018-4-14"]
          }
        }
      ];

      const filepath = "./fixtures/hunting_seasons_multiple.csv";
      expect(parseHuntersCalendarData(filepath)).toEqual(expected);
    });
  });
});
