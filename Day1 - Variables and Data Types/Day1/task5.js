export default function () {
  let a = 5;
  {
    let a = 10; // block scope
    console.log(a);
  }
  console.log(a);

  let variable = 20;
  console.log(variable); // first print 20 then print 30 because we first assign variable to value 20 and then reassign 30 to variable so first print 20 then print 30
  variable = 30;
  console.log(variable);
}
