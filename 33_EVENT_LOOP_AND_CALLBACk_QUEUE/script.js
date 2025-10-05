console.log("Hi-1");

function Hello(){
    console.log("Hello World!");
}

for(let i=0; i<5; i++){
    console.log(i);
}
Hello()
setTimeout(Hello,1000)
setTimeout(Hello,2000);
setTimeout(function(){
    console.log("Hello");
},3000)

console.log("Hi-2");