let dataAmount = Number(input());
let numsToSequence = input().split(' ').map(str => parseInt(str))

const collatz_sequence = (num) => {
  let sequence = [num];
  let nxtNum = num;
  let isEven = (num) => num % 2 == 0;
  while (nxtNum != 1) {
    if (isEven(nxtNum)) {
      nxtNum = nxtNum / 2;
    } else {
      nxtNum = 3 * nxtNum + 1;
    }
    sequence.push(nxtNum);
  }
  return sequence;
};

let stepsAmountToOne = numsToSequence.map(num => collatz_sequence(num).length - 1)
output(stepsAmountToOne.join(' '))
