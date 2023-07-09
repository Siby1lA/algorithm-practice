const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let sum = 0;
let time = Array.from({ length: N }, () => 0);
arr.map((data, index) => {
  sum += data;
  time[index] = sum;
});

let result = 0;
time.map((data) => {
  result += data;
});
console.log(result);
