const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const input = stdin.split(" ").map(Number);

input.sort((a, b) => a - b);

console.log(input.join(" "));