const book = {
  title: "Think & grow rich",
  author: "abc",
  year: 2024,

  getDetails: function (){
    return `${this.title} by ${this.author}`
  }
};

console.log(book.getDetails());
