const book = {
  title: "Think and grow rich",
  author: "abc",
  year: 2024,
};

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
