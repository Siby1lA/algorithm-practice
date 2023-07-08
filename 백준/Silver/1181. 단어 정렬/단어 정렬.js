const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const _ = stdin.splice(0, 1);
const word = [...new Set(stdin)];
word.sort((a, b) => {
    if(a.length !== b.length) return a.length - b.length;
    else if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
})
let answer = "";
word.map((data) => {
    answer += data.split(" ") + "\n"
})
console.log(answer)