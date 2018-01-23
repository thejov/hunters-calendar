// @flow

export const parseDateRange = (rawTextDateRange: string): Array<Date> => {
  try {
    const dateArray = rawTextDateRange
      .split("&mdash;")
      .map(date => parseDate(date));
    return dateArray;
  } catch (e) {
    return [];
  }
};

// Finnish date format: day.month.year
// e.g. 23.9.2017
const parseDate = (date: string): Date => {
  const dateAsArray = date
    .trim()
    .split(".")
    .reverse()
    .map(elem => Number.parseInt(elem));

  if (dateAsArray.some(elem => Number.isInteger(elem))) {
    return new Date(...dateAsArray);
  } else {
    throw "Not date";
  }
};
