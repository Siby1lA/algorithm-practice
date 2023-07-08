const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = input.map((data) => data.split(" "));
arr.sort((a, b) => {
  if (Number(a[0]) !== Number(b[0])) {
    return Number(a[0]) - Number(b[0]);
  }
});

let answer = "";

arr.forEach((item) => {
  answer += item.join(" ") + "\n";
});

console.log(answer);
