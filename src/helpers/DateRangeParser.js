// @flow

export const parseDateRange = (rawTextDateRange: string): Array<string> => {
  try {
    const dateArray = rawTextDateRange.split("—").map(date => parseDate(date));
    return dateArray;
  } catch (e) {
    return [];
  }
};

// Finnish date format: day.month.year
// e.g. 23.9.2017
const parseDate = (date: string): string => {
  var re = /\D*(\d{1,2})\.(\d{1,2})\.(20\d{2}).*/;
  const hasDate = re.test(date);
  if (hasDate) {
    return date.replace(re, "$3-$2-$1");
  } else {
    throw "Not date";
  }
};
