const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let n = +input;
let count = 0;

while (n > 0) {
  if (n % 5 === 0) {
    n -= 5;
  } else {
    n -= 3;
  }
  count += 1;
}
console.log(n === 0 ? count : -1);
