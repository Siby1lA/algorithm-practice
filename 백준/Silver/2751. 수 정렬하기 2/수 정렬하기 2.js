const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim();

const [_, ...input] = stdin.split("\n");
input.sort((a, b) => a - b);
console.log(input.join(" ").replace(" ", "\n"));