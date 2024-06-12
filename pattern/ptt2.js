let pattern = "";
let count = 1;

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    pattern += count;
    count++;
  }
  pattern += "\n";
}

console.log(pattern);

// 123
// 456
// 789

