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

// Initialize the result arrays
let firstAndSecondColumns = [];
let thirdColumnExceptLast = [];
let fourthColumnExceptLast = [];

// Traverse the original array
for (let i = 0; i < arr.length; i++) {
  // Add the first element of each row to the firstAndSecondColumns array
  if (i !== arr.length - 1) {
    firstAndSecondColumns.push(arr[i][0]);
  } else {
    firstAndSecondColumns.push(...arr[i]); // Spread operator to add all elements of the last row
  }

  // Add the third element of each row except the last to the thirdColumnExceptLast array
  if (i !== arr.length - 1) {
    thirdColumnExceptLast.push(arr[i][2]);
  }

  // Add the fourth element of each row except the last to the fourthColumnExceptLast array
  if (i !== arr.length - 1) {
    fourthColumnExceptLast.push(arr[i][3]);
  }
}

// Create the final structure
const result = [
  firstAndSecondColumns,
  thirdColumnExceptLast,
  fourthColumnExceptLast.map(
    (char, index) => char + arr[arr.length - 1][index + 4]
  ), // Concatenate the fourth column with the last row's fourth column
];

console.log(result);
