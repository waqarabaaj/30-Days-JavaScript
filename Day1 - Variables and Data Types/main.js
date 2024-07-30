import "./style.css";
import task1 from "./Day1/task1.js";
import task2 from "./Day1/task2.js";
import task3 from "./Day1/task3.js";
import task4 from "./Day1/task4.js";
import task5 from "./Day1/task5.js";
import task6 from "./Day1/task6.js";
import task7 from "./Day1/task7.js";
import task8 from "./Day1/task8.js";

document.querySelector("#app").innerHTML = `
  <h2> JavaScript challenge Day 1 with Chai aur Code </h2>
  <button id="btn1">Task 1</button>
  <button id="btn2">Task 2</button>
  <button id="btn3">Task 3</button>
  <button id="btn4">Task 4</button>
  <button id="btn5">Task 5</button>
  <button id="btn6">Task 6</button>
  <button id="btn7">Feature request 1</button>
  <button id="btn8">Feature request 2</button>
`;

document.getElementById("btn1").addEventListener("click", () => {
  task1();
});

document.getElementById("btn2").addEventListener("click", () => {
  task2();
});

document.getElementById("btn3").addEventListener("click", () => {
  task3();
});

document.getElementById("btn4").addEventListener("click", () => {
  task4();
});

document.getElementById("btn5").addEventListener("click", () => {
  task5();
});

document.getElementById("btn6").addEventListener("click", () => {
  task6();
});

document.getElementById("btn7").addEventListener("click", () => {
  task7();
});

document.getElementById("btn8").addEventListener("click", () => {
  task8();
});
