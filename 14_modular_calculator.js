let initialValue = input();
let number_operationList = [];

number_operationList.push(input().split(" "));

while (true) {
  number_operationList.push(input().split(" "));
  if (number_operationList[number_operationList.length - 1][0] == "%") break;
}

let evaluatedOperations = number_operationList.reduce((prev, cur) => {
  num = BigInt(cur[1]);
  switch (cur[0]) {
    case "+":
      return prev + num;
    case "*":
      return prev * num;
    case "%":
      return prev % num;
  }
}, BigInt(initialValue));

output(evaluatedOperations.toString());
