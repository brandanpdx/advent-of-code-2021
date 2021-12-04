let input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

let splitInput = input.split("\n");

function gammaRate(input) {
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
    if (zeroCount > oneCount) {
      output += "0";
    } else {
      output += "1";
    }
  }
  return parseInt(output, 2);
}
function epsilonRate(input) {
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
    if (zeroCount < oneCount) {
      output += "0";
    } else {
      output += "1";
    }
  }
  return parseInt(output, 2);
}

console.log(`Output: ${gammaRate(splitInput) * epsilonRate(splitInput)}`);
