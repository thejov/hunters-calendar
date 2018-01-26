// @flow

export const parseDateRange = (rawTextDateRange: string): Array<Date> => {
  try {
    const dateArray = rawTextDateRange.split("—").map(date => parseDate(date));
    return dateArray;
  } catch (e) {
    return [];
  }
};

// Finnish date format: day.month.year
// e.g. 23.9.2017
const parseDate = (date: string): Date => {
  var re = /\D*(\d{1,2})\.(\d{1,2})\.(20\d{2}).*/;
  const hasDate = re.test(date);
  if (hasDate) {
    const formattedDate = date.replace(re, "$3-$2-$1");
    const result = new Date(formattedDate);
    return result;
  } else {
    throw "Not date";
  }
};
