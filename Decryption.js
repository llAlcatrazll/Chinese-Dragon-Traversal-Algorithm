const encryptedText = "PLynnneders00doceddcgaeeptntodedaeedoo'apsthirtig";
const cipherKey = "Pepapig";
const cipherLength = cipherKey.length;
const rows = Math.ceil(encryptedText.length / cipherLength);
const arr = Array.from({ length: rows }, () => Array(cipherLength).fill(""));

// Fill the array in the same snake traversal order used in encryption
let leftmostcol = 0;
let rightmostcol = cipherLength;
let bottommostrow = rows - 1;
let topmostrow = 0;
// let teoprow = 0;
let index = 0;

while (leftmostcol < rightmostcol && topmostrow <= bottommostrow) {
  // Traverse down
  for (let x = topmostrow; x <= bottommostrow; x++) {
    arr[x][leftmostcol] = encryptedText[index++];
  }
  leftmostcol++;
  // console.log(leftmostcol)
  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse right
  if (leftmostcol < rightmostcol) {
    for (let x = leftmostcol; x < rightmostcol; x++) {
      arr[bottommostrow][x] = encryptedText[index++];
      //   console.log(x)
    }
    bottommostrow--;
  } else {
    // Traverse up
    for (let x = bottommostrow; x >= topmostrow; x--) {
      arr[x][leftmostcol - 1] = encryptedText[index++];
      //   console.log(bottommostrow)
      // console.log(topmostrow)
    }
    leftmostcol++;
    continue;
  }

  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse left
  for (let x = rightmostcol - 1; x >= leftmostcol; x--) {
    arr[bottommostrow][x] = encryptedText[index++];
  }
  bottommostrow--;
  // console.log(bottommostrow)
  if (!(leftmostcol < rightmostcol && topmostrow <= bottommostrow)) break;

  // Traverse up
  for (let x = bottommostrow; x >= topmostrow; x--) {
    arr[x][leftmostcol] = encryptedText[index++];
    // console.log(index)
  }
  leftmostcol++;
  // console.log(leftmostcol)
}

// Combine the array back into the original text, excluding '0's
let resultString = "";
for (let row of arr) {
  // console.log(arr)
  for (let char of row) {
    if (char !== "0") {
      resultString += char;
    }
  }
}

console.log("Decrypted text:", resultString);
