let pattern = "";

for (let i = 4; i >= 1; i--) {
  for (let j = 1; j <= 4 - i; j++) {
    pattern += " ";
  }
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  pattern += "\n";
}

console.log(pattern);

// ****
//  ***
//   **
//    *
