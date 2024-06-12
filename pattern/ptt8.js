let pattern = "";
let count = 65;

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    pattern += String.fromCharCode(count);
    count += 1;
  }
  pattern += "\n";
}

console.log(pattern);

// ABC
// DEF
// GHI
