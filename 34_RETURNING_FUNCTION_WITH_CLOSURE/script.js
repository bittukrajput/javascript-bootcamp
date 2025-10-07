
// console.log("Program Started!");
// const x=5;
// const y=10;
// function add(){
//     console.log(x+y);
// }

// add();
//debugger
function outer(){
    function parent(){
        const a=5;
        const b=6;
        function add(){
            console.log(a+b);
        }
        return add;
    }
    return parent();
}
//add();
const add1=outer();
add1();
console.dir(add1);