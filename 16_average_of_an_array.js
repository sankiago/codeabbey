let dataAmount = input();
let testCases = [];
for (let i = 0; i < dataAmount; i++) {
  let currentTestCase = input().split(" ").map(str => parseInt(str));
  currentTestCase.pop();
  testCases.push(currentTestCase);
}

function roundNum(numToRound) {
  numToRound = parseFloat(numToRound.toFixed(2));
  console.log(numToRound)

  const decimalNumber = (num) => {
    if (num % 1 == 0) {
      return 0;
    }
    let n = 2;
    let result = 0;
    for (i = 0; i < n; i++) {
      result += Math.trunc((num * 10 ** (i + 1)) % 10) * 10 ** -(i + 1);
    }
    result = parseFloat(result.toFixed(n));
    return result;
  };


  let incremento = numToRound > 0 ? 1 : -1;

  if (decimalNumber(numToRound) != 0) {
    if (decimalNumber(numToRound) == 0.5) {
      numToRound = numToRound + (1 - decimalNumber(numToRound));
    } else {
      if (decimalNumber(numToRound) > 0.5) {
        numToRound = numToRound + incremento * (1 - decimalNumber(numToRound));
      } else {
        if (decimalNumber(numToRound) < 0.5) {
          /* console.log(`${numToRound}  + ${-incremento} * ${decimalNumber(numToRound)}`) */
          numToRound = numToRound + -incremento * decimalNumber(numToRound);
          /* console.log(`rounded num = ${numToRound}`) */
        }
      }
    }
  }
  console.log(numToRound)
  return numToRound;
}

let testedCases = testCases.map((current) => {
  let average =
    current.reduce(
      (acumulado, current) => Number(acumulado) + Number(current)
    ) / current.length;
  let roundedAverage = roundNum(average);
  return roundedAverage;
});

output(testedCases.join(" "));
