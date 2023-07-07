const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [NK, ...A] = stdin.split("\n");
const [_, K] = NK.split(" ").map(Number);
const sortA = A[0].split(" ").map(Number).sort((a, b) => a - b);
console.log(sortA[K - 1]);