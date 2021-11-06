dataAmount = parseInt(input());
numsToCheck = [];
for (let i = 0; i < dataAmount; i++)
  numsToCheck.push(
    input()
      .split(" ")
      .map((numAsStr) => parseInt(numAsStr))
  );

checkedNums = numsToCheck
  .map((currentNums) => {
    max = "a";
    for (num of currentNums) {
      if (max == "a") {
        max = num;
      } else {
        if (num > max) min = num;
      }
    }
    console.log(min)
    return min
  })
  .join(" ");

output(checkedNums);
