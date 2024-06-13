let arr = [50, 60, 20, 10, 40];

let ptr = 0;

while (ptr < arr.length - 1) {
  let temp = arr[ptr];
  arr[ptr] = arr[ptr + 1];
  arr[ptr + 1] = temp;

  ptr += 2;
}

console.log(arr);
