const book1 = {
  title: "Think and grow rich",
  author: "abc",
  year: 2024,
};

const book2 = {
  title: "Atomic habits",
  author: "xyz",
  year: 2023,
};

const library = {
  name: "City library",
  books: [book1, book2],
};

library.books.forEach((book) => {
  console.log("Books avaiable with title:", book.title);
});
