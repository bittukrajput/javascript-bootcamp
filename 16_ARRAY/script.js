const fruitsCollection=['apple','banana','Grapes','Dates'];
console.log(fruitsCollection)

/*1. Create Array using Literal
Creating an array using array literal involves using square brackets [] to define and initialize the array.*/
//creating an empty array
let a=[];
console.log(a);
// creating an array and intializing with values
let b=[10,20,30];
console.log(b);

// Accessing Elements of an Array
// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.

// creating an array and intializing with values
let webDev=["HTML","CSS","JAVASCRIPT"];
//accessing array elements
console.log(webDev[0]);
console.log(webDev[1]);
// accessing the first element of an array
let fs=webDev[0];
console.log("First Element : ",fs);
//accessing the lastElement of an array
let lst=webDev[webDev.length-1];
console.log("Last Element : ",lst);
// Modifying an array
console.log(webDev);
webDev[1]="Tailwind CSS";
console.log(webDev);

// add element to the end
webDev.push('Node.js');

// add element to the starting element
webDev.unshift('Web Development');

console.log(webDev);

// Creating an Array and Initializing with Values
let arr=["HTML","CSS", "JAVASCRIPT"];

console.log("Original Array :",arr);
// removes and return the last element

let last=arr.pop();
console.log("After removing the last element : "+arr);

//removes and return the first element

let first=arr.shift();
console.log("After removing the first element : "+arr);

// removes 2 elements starting from index 1

//let removeEle=arr.splice(1,2);
arr.splice(1,2);
console.log("After removing 2 elements starting from index 1 : "+arr);

// increase and decrease array lenght
let frontDev=["HTML","CSS", "JAVASCRIPT"];
// increase the array length to 7
frontDev.length=7;
console.log("After Increasing Array lenght : ",frontDev);
// decrease the array length to 2
frontDev.length=2;
console.log("After Decereasing Array length :",frontDev);