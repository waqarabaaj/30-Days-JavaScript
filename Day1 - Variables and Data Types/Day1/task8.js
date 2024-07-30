export default function () {
  // Using let
  let variableLet = "Initial value";
  console.log(`Initial value of variableLet: ${variableLet}`);

  // Reassigning variable declared with let
  variableLet = "Reassigned value";
  console.log(`Reassigned value of variableLet: ${variableLet}`);

  // Using const
  const variableConst = "Initial value";
  console.log(`Initial value of variableConst: ${variableConst}`);

  // Trying to reassign variable declared with const
  try {
    variableConst = "Reassigned value";
  } catch (error) {
    console.log(`Error when reassigning variableConst: ${error.message}`);
  }

  // Demonstrating that const allows mutation of objects
  const objectConst = { key: "initial value" };
  console.log(`Initial value of objectConst: ${JSON.stringify(objectConst)}`);

  // Mutating the object assigned to a const variable
  objectConst.key = "mutated value";
  console.log(`Mutated value of objectConst: ${JSON.stringify(objectConst)}`);

  // Attempting to reassign the const object itself
  try {
    objectConst = { key: "new object" };
  } catch (error) {
    console.log(`Error when reassigning objectConst: ${error.message}`);
  }
}
