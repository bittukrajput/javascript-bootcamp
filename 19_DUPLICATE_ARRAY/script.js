// const userName="Anurag";
// let userName2=userName;
// userName2=userName2+"Singh";


const fruits=["Mango","Grapes","Apple"];

// const myfruits=fruits;
// myFruits.push('Dates');
// myFruits.push('Orange');

// const myFruits=[];
// Object.assign(myFruits,fruits);
 
//const myFruits=[].concat(fruits);
//const myFruits=fruits.slice();

const user={
    firstName:'Anurag',
    lastName:'Singh',
    pata:{
        city:"Delhi",
        pincode:989888
    },
    subject:["Physics","Cs","Maths"]
};

// shallow copy
// const user2={};
// object.assign(user2,user);

const user2={...user}; 

