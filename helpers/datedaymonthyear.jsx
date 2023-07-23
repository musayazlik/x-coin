const DateDayMonthYear = ({ value }) => {
  const date = new Date(value);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  if (month < 10) {
    month = "0" + month;
  }

  const formattedDate =
    day + "/" + month + "/" + year + " " + hour + ":" + minute;

  return formattedDate;
};

export default DateDayMonthYear;
