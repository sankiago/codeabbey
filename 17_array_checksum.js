let dataAmount = input()
let data = input().split(' ').map(str => Number(str))

let checkSum = data.reduce((prev, cur) => {
  prev += cur;
  prev = prev * 113;
  prev = prev % 10000007;
  return prev
}, 0);

output(checkSum)