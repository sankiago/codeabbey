let dataAmount = input();
let testCases = [];
for (let i = 0; i < dataAmount; i++)
  testCases.push(
    input()
      .split(" ")
      .map((str) => parseInt(str))
  );

function createProgression([firstElement, step, length]) {
    progression = [];
  for (let i = 0; i < length; i++) progression.push(step * i + firstElement);
  return progression;
}

testedCases = testCases.map((currentCase) =>
  createProgression(currentCase).reduce(
    (acumulado, current) => (acumulado += current)
  )
);

output(testCases.join(' '))