let pattern = "";
let count = 65;

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += String.fromCharCode(count);
  }
  count++;
  pattern += "\n";
}

console.log(pattern);

// A
// BB
// CCC
