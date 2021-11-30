let dataAmount = Number(input());
let data = [];
for (let i = 0; i < dataAmount; i++)
  data.push(
    input()
      .split(" ")
      .map((str) => Number(str))
  );

const linearEquation = ([x1, y1, x2, y2]) => {
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;
  return [m, b];
};

console.log(data);
let result = data.map((points) => `(${linearEquation(points).join(" ")})`);
console.log(result);
output(result.join(" "));
