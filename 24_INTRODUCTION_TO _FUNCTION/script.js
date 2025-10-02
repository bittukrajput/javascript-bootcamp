
//function definition
function introduceMe(userName,profession,age){
    console.log("Hii,");
    console.log(`My name is ${userName||"Subham"}.`);
    console.log(`I'm a ${profession||"Chemical Engineer"}.`);
    console.log(`I am ${age||28} years old.`);
}

//function calling
// const returnValue=introduceMe();
introduceMe("Anurag","Software Engineer",25);;
//console.log("*************");
introduceMe("Akash","Mechanical Engineer",27);
introduceMe("Adarsh","Civil Engineer",29);
introduceMe();