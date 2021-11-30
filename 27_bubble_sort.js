let arraySize = input()
let data = input()
  .split(" ")
  .map((str) => parseInt(str));

const bubbleSort = (array) => {
  let countinousSortedPairs = 0;
  let swaps = 0;
  let passes = 0;
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
    passes++
  }

  return [passes, swaps];
};



output(bubbleSort(data).join(' '));
