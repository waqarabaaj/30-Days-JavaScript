export default function () {
  // Define two numbers
  let num1 = 10;
  let num2 = 5;

  // Perform comparisons
  let isEqual = num1 == num2;
  let isNotEqual = num1 != num2;
  let isGreater = num1 > num2;
  let isLess = num1 < num2;
  let isGreaterOrEqual = num1 >= num2;
  let isLessOrEqual = num1 <= num2;

  // Combine conditions using logical operators
  let logicalAnd = num1 > 0 && num2 > 0;
  let logicalOr = num1 > 0 || num2 > 0;
  let logicalNot = !(num1 > 0);

  // Log the results
  console.log("Is Equal: " + isEqual);
  console.log("Is Not Equal: " + isNotEqual);
  console.log("Is Greater: " + isGreater);
  console.log("Is Less: " + isLess);
  console.log("Is Greater or Equal: " + isGreaterOrEqual);
  console.log("Is Less or Equal: " + isLessOrEqual);
  console.log("Logical AND (both positive): " + logicalAnd);
  console.log("Logical OR (at least one positive): " + logicalOr);
  console.log("Logical NOT (num1 is not positive): " + logicalNot);
}
