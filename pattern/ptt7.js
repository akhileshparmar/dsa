let pattern = "";

for (let i = 65; i <= 67; i++) {
  for (let j = 1; j <= 3; j++) {
    pattern += String.fromCharCode(i);
  }
  pattern += "\n";
}

console.log(pattern);

// AAA
// BBB
// CCC
