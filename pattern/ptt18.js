let pattern = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4 - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= i; j++) {
    pattern += j;
  }
  for (let j = i - 1; j >= 1; j--) {
    pattern += j;
  }
  pattern += "\n";
}

console.log(pattern);

//    1
//   121
//  12321
// 1234321
