export default function () {
  // Program to use == and === operator to compare two variables show result in console log
  let num1 = 10;
  let num2 = "10";

  if (num1 == num2) {
    console.log("num1 == num2 is true");
  } else {
    console.log("num1 == num2 is false");
  }

  console.log(typeof num1);

  if (num1 === num2) {
    console.log("num1 === num2 is true");
  } else {
    console.log("num1 === num2 is false");
  }
  console.log(typeof num2);
}
