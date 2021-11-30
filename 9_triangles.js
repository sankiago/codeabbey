const dataAmount = input();
const testCases = []
for(let i = 0; i<dataAmount; i++) testCases.push(input().split(' ').map(str => parseInt(str)))

function isTriangle(sides) {
  let largerSide = Math.max(...sides);
  let smallerSides = sides.filter((current) => current != largerSide);
  let smallerSidesSum = smallerSides.reduce(
    (acumulado, current) => (acumulado += current)
  );
  return smallerSidesSum > largerSide;
}

let testedCases = testCases.map((currentElement) =>
  isTriangle(currentElement) ? 1 : 0
);

output(testedCases.join(' '))