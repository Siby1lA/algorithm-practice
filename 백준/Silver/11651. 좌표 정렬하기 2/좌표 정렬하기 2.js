const fs = require('fs');
const stdin = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = stdin.splice(0, 1);
const data = stdin.map((data) => data.split(" ").map(Number));
data.sort((a, b) => {
    if(a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
});
let answer = "";
data.map((data) => answer += data.join(" ") + "\n");
console.log(answer);