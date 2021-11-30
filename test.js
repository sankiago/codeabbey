const timeStampToSeconds = ([days, hours, minutes, seconds]) => {
  let daysInSeconds = days * 24 * 60 * 60;
  let hoursInSeconds = hours * 60 * 60;
  let minutesInSeconds = minutes * 60;
  let totalSeconds =
    daysInSeconds + hoursInSeconds + minutesInSeconds + seconds;
  return totalSeconds;
};

const secondsToTimeStamp = (seconds) => {
  let secondsToDays = Math.trunc(seconds / (24 * 60 * 60));
  let secondsToHours = Math.trunc(seconds / (60 * 60)) - secondsToDays * 24;
  let secondsToMinutes =
    Math.trunc(seconds / 60) - secondsToHours * 60 - secondsToDays * 24 * 60;
  let secondsRemainder =
    seconds -
    secondsToMinutes * 60 -
    secondsToHours * 60 * 60 -
    secondsToDays * 24 * 60 * 60;
  return [secondsToDays, secondsToHours, secondsToMinutes, secondsRemainder];
};

console.log(
  secondsToTimeStamp(
    timeStampToSeconds([24,4,20,45]) - timeStampToSeconds([5,3,23,22])
  )
);

/*input data:
3
1 0 0 0 2 3 4 5
5 3 23 22 24 4 20 45
8 4 6 47 9 11 51 13

answer:
(1 3 4 5) (19 0 57 23) (1 7 44 26)*/
