import {
  monthFullName as mmmm,
  monthShortName as mmm,
  monthNumbers as mm,
  dayWeekFullName as dddd,
  dayWeekShortName as ddd,
  dayMonthNumbers as dd,
} from "./static";

const dateMapper = { mm, mmm, mmmm, dd, ddd, dddd };
const formatMapper = {
  day: ["dddd", "ddd", "dd"],
  month: ["mmmm", "mmm", "mm"],
  year: ["yyyy", "yy"],
};

const getFormat = (formatsDictionary) => (format) => {
  return Object.keys(formatsDictionary).reduce((memo, period) => {
    const _findFormat = (per) =>
      formatsDictionary[period].find((item) => format.includes(item)) ||
      formatsDictionary[per][0];
    return { ...memo, [period]: _findFormat() };
  }, {});
};

const getCurrentFormat = getFormat(formatMapper);

const getDateData = (dateDictionary) => (date) => {
  const newDate = new Date(date);
  const yearFull = newDate.getFullYear();
  const yearShort = Number(yearFull.toString().substring(2));
  const month = newDate.getMonth();
  const dayMonth = newDate.getDate();
  const dayWeek = newDate.getDay();

  return {
    mm: dateDictionary["mm"][month],
    mmm: dateDictionary["mmm"][month],
    mmmm: dateDictionary["mmmm"][month],
    dd: dateDictionary["dd"][dayMonth],
    ddd: dateDictionary["ddd"][dayWeek],
    dddd: dateDictionary["dddd"][dayWeek],
    yy: yearShort,
    yyyy: yearFull,
  };
};

const getFormattedDates = getDateData(dateMapper);

export const dateFormatter = (date, format = "dd/mm/yyyy") => {
  if (date == null || format === null) return;

  const formattedDates = getFormattedDates(date);
  const currentFormat = getCurrentFormat(format);

  return Object.keys(currentFormat)
    .map((period) => ({
      format: currentFormat[period],
      value: formattedDates[currentFormat[period]],
    }))
    .reduce(
      (nextSate, { format, value }) => nextSate.replace(format, value),
      format
    );
};
