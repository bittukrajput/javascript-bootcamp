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

