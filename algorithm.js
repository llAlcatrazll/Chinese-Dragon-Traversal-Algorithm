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
const rearArr = [];
const rearLength = cipherLength;
const vowels = "aeiouAEIOU";
const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
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
console.log(testarr[0]);
console.log(testarr.length);
console.log(testarr);

// TAKE THE FIRST ARRAY GROUP FOR ASSIGNING VALUES
