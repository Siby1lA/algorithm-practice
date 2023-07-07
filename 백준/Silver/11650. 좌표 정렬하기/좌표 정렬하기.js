const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = stdin.splice(0, 1);
let data = stdin.map((data) => data.split(" ").map(Number));
data.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});
let result = "";
data.map((data) => {
  result += data.join(" ") + "\n";
});
console.log(result);