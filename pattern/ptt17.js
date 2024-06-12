let pattern = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i - 1; j++) {
    pattern += " ";
  }
  for (let j = i; j <= 4; j++) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern);

// 1234
//  234
//   34
//    4
