// @flow

import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { parseDateRange } from "./DateRangeParser";

export const parseHuntersCalendarData = (filePath: string): Array<Object> => {
  if (filePath) {
    const text = readFile(filePath);

    var json = Papa.parse(text, {
      header: true
    });
    const result = json.data.map(animal => {
      return {
        ...animal,
        huntingSeason: {
          text: animal.huntingSeason,
          dates: parseDateRange(animal.huntingSeason)
        }
      };
    });
    return result;
  } else {
    return [];
  }
};

const readFile = (filePath: string): string => {
  const buffer = fs.readFileSync(path.join(__dirname, filePath));
  return buffer.toString("utf8");
};
