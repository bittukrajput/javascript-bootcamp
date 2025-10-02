console.log("Program Started!");

// let num=1;
// while(num<=100){
//     console.log(num);
//     num++;
// }
const friends=["Bhola","Bablu","Deepak","Sohan","Ram","Anurag","Akash","Gaurav","Rakesh"];
//debugger

let i=0;
//let j=friends.length;
while(i<friends.length){
    console.log(`${i+1}.${friends[i]}`);
    //console.log(friends[i]=friends[i]+"Procoderr");
    friends[i]=friends[i]+"Procoderr";
    i++;
}
console.log("Program Ended!");

// WAP to print sum of N natural numbers
let n=5;
let sum=0;
let x=1;
while(x<=n){
    sum+=x;
    x++;
}
console.log("Sum of 5 Natural Number is : ",sum)

// reverse counting

let strt=5;
while(strt>0){
    console.log("Reverse : ",strt);
    strt--;
}

// loop until user input is correct
// let password="";
// while(password!=='12345'){
//     password=prompt("Enter password : ");
// }
// console.log("Access Denied");


//let j = 1;
let start=0;
let number=10;
while(start<number){
    if(start%2==0){
        console.log(start);
    }
    start++;
}

