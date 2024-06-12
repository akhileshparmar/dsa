let pattern = "";

for (let i = 1; i <= 3; i++) {
  for (let j = 3; j >= 1; j--) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern);

// 321
// 321
// 321
