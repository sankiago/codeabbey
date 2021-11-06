dataAmount = parseInt(input());
numsToRound = [];
for (let i = 0; i < dataAmount; i++)
  numsToRound.push(
    input()
      .split(" ")
      .map((numAsStr) => parseInt(numAsStr))
  );

function roundNum(numToRound) {
  const decimalNumber = (num) =>
    parseFloat("0." + `${num}`.match(/\.\d+/)[0].slice(1));
  
    let incremento = numToRound > 0 ? 1 : -1;


  while (decimalNumber(numToRound) != null) {
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

let roundedNums = numsToRound
  .map((currentNums) => {
    let division = currentNums[0] / currentNums[1];
    let roundedDivision = roundNum(division);
    return roundedDivision
  })
  .join(" ");

output(roundedNums);
