const book = {
  title: "Think & grow rich",
  author: "abc",
  year: 2024,

  updateYear: function (newYear) {
    this.year = newYear;
  },
};

book.updateYear(2023);
console.log(book);
