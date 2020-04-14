const mmmm = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const mmm = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const mm = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const dd = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const ddd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dddd = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dateMapper = { mm, mmm, mmmm, dd, ddd, dddd };
const formatMapper = {
  day: ["dddd", "ddd", "dd"],
  month: ["mmmm", "mmm", "mm"],
  year: ["yyyy", "yy"],
};

const getCurrentFormat = (format) => {
  return Object.keys(formatMapper).reduce((memo, period) => {
    const getFormat = (per) =>
      formatMapper[period].find((item) => format.includes(item)) ||
      formatMapper[per][0];
    return { ...memo, [period]: getFormat() };
  }, {});
};

const getDateData = (date) => {
  const newDate = new Date(date);
  const yearFull = newDate.getFullYear();
  const yearShort = Number(yearFull.toString().substring(2));
  const month = newDate.getMonth();
  const dayMonth = newDate.getDate();
  const dayWeek = newDate.getDay();
  return {
    mm: dateMapper["mm"][month],
    mmm: dateMapper["mmm"][month],
    mmmm: dateMapper["mmmm"][month],
    dd: dateMapper["dd"][dayMonth],
    ddd: dateMapper["ddd"][dayWeek],
    dddd: dateMapper["dddd"][dayWeek],
    yy: yearShort,
    yyyy: yearFull,
  };
};

export const dateFormatter = (date, format) => {
  const currentDateData = getDateData(date);
  const currentFormat = getCurrentFormat(format);
  console.log(Object.values(currentFormat));
  return Object.keys(currentFormat)
    .reduce((memo, period) => {
      return [
        ...memo,
        {
          format: currentFormat[period],
          value: currentDateData[currentFormat[period]],
        },
      ];
    }, [])
    .reduce(
      (nextSate, { format, value }) => nextSate.replace(format, value),
      format
    );

  // return `${day} ${month}, ${year}`;
};
console.log(dateFormatter(1549477494000, "dd mmmm, yyyy"));
