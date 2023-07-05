const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

const [A, B] = input.split(" ");
console.log(solution(A, B));

function solution(A, B) {
  const reverseA = Number(A.split("").reverse().join(""));
  const reverseB = Number(B.split("").reverse().join(""));
  return Math.max(reverseA, reverseB);
}
