// https://adventofcode.com/2021/day/3

const fs = require("fs");

const data = fs.readFileSync("binary.txt", { encoding: "utf-8" }).split("\n");

const input = Array.from(data, (x) => x.split(""));

const gammaRate = () => {
  // Initialize empty string to store output
  let output = "";

  // Loop over each line of binary
  for (let i = 0; i < input[0].length; i++) {
    let zeroCount = 0;
    let oneCount = 0;

    // Check bit of each element
    for (element of input) {
      if (element[i] == "0") {
        zeroCount += 1;
      } else {
        oneCount += 1;
      }
    }

    // Determine the most common bit
    if (zeroCount > oneCount) {
      output += "0";
    } else {
      output += "1";
    }
  }
  // Convert string to int and multiply it by power of 2
  return parseInt(output, 2);
};

const epsilonRate = () => {
  let output = "";

  for (let i = 0; i < input[0].length; i++) {
    let zeroCount = 0;
    let oneCount = 0;

    for (element of input) {
      if (element[i] == "0") {
        zeroCount += 1;
      } else {
        oneCount += 1;
      }
    }

    // Determine least common bit
    if (zeroCount < oneCount) {
      output += "0";
    } else {
      output += "1";
    }
  }
  return parseInt(output, 2);
};

const powerConsuption = gammaRate() * epsilonRate();
console.log(powerConsuption);
