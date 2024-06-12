let pattern = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i - 1; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= 4 - i + 1; j++) {
    pattern += i;
  }
  pattern += "\n";
}

console.log(pattern);

// 1111
//  222
//   33
//    4
