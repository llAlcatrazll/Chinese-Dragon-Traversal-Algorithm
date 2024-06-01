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

console.log(arr[7][1]);
const key = "four";
console.log(arr);
let leftmostcol = 0;
let rightmostcol = key.length;
let bottommostrow = arr.length - 1;
const tempArr = [];
const finalArr = [];

// TRAVERSE DOWN
while (leftmostcol < key.length && bottommostrow >= 0) {
  for (let x = 0; x < bottommostrow; x++) {
    tempArr.push(arr[x][leftmostcol]);
  }
  leftmostcol++;
  finalArr.push([...tempArr]); // Push a copy of tempArr
  tempArr.length = 0;

  // TRAVERSE RIGHT
  for (let x = leftmostcol; x < rightmostcol; x++) {
    tempArr.push(arr[bottommostrow][x]);
  }
  // TRAVERSE UP ONCE
  bottommostrow--;
  finalArr.push([...tempArr]); // Push a copy of tempArr
  tempArr.length = 0;
  // TRAVERSE LEFT
  // console.log("Here " + arr[bottommostrow][rightmostcol - 1]);
  for (let x = rightmostcol - 1; x >= leftmostcol; x--) {
    tempArr.push(arr[bottommostrow][x]);
  }
  //   bottommostrow--;
  finalArr.push([...tempArr]);
  tempArr.length = 0;
  // TRAVERSE UP FULL
  for (let x = bottommostrow; x >= 0; x--) {
    tempArr.push(arr[x][leftmostcol]);
  }
  leftmostcol++;
  finalArr.push([...tempArr]);
  tempArr.length = 0;
  console.log(finalArr);
  console.log("bottommostrow = " + bottommostrow);
  console.log("leftmostcol = " + leftmostcol);
  console.log("last index = " + arr[bottommostrow][leftmostcol]);
}
// TRAVERSE RIGHT ONCE

//
// ARR [ROW][COLUMN]
