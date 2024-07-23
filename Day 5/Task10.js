function composeFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}

const increment = (x) => x + 1;
const double = (x) => x * 2;

const result = composeFunctions(increment, double, 5);

console.log(result);
