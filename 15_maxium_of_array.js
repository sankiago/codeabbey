const dataAmount = 300;
const numbers = input()
  .split(" ")
  .map((numAsStr) => parseInt(numAsStr));

let min = "a";
let max = "a";

for (num of numbers) {
  if (min == "a") {
    min = num;
  } else {
    if (num < min) {
      min = num;
    }
  }

  if (max == "a") {
    max = num;
  } else {
    if (num > max) {
      max = num;
    }
  }
}

output(`${max} ${min}`)