const cipherKey = "pepapi";
const keyPushArr = cipherKey;
const toDecode = "I want to be decoded completely wahahaha";
// const toDecode = "Let's try anothing to de encoded and decodeders";
const Decoded = "";
const cipherLength = cipherKey.length;
const decodeLenth = toDecode.length;
const emptyarr = [];
let y = 0;

const testarr = [];
/*
PUSHING THE KEY INTO ITS OWN ARRAY
*/
for (let i = 0; i < cipherLength; i++) {
  if (cipherKey[i] == " ") {
    continue;
  } else {
    if (y < cipherKey.length) {
      //   console.log(cipherKey[i] + "");
      //   console.log(y);
      emptyarr.push(cipherKey[i]);
      y++;
    } else {
      //   console.log("array has been pushed " + y);
      testarr.push([...emptyarr]);
      emptyarr.length = 0;
      y = 0;
      i--;
    }
  }
}
console.log("\n-----  Chinese Dragon Traversal Algorithm  ----\n");
console.log("CipherKey Length = " + cipherLength);
console.log("Original Text = " + toDecode);

// console.log(emptyarr);
/*
PUSHING RAW TEXT TO THE ARRANGE TO PREP FOR REARRANGEMENT
*/
for (let i = 0; i < decodeLenth; i++) {
  if (toDecode[i] == " ") {
  } else {
    if (y < cipherKey.length) {
      //   console.log(toDecode[i] + "");
      //   console.log(y);
      emptyarr.push(toDecode[i]);
      y++;
    } else {
      //   console.log("array has been pushed " + y);
      testarr.push([...emptyarr]);
      emptyarr.length = 0;
      y = 0;
      i--;
    }
  }
}
if (emptyarr.length != 0) {
  //   console.log(emptyarr.length);
  //   console.log(cipherKey.length);
  const result = cipherLength - emptyarr.length;
  //   console.log("you messeed up");
  //   console.log("result = " + result);
} else {
  console.log("Pass Seccessful");
}
for (let u = emptyarr.length; u < cipherLength; u++) {
  //   console.log("equal to something");
  emptyarr.push("0");
}
/*
AFTER FILLING THE GAPS IN THE LAST ARRAY GO PUSH
*/
testarr.push(emptyarr);
// console.log(emptyarr.length);
// console.log("Whats left in empty array = [ " + emptyarr + " ]");

console.log("RAW ARRAY = ");
console.log(testarr);

/*
LETS START REARRANGING
*/
// CURRENT FINAL REARRANGED ARRAY   ==  testarr
// const arr = [
//   ["P", "e", "p", "a"],
//   ["I", "w", "a", "n"],
//   ["t", "t", "o", "b"],
//   ["e", "d", "e", "c"],
//   ["o", "d", "e", "d"],
//   ["c", "o", "m", "p"],
//   ["l", "e", "t", "e"],
//   ["l", "y", "0", "0"],
// ];
// console.log(arr);
const arr = testarr; //Original array
const arr2 = testarr;
const key = "four";
let leftmostcol = 0;
let rightmostcol = arr[0].length;
let bottommostrow = arr.length - 1;
let topmostrow = 0;
const tempArr = [];
const finalArr = [];
let traversal = 0;
// Traverse the array
while (leftmostcol < rightmostcol && topmostrow <= bottommostrow) {
  // Traverse down
  for (let x = topmostrow; x <= bottommostrow; x++) {
    tempArr.push(arr[x][leftmostcol]);
    arr2[x][leftmostcol] = traversal;
    traversal++;
  }
  leftmostcol++;
  finalArr.push(...tempArr);
  tempArr.length = 0;
  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse right
  if (leftmostcol < rightmostcol) {
    for (let x = leftmostcol; x < rightmostcol; x++) {
      tempArr.push(arr[bottommostrow][x]);
      arr2[bottommostrow][x] = traversal;
      traversal++;
    }
    finalArr.push(...tempArr);
    tempArr.length = 0;
    bottommostrow--;
  } else {
    // Traverse up
    for (let x = bottommostrow; x >= topmostrow; x--) {
      tempArr.push(arr[x][leftmostcol - 1]);
      arr2[x][leftmostcol] = traversal;
      traversal++;
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
    arr2[bottommostrow][x] = traversal;
    traversal++;
  }
  finalArr.push(...tempArr);
  tempArr.length = 0;
  bottommostrow--;

  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse up
  for (let x = bottommostrow; x >= topmostrow; x--) {
    tempArr.push(arr[x][leftmostcol]);
    arr2[x][leftmostcol] = traversal;
    traversal++;
  }
  leftmostcol++;
  finalArr.push(...tempArr);
  tempArr.length = 0;
}

// Combine the final array into one string
const resultString = finalArr.join("");
console.log("Final traversal result:", resultString);
// console.log(testarr);
console.log("Array Traversal");
console.log(arr2); //Display Array 2
