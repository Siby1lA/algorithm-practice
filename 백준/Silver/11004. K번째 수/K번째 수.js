const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [_, K] = stdin[0].split(" ").map(Number);
const A = stdin[1].split(" ").map(Number);
const sortA = A.sort((a, b) => a - b);
console.log(sortA[K - 1]);