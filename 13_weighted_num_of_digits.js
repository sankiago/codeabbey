dataAmount = input();
numbers = input().split(" ");

numberDigits = (number) => {
  console.log(number);
  let digits = [];

  while (number / 10 > 1) {
    digits.push(number % 10);
    number = Math.trunc(number / 10);
  }

  if(number == 10){
    digits.push(0)
    digits.push(1)
  }else{
      digits.push(number);
  }

  digits.reverse()
  console.log(digits)
  return digits
};

function weightedSum(num) {
  let digits = numberDigits(num);
  return digits.reduce((acumulado, current, index) => {
    acumulado += current * (index + 1);
    return acumulado;
  }, 0);
}

console.log(weightedSum(10181781))

numbersSum = numbers.map((current) => weightedSum(current));
output(numbersSum.join(' '))