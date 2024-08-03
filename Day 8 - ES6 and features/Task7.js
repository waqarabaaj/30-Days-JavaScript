const multiply = (a, b = 1) => a * b;

const resultWithBothParameters = multiply(4, 6);
console.log("Result with both parameters:", resultWithBothParameters);

const resultWithOneParameters = multiply(8);
console.log("Result with one parameters:", resultWithOneParameters);

// want to add parameters dynamically

const multiply2 = (...numbers) => {
  return numbers.reduce((product, number) => product * number, 1);
};

const twoNum = multiply2(2, 4);
console.log("product to two parameters:", twoNum);

const threeNum = multiply2(2, 4, 8);
console.log("product to two parameters:", threeNum);

const fourNum = multiply2(2, 4, 6 , 5);
console.log("product to two parameters:", fourNum);
