function leapYearCheck(year) {
  console.log(
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? "Leap year"
      : "Not a leap year"
  );
}

leapYearCheck(2023);
