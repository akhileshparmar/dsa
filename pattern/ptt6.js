let pattern = "";

for (let i = 1; i <= 4; i++) {
  for (let j = i; j >= 1; j--) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern)

// 1
// 21
// 321
// 4321