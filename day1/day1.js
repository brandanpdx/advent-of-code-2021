// https://adventofcode.com/2021/day/1

const fs = require("fs");

const measurements = fs.readFileSync("measurements.js", { encoding: "utf-8" });

const arr = measurements
  .split("\n")
  .filter((x) => x)
  .map((x) => parseInt(x));

const part1 = () => {
  let increaseCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      increaseCount++;
    }
  }
  console.log(increaseCount);
};

const part2 = () => {
  let increaseCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 3 < arr.length) {
      let prevWindow = arr[i] + arr[i + 1] + arr[i + 2];
      let currentWindow = arr[i + 1] + arr[i + 2] + arr[i + 3];
      if (prevWindow < currentWindow) {
        increaseCount++;
      }
    }
  }
  console.log(increaseCount);
};

part1();
part2();
