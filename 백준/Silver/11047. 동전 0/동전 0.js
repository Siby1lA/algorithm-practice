const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

let [_N, K] = input.shift().split(" ").map(Number);
const coin = input.map(Number).sort((a, b) => b - a);

let count = 0;
coin.forEach((item) => {
  count += parseInt(K / item);
  K %= item;
});

console.log(count);
