let pattern = "";
let count = 1;

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += count;
    count++;
  }
  pattern += "\n";
}

console.log(pattern);

// 1
// 23
// 456
// 78910
