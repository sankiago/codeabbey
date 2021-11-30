let firstInput = input().split(" ");
let dataAmount = firstInput[0];
let repeatedLength = firstInput[1];
let numsToCount = input()
  .split(" ")
  .map((str) => Number(str));

let repeated = [];
for(let i = 0; i < repeatedLength; i++){
    repeated.push([])
}

numsToCount.forEach((num, index) => {
  repeated[num - 1].push(num);
});

let result = repeated.map(arr => arr.length)

output(result.join(' '));
