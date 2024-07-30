export default function () {
  // Program to use <= and >= to compare two numbers & show result in console log
  // using ternory operator

  let num1 = 10;
  let num2 = 5;

  console.log(
    num1 <= num2
      ? num1 === num2
        ? num1 + " is equal to " + num2
        : num1 + " is less then equal to " + num2
      : num1 + " is greater than " + num2
  );

  // using if else
  if (num1 <= num2) {
    if (num1 === num2) {
      console.log(num1 + "is equal to" + num2);
    } else {
      console.log(num1 + "is less then" + num2);
    }
  } else {
    console.log(num1 + " is greater than " + num2);
  }
}
