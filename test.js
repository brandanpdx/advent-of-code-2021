let numbers = "123 234 234";

const arr = numbers
  .split(" ")
  .filter((x) => x)
  .map((x) => parseInt(x));

console.log(arr[0]);
console.log(typeof arr[1]);
