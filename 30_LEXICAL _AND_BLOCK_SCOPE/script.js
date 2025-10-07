//debugger
//'use strict'
const userName="Anurag";
const userAge=28;
var a=50;
// function add(){
//     const x=10;
//     const y=20;
//     console.log(x+y);
//     console.log(userName);  
// }

function subtract(){
    //debugger
    const x=10;
    const y=20;
    console.log(x-y);
    console.log(userName); 
    // block scope
    {
        let num=78;
        num2=787;
        console.log("Block level scope : ",num);
        console.log(num2);
    }
    function child(){
        const childName="Golu";
        console.log("child level scope : ",childName);

        function grandChild(){
            const grandChildName="Molu";
            console.log("Grandchild level scope : ",grandChildName);
        }
        grandChild();
    } 
    child();
}

//add();
subtract();
console.log("Program Ended!");

var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "I'm global too";

function showGlobal() {
    console.log(globalVar);  // Accessible
    console.log(globalLet);  // Accessible
    console.log(globalConst); // Accessible
}

showGlobal();
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
{
    var localVar = "I'm local";

}
function myFunction() {
    //var localVar = "I'm local";
    let localLet = "I'm also local";
    const localConst = "I'm local too";
    
    console.log(localVar); // Works fine
}
// console.log(localVar); 
myFunction();
