sumAmount = parseInt(input());
arraysToSum = [];
for (let i = 0; i < sumAmount; i++) arraysToSum.push(input().split(" "));

console.log(arraysToSum)

arraysAdded = arraysToSum.map((currentArray) => {
  let addedArray = currentArray.reduce((acumulado, current, index) => {
    if(index == 0)
        acumulado = 0
    return (acumulado += parseInt(current));
  });
  return addedArray
}).join(' ')

output(arraysAdded)
