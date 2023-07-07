const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

let [_, ...input] = stdin.split("\n").map(Number);

input.sort((a, b) => a - b);
console.log(input.join(" ").replace(/ /g, "\n"));