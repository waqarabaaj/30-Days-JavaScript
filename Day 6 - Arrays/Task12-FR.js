// Creating a two-dimensional array (2x2 matrix)
let matrix = [
  [1, 2],
  [3, 4],
];

console.log("Original matrix:");
console.log(matrix);

// Accessing an element in the matrix
console.log("Element at (0, 1):", matrix[0][1]); // Output: 2

// Modifying an element in the matrix
matrix[1][1] = 5;
console.log("Matrix after modifying element at (1, 1):");
console.log(matrix);

// Adding a new row to the matrix
let newRow = [5, 6];
matrix.push(newRow);
console.log("Matrix after adding a new row:");
console.log(matrix);

// Adding a new column to each row in the matrix
matrix.forEach((row) => row.push(row.length + 1));
console.log("Matrix after adding a new column:");
console.log(matrix);

// Iterating over the matrix and logging each element
console.log("Iterating over the matrix:");
matrix.forEach((row) => {
  row.forEach((element) => {
    console.log(element);
  });
});

// Finding the sum of all elements in the matrix
let sum = 0;
matrix.forEach((row) => {
  row.forEach((element) => {
    sum += element;
  });
});
console.log("Sum of all elements in the matrix:", sum);
