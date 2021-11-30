let dataAmount = parseInt(input());
let numbersToModify = [];
for (let i = 0; i < dataAmount; i++) numbersToModify.push(input());

function isGreaterThan(a, b) {
  let hexSistem = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let aIndex = hexSistem.indexOf(a);
  let bIndex = hexSistem.indexOf(b);
  return aIndex > bIndex;
}

const toMax = (num) => {
  let arrayNum = String(num).split("");

  //lista ordenada de todos los elementos
  let sortedNumbersRepeated = [...arrayNum].sort((num1, num2) =>
    isGreaterThan(num1, num2) ? -1 : 1
  );

  //Eliminar duplicados
  let sortedNumbers = [];
  for (number of sortedNumbersRepeated) {
    if (!sortedNumbers.includes(number)) {
      sortedNumbers.push(number);
    }
  }

  //buscando el número que vamos a intercambiar(swap)
  let numToSwap = arrayNum.reduce((max, cur, index) =>
    isGreaterThan(cur, max) && cur != sortedNumbersRepeated[index] ? cur : max
  );

  //buscando el índice de ese número
  let numToSwapIndexes = arrayNum.reduce((acum, cur, index) => {
    if (cur == numToSwap) {
      acum.push(index);
    }
    return acum;
  }, []);

  //busucando el otro numero con el que se va a hacer el swap
  let lastIndexOrdered = -1;
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] == sortedNumbersRepeated[i]) {
      lastIndexOrdered = i;
    } else {
      break;
    }
  }
  
  //hacieno el swap
  maxNum = () =>{
    let aux = arrayNum[lastIndexOrdered + 1]
    arrayNum[lastIndexOrdered + 1] = arrayNum[numToSwapIndexes.at(-1)]
    arrayNum[numToSwapIndexes.at(-1)] = aux
    return arrayNum.join('')
  }

  return maxNum();
};

function isLessThan(a, b) {
  let hexSistem = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let aIndex = hexSistem.indexOf(a);
  let bIndex = hexSistem.indexOf(b);
  return aIndex < bIndex;
}

const toMin = (num) => {
  let arrayNum = String(num).split("");

  //lista ordenada de todos los elementos
  let sortedNumbersRepeated = [...arrayNum].sort((num1, num2) =>
    isLessThan(num1, num2) ? -1 : 1
  );

  //Comprobar que el cero no esté en el primer lugar
  if(sortedNumbersRepeated[0] == '0'){
    let nextTo0NumberIndex = undefined
    for(let i = 0; i<sortedNumbersRepeated.length; i++){
      if(sortedNumbersRepeated[i] != '0'){
        nextTo0NumberIndex = i
        break
      }
        
    }

    let aux = String(sortedNumbersRepeated[0])
    sortedNumbersRepeated[0] = sortedNumbersRepeated[nextTo0NumberIndex]
    sortedNumbersRepeated[nextTo0NumberIndex] = aux
  }
  

  //Eliminar duplicados
  let sortedNumbers = [];
  for (number of sortedNumbersRepeated) {
    if (!sortedNumbers.includes(number)) {
      sortedNumbers.push(number);
    }
  }
  
  //busucando el otro numero con el que se va a hacer el swap
  let lastIndexOrdered = -1;
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] == sortedNumbersRepeated[i]) {
      lastIndexOrdered = i;
    } else {
      break;
    }
  }

  //buscando el número que vamos a intercambiar(swap)
  let numToSwap
  if(lastIndexOrdered == -1){
    numToSwap = arrayNum.reduce((min, cur, index) =>
      isLessThan(cur, min) && cur != sortedNumbersRepeated[index] && cur != '0' ? cur : min
    ,'F');
  }else{
    numToSwap = arrayNum.reduce((min, cur, index) =>
      isLessThan(cur, min) && cur != sortedNumbersRepeated[index] ? cur : min
    ,'F');
  }

  //buscando el índice de ese número
  let numToSwapIndexes = arrayNum.reduce((acum, cur, index) => {
    if (cur == numToSwap) {
      acum.push(index);
    }
    return acum;
  }, []);

  
  //hacieno el swap
  minNum = () =>{
    let aux = arrayNum[lastIndexOrdered + 1]
    arrayNum[lastIndexOrdered + 1] = arrayNum[numToSwapIndexes.at(-1)]
    arrayNum[numToSwapIndexes.at(-1)] = aux
    return arrayNum.join('')
  }

  return minNum();
}





let modifiedNumbers = numbersToModify.map(
  (num) => `${toMin(num)} ${toMax(num)}`
);
output(modifiedNumbers.join(" "));
