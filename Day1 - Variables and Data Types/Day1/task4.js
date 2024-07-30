export default function () {
  let num = 123;
  let str = "abc123";
  let bool = "true";
  let obj = { key1: 123, key2: 456 };
  let arr = [1, 2, 3, 4, 5, 6, 7];

  console.log(typeof num);
  console.log(typeof str);
  console.log(typeof bool);
  console.log(typeof obj);
  console.log(typeof arr);
  console.log("Is Array", Array.isArray(obj));
  console.log("Is Array", Array.isArray(arr));
}
