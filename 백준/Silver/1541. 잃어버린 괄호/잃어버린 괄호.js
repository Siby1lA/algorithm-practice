const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let minusSplit = input.split("-");

let answer = 0;
minusSplit.map((data, index) => {
  let cal = data
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (index === 0) {
    answer += cal;
  } else {
    answer -= cal;
  }
});
console.log(answer);
