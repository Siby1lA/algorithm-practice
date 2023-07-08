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

const set = new Set(arr);
const map = new Map();

[...set].forEach((item, index) => {
  map.set(item, index);
});

let answer = "";

input[0]
  .split(" ")
  .map(Number)
  .forEach((item) => {
    answer += map.get(item) + " ";
  });
console.log(answer);
