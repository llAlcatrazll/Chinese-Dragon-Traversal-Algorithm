const cipherKey = "Pepapig";
const keyPushArr = cipherKey;
// const toDecode = "I want to be decoded completely";
const toDecode = "Let's try anothing to de encoded and decodeders";
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
console.log("Snake Traversal Algorithm");
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
const arr = testarr;
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

// let down = testarr.length;
// let right = cipherLength;
// let up = testarr.length - 1;
// let singleup = 1;
// let singleright = 1;
// let lastindex = 0;
// console.log(down);
// console.log(right);
// console.log(up);
// for (let x = 0; x < down; x++) {
//   tempArr.push(testarr[x][0]);
//   lastindex = testarr[x][0];
// }
// console.log(lastindex);
// rearArr.push(tempArr);
// //
// console.log("tempArr = " + tempArr);
// console.log("rearArr = " + rearArr);
// tempArr.length = 0;
// // reset
// console.log("tempArr = " + tempArr);
//
//
//
//
// let numRows = testarr.length;
// let numCols = testarr[0].length;
// let result = "";

// Traverse the array diagonally
// for (let i = 0; i < numRows + numCols - 1; i++) {
//   if (i % 2 === 0) {
//     // Moving upwards
//     for (let j = Math.min(i, numRows - 1); j >= 0; j--) {
//       let col = i - j;
//       if (col < numCols) {
//         result += testarr[j][col];
//       }
//     }
//   } else {
//     // Moving downwards
//     for (let j = Math.min(i, numCols - 1); j >= 0; j--) {
//       let row = i - j;
//       if (row < numRows) {
//         result += testarr[row][j];
//       }
//     }
//   }
// }
// console.log(result); // Output: PIteoclly00eteoddtwepaoeempdcbna
// const vowels = "aeiouAEIOU";
// const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
// const testing = "1e";
// Custom array length
// let vowelsorting = 0;
// // VOWELS FIRTST
// for (let x = 0; x < rearLength; x++) {
//   if (vowels.includes(testarr[0][x])) {
//     // console.log("It works");
//     testarr[0][x] = vowelsorting;
//     vowelsorting++;
//   }
// }
// // CONSONANTS NEXT
// for (let x = 0; x < rearLength; x++) {
//   if (consonants.includes(testarr[0][x])) {
//     // console.log("It works");
//     testarr[0][x] = vowelsorting;
//     vowelsorting++;
//   }
// }
//
//
// console.log(testarr[0]);
// console.log(testarr.length);
// console.log(testarr);
// const ignore = ",";
// // LETS START THE SNAKE TRAVERSAL
// for (let y = 0; y < cipherLength; y++) {
//   if (y % 2 === 0) {
//     // Even columns: top to bottom
//     for (let x = 0; x < testarr.length; x++) {
//       tempArr.push(testarr[x][y]);
//     }
//   } else {
//     // Odd columns: bottom to top
//     for (let x = testarr.length - 1; x >= 0; x--) {
//       tempArr.push(testarr[x][y]);
//     }
//   }
//   rearArr.push(tempArr);
//   tempArr = [];
// }
// tempArr.length = 0;

// TAKE THE FIRST ARRAY GROUP FOR ASSIGNING VALUES
