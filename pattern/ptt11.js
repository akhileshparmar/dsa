let pattern = "";
let count = 64;

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += String.fromCharCode(count + j);
  }

  count++;
  pattern += "\n";
}

console.log(pattern);

// A
// BC
// CDE
// DEFG
