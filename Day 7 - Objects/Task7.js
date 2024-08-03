const book = {
  title: "Think and grow rich",
  author: "abc",
  year: 2024,

  getTitleAndYear: function () {
    return `${this.title} was publish in the year ${this.year}`;
  },
};

console.log(book.getTitleAndYear());
