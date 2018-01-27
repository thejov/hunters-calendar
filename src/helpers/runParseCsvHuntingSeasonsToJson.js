// @flow

import fs from "fs";
import { parseHuntersCalendarData } from "./HuntersCalendarDataParser";

const writeToFile = (text: string, filepath: string) => {
  fs.writeFile(filepath, text, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
};

export const parseHuntingSeasonsAndWriteToJsFile = () => {
  const csvFilepath = "./fixtures/hunting_seasons.csv";
  const huntingSeasonsAsJson =
    "export const huntingSeasons = " +
    JSON.stringify(parseHuntersCalendarData(csvFilepath));

  const jsFilepath = "./src/helpers/fixtures/hunting_seasons.js";
  writeToFile(huntingSeasonsAsJson, jsFilepath);
};
