// https://adventofcode.com/2021/day/2

const fs = require("fs");

const course = fs.readFileSync("course.txt", { encoding: "utf-8" });

const arr = course.split("\n");

let arr2 = [];

for (i = 0; i < arr.length; i++) {
  let split = arr[i].split(" ");
  arr2.push(split);
}

const part1 = () => {
  let horizontal = 0;
  let depth = 0;

  for (commands of arr2) {
    let direction = commands[0];
    let value = parseInt(commands[1]);

    switch (direction) {
      case "forward":
        horizontal += value;
        break;
      case "up":
        depth -= value;
        break;
      case "down":
        depth += value;
        break;
    }
  }

  console.log(horizontal * depth);
};

const part2 = () => {
  let aim = 0;
  let horizontal = 0;
  let depth = 0;

  for (commands of arr2) {
    let direction = commands[0];
    let value = parseInt(commands[1]);

    switch (direction) {
      case "up":
        aim -= value;
        break;
      case "down":
        aim += value;
        break;
      case "forward":
        horizontal += value;
        depth += aim * value;
        break;
    }
  }
  console.log(horizontal * depth);
};

part2();
