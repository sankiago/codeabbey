let data = input()
  .split(" ")
  .slice(0, -1)
  .map((str) => parseInt(str));

/* const bubbleSort = (array) => {
  let countinousSortedPairs = 0;
  let swaps = 0;

  while (countinousSortedPairs < array.length - 2) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        countinousSortedPairs = 0;
        swaps++;
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      } else {
        countinousSortedPairs++;
      }
    }
  }

  return [array, swaps];
}; */

const bubble = (array) => {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let aux = array[i];
      array[i] = array[i + 1];
      array[i + 1] = aux;
      swaps++;
    }
  }
  return [array, swaps];
};

let bubbleInData = bubble(data);

let checkSum = bubbleInData[0].reduce((prev, cur) => {
  prev += cur;
  prev = prev * 113;
  prev = prev % 10000007;
  return prev;
}, 0);

output(`${bubbleInData[1]} ${checkSum}`);
