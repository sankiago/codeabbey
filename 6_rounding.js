//Getting codeabbey input
dataAmount = parseInt(input());
numsToRound = [];
for (let i = 0; i < dataAmount; i++)
  numsToRound.push(
    input()
      .split(" ")
      .map((numAsStr) => parseInt(numAsStr))
  );

function roundNum(numToRound) {
  const decimalNumber = (num) => {
    const pointAndDecimal = "0" + `${num}`.match(/\.\d+/)
    let result = pointAndDecimal != null ? parseFloat(pointAndDecimal) : null
    return result
  }

  let incremento = numToRound > 0 ? 1 : -1;

  while (decimalNumber(numToRound) != null && decimalNumber(numToRound) != 0) {
      console.log(decimalNumber(numToRound))
    if (decimalNumber(numToRound) == 0.5) {
      numToRound = numToRound + (1 - decimalNumber(numToRound));
    } else {
      if (decimalNumber(numToRound) > 0.5) {
        numToRound = numToRound + incremento * (1 - decimalNumber(numToRound));
      } else {
        if (decimalNumber(numToRound) < 0.5) {
          numToRound = numToRound + -incremento * decimalNumber(numToRound);
        }
      }
    }
  }
  return numToRound;
}

//Rounding numbers
let roundedNums = numsToRound
  .map((currentNums) => {
    let division = currentNums[0] / currentNums[1];
    let roundedDivision = roundNum(division);
    return roundedDivision
  })
  .join(" ");

output(roundedNums);
