let dataAmount = input();
numSets = [];
for (let i = 0; i < dataAmount; i++)
  numSets.push(
    input()
      .split(" ")
      .map((str) => parseInt(str))
  );

numberDigits = (number) => {
  console.log(number);
  let digits = [];

  while (number / 10 > 1) {
    digits.push(number % 10);
    number = Math.trunc(number / 10);
  }

  digits.push(number);
  console.log(digits.reverse());
  return digits.reverse();
};

let digitNumSetsSums = numSets.map((currentNumSet) => {
  numSum = currentNumSet[0] * currentNumSet[1] + currentNumSet[2];

  sumDigits = numberDigits(numSum);
  return sumDigits.reduce((acumulado, cur) => (acumulado += cur));
});

output(digitNumSetsSums.join(" "));
