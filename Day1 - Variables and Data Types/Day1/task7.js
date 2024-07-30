export default function () {
  // Integer
  let integerVar = 10;
  console.log(`Value: ${integerVar}, Type: ${typeof integerVar}`);

  // Float
  let floatVar = 10.5;
  console.log(`Value: ${floatVar}, Type: ${typeof floatVar}`);

  // String
  let stringVar = "Hello, World!";
  console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);

  // Boolean
  let booleanVar = true;
  console.log(`Value: ${booleanVar}, Type: ${typeof booleanVar}`);

  // Array
  let arrayVar = [1, 2, 3, 4, 5];
  console.log(`Value: ${arrayVar}, Type: ${typeof arrayVar}`);

  // Object
  let objectVar = { key1: "value1", key2: "value2" };
  console.log(`Value: ${objectVar}, Type: ${typeof objectVar}`);

  // Null
  let nullVar = null;
  console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`);

  // Undefined
  let undefinedVar;
  console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`);

  // Function
  let functionVar = function () {
    return "Hello!";
  };
  console.log(`Value: ${functionVar}, Type: ${typeof functionVar}`);

  // Symbol
  let symbolVar = Symbol("symbol");
  console.log(`Value: ${symbolVar.toString()}, Type: ${typeof symbolVar}`);
}
