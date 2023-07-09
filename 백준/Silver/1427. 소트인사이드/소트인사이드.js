const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const arr = input
  .split("")
  .map(Number)
  .sort((a, b) => b - a);

console.log(arr.join(""));
