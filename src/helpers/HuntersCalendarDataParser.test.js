// @flow

import { parseHuntersCalendarData } from "./HuntersCalendarDataParser";

describe("parseHuntersCalendarData", () => {
  describe("when given empty input", () => {
    it("returns an empty array", () => {
      expect(parseHuntersCalendarData("")).toEqual([]);
    });
  });

  describe("when given input with single animal game times", () => {
    it("returns array with  parsed animal species with its hunting regions and dates", () => {
      const expected = [
        {
          species: "Sini- eli heinäsorsa",
          region: "Koko maassa",
          huntingSeason: [new Date("2017-8-20"), new Date("2017-12-31")]
        }
      ];

      const filepath = "./fixtures/hunting_seasons_single_species.csv";
      expect(parseHuntersCalendarData(filepath)).toEqual(expected);
    });
  });

  describe("when given full input of raw hunters calendar data", () => {
    it("returns the listed game animal species, hunting regions and dates parsed", () => {
      const expected = [
        {
          species: "Piisami",
          region: "Koko maassa",
          huntingSeason: [new Date("2017-10-1"), new Date("2018-5-19")]
        },
        {
          species: "Kettu",
          region: "Lapin maakunnassa",
          huntingSeason: [new Date("2017-8-1"), new Date("2018-4-30")]
        },
        {
          species: "Kettu",
          region: "Muualla maassa",
          huntingSeason: [new Date("2017-8-1"), new Date("2018-4-14")]
        }
      ];

      const filepath = "./fixtures/hunting_seasons_multiple.csv";
      expect(parseHuntersCalendarData(filepath)).toEqual(expected);
    });
  });
});
