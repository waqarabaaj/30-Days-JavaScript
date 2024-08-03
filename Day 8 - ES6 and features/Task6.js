function sumAll(...numbers) {
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  return sum;
}

const result = sumAll(1, 2, 3, 4, 5);

console.log(result);
