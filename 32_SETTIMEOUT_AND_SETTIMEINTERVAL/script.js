setTimeout(`console.log("Hiii"); 
    console.log("my name is Anurag")`,500);

const timer1=setTimeout('console.log("Hii-1")',1000);
const timer2=setTimeout('console.log("Hii-2")',2000);
//const timer3=setTimeout('console.log("Hii-3")',3000);
const timer3=setTimeout(a,3000);
clearTimeout(timer2);
//const timer1=setInterval('console.log("Hii-1")',1000);

function a(){
    console.log("Hello World!");
}

setTimeout(function(){
    console.log("Hi-1");
})

console.log("Hi-2");