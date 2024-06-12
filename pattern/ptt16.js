let pattern = "";

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4 - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= i; j++) {
    pattern += i;
  }
  pattern += "\n";
}

console.log(pattern);

//    1
//   22
//  333
// 4444
