const evenNumbers = [0, 2, 4, 6, 8];
const animals = [
  "dog",
  "cow",
  "cat",
  "horse",
  "rat",
  "elephant",
  "tiger",
  "lion",
];
const oddNumbers = [1, 3, 5, 7];
//evenNumbers.shift();
//evenNumbers.unshift(0);
//const a=evenNumbers.shift();
//console.log(evenNumbers);

//**************concatination in an array************************
// concatination of an array

evenNumbers.concat(animals);

const addedArray1 = evenNumbers.concat(animals);
const addedArray2 = animals.concat(evenNumbers, oddNumbers);

//--------->>>>>>>Index of an array<<<<<-------------------
const elementIndex = evenNumbers.indexOf(8);
console.log(elementIndex);
//--------->>>>>>>Includes<<<<<<<<--------------------
const isIncluded = animals.includes("cat");
console.log(isIncluded);

//----------->>>>>Reverse<<<<<<<<-----------
const revArray = evenNumbers.reverse();
console.log(revArray);
