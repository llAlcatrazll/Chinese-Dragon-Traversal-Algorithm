const cipherKey = "Pepa";
const keyPushArr = cipherKey;
const toDecode = "I want to be decoded completely";
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
const rearArr = [];
const rearLength = cipherLength;
const tempArr = [];
//
let result = "";
let row = 0;
let col = 0;
const numRows = testarr.length;
const numCols = testarr[0].length;

while (true) {
  // Traverse downwards until the bottom
  while (row < numRows) {
    result += testarr[row][col];
    row++;
  }
  row--;

  // Traverse rightwards until the rightmost
  col++;
  if (col >= numCols) break; // Break if all columns have been traversed
  result += testarr[row][col];

  // Traverse upwards by one index
  row--;

  if (row < 0) break; // Break if all rows have been traversed

  // Traverse leftwards until the leftmost not traversed
  while (col > 0) {
    col--;
    result += testarr[row][col];
  }

  // Traverse upwards until the topmost not traversed
  row--;

  if (row < 0) break; // Break if all rows have been traversed

  // Traverse rightwards by one index
  col++;
}

console.log(result); // Output: "PIteoclly00eteoddtwepaoeempdcbna"
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
