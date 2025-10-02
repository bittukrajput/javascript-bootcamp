console.log("Program started!");
//debugger
for(let i=0; i<10; i++){
    console.log(i+1);
}
const friends=["Bhola","Bablu","Deepak","Sohan","Ram","Anurag","Akash","Gaurav","Rakesh"];
for(let i=0; i<friends.length; i++){
    console.log(friends[i]);
}
// print even number till 100
// let n=100;
// for(let i=0; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }
// console.log("Program ended!");

//calculate sum of N natural numbers
let n=5;
let sum=0;
for(let i=1; i<=n; i++){
    sum+=i;
}
console.log("Sum of "+n+" Natural number is : "+ sum);

for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
