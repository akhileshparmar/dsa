let pattern = "";

for (let i = 65; i <= 67; i++) {
  for (let j = i; j < i + 3; j++) {
    pattern += String.fromCharCode(j);
  }
  pattern += "\n";
}

console.log(pattern);


// ABC
// BCD
// CDE
