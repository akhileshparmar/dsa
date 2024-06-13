let arr = [50, 60, 20, 10, 40];

let minValue = Infinity;
let maxValue = -Infinity;

for (let item of arr) {
  if (item < minValue) minValue = item;

  if (item > maxValue) maxValue = item;
}
console.log("🚀 ~ minValue:", minValue);
console.log("🚀 ~ maxValue:", maxValue);
