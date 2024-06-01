const arr = [
  ["P", "e", "p", "a"],
  ["I", "w", "a", "n"],
  ["t", "t", "o", "b"],
  ["e", "d", "e", "c"],
  ["o", "d", "e", "d"],
  ["c", "o", "m", "p"],
  ["l", "e", "t", "e"],
  ["l", "y", "0", "0"],
];

const key = "four";
let leftmostcol = 0;
let rightmostcol = arr[0].length;
let bottommostrow = arr.length - 1;
let topmostrow = 0;
const tempArr = [];
const finalArr = [];

// Traverse the array
while (leftmostcol < rightmostcol && topmostrow <= bottommostrow) {
  // Traverse down
  for (let x = topmostrow; x <= bottommostrow; x++) {
    tempArr.push(arr[x][leftmostcol]);
  }
  leftmostcol++;
  finalArr.push(...tempArr);
  tempArr.length = 0;

  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse right
  if (leftmostcol < rightmostcol) {
    for (let x = leftmostcol; x < rightmostcol; x++) {
      tempArr.push(arr[bottommostrow][x]);
    }
    finalArr.push(...tempArr);
    tempArr.length = 0;
    bottommostrow--;
  } else {
    // Traverse up
    for (let x = bottommostrow; x >= topmostrow; x--) {
      tempArr.push(arr[x][leftmostcol - 1]);
    }
    leftmostcol++; // Increment for next cycle
    finalArr.push(...tempArr);
    tempArr.length = 0;
    continue;
  }

  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse left
  for (let x = rightmostcol - 1; x >= leftmostcol; x--) {
    tempArr.push(arr[bottommostrow][x]);
  }
  finalArr.push(...tempArr);
  tempArr.length = 0;
  bottommostrow--;

  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse up
  for (let x = bottommostrow; x >= topmostrow; x--) {
    tempArr.push(arr[x][leftmostcol]);
  }
  leftmostcol++;
  finalArr.push(...tempArr);
  tempArr.length = 0;
}

// Combine the final array into one string
const resultString = finalArr.join("");
console.log("Final traversal result:", resultString);
