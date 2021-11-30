let dataAmount = input();
let testCases = [];
for (let i = 0; i < dataAmount; i++)
  testCases.push(
    input()
      .split(" ")
      .map((str) => parseInt(str))
  );

function medianOfThree([min, median, max]) {
  if (min > max) {
    let aux = max;
    max = min;
    min = aux;
  }

  if (min > median) {
    let aux = median;
    median = min;
    min = aux;
  }
  if (median > max) {
    let aux = max;
    max = median;
    median = aux;
  }
  return median;
}

let testedCases = testCases.map((currentCase) => medianOfThree(currentCase));

output(testedCases.join(' '))