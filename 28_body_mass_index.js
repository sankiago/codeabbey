let dataAmount = input();
let testCases = [];
for (let i = 0; i < dataAmount; i++)
  testCases.push(
    input()
      .split(" ")
      .map((str) => parseFloat(str))
  );

function bmiGrade([weight, height]) {
  const BMI = weight / height ** 2;
  if (BMI < 18.5) {
    return "under";
  } else if ( BMI < 25.0) {
    return "normal";
  } else if ( BMI < 30.0) {
    return "over";
  } else if (30.0 <= BMI) {
    return "obese";
  }
}

let testedCases = testCases.map((currentElement) => bmiGrade(currentElement))
output(testedCases.join(' '))
