// WAP to add two numbers
/**
 * The function `addTwoNumbers` takes two parameters, adds them together, and returns the result.
 * @param x - 5
 * @param y - The parameter `y` in the `addTwoNumbers` function represents the second number that will
 * be added to the first number `x`. In the example provided, `y` is 10.
 * @returns The function `addTwoNumbers` is being called with arguments 5 and 10, which will return the
 * sum of the two numbers. The result will be 15.
 */
function addTwoNumbers(x,y){
    return x+y;
}
let result=addTwoNumbers(5,10);
console.log(result);

// Wap to subtract two number

function subTwoNumber(a,b){
    return a-b;
}
let subtraction=subTwoNumber(10,5);
console.log(subtraction);

function printCounting(strt,end){
    //debugger
    for(let i=strt; i<=end; i++){
        console.log(i);
    }
}
printCounting(1,100);
