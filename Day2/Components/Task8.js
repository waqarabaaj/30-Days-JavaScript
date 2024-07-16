export default function () {
  // Program to use < and > to compare two numbers & show result in console log

  let num1 = 10;
  let num2 = 20;

  console.log(
    num1 < num2
      ? num1 + " is less than " + num2
      : num1 > num2
      ? num1 + " is greater than " + num2
      : num1 + " is equal to " + num2
  );
}
