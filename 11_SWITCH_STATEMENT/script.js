/* `const dayNumber=prompt('Enter day number');` is prompting the user to enter a day number. The value
entered by the user will be stored in the variable `dayNumber` for further processing in the code. */
//const dayNumber=Number(prompt('Enter day number'));
//const dayNumber=3;
// if(dayNumber===0){
//     console.log('It is sunday today');
// }else if(dayNumber===1){
//     console.log('It is Monday today');
// }else if(dayNumber===2){
//     console.log('It is Tuesday today');
// }else if(dayNumber===3){
//     console.log('It is Wedenesday today');
// }else if(dayNumber===4){
//     console.log('It is Thrusday today');
// }else if(dayNumber===5){
//     console.log('It is Friday today');
// }else if(dayNumber===6){
//     console.log('It is Saturday today');
// }else{
//     console.log('Please choose valid day number');
// }
//const dayNumber=5;
//debugger
// switch(dayNumber){
//     case 0:
//         console.log('It is Sunday today');
//         break;
//     case 1:
//         console.log('It is Monday today');
//         break;
//     case 2:
//         console.log('It is Tuesday today');
//         break;
//     case 3:
//         console.log('It is Wedenesday today');
//         break;
//     case 4:
//         console.log('It is Thrusday today');
//         break;
//     case 5:
//         console.log('It is Friday today');
//         break;
//     case 6:
//         console.log('It is Saturday today');
//         break;
//     default:
//         console.log('Please enter a valid day number');
// }
// const userName='Anurag';
// const userAge=22
// debugger
// switch(true){
//     case (userAge >= 0 && userAge <= 4):
//         console.log(`${userName} is a kid.`);
//         break;
//     case (userAge >= 5 && userAge <= 17):
//         console.log(`${userName} is a school student.`);
//         break;
//     case (userAge >= 18 && userAge <= 24):
//         console.log(`${userName} is a college student.`);
//         break;
//     case (userAge >= 25 && userAge <= 45):
//         console.log(`${userName} is a working professional.`);
//         break;
//     case (userAge > 45 && userAge<121):
//         console.log(`${userName} is a Retired Persion.`);
//         break;
//     case (userAge>=121):
//         console.log(`${userName} is a immortal.`);
//         break;
//     default:
//         console.log('Please enter a valid age');
// }
// if(userName){
//     console.log(`Name: ${userName}`);
// }
// if(userAge){
//     console.log(`Age: ${userAge}`); 
// }

// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);
//debugger
// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${userName} is a kid.`);
//     console.log('And he/she is playing.');
// }
// else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${userName} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// }
// else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${userName} is a college student.`);
//     console.log('And he/she is learning computer science.');
//     if(userAge>=20){
//         console.log('user age is above than 19');
//     }else{
//         console.log('user age is below than 19');
//         if(userName.length>5){
//             console.log('User has length greater than 5')
//         }
//     }
    
// }
// else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${userName} is a working professional.`);
//     console.log('And he/she is a web developer.');
// }
// else if (userAge > 45 && userAge<121) {
//     console.log(`${userName} is retired.`);
//     console.log('And he/she reads newspaper.');
// }
// else if(userAge>=121){
//     console.log(`${userName} is immortal`)
    
// }
// else{
//     console.log('Please enter a valid age ')
// }
// else if(userAge<0){
//     console.log('Please enter a valid age')
// }
//let input=prompt('Enter character between A to E');
//let grade=input.charAt(0).toUpperCase;
//const grade='B';
//debugger
// switch(grade){
//     case 'A':
//         console.log('Your score is between 85% to 100%');
//         break;
//     case 'B':
//         console.log('Your score is between 75% to 85%');
//         break;
//     case 'C':
//         console.log('Your score is between 60% to 75%');
//         break;
//     case 'D':
//         console.log('Your score is between 50% to 60%');
//         break;
//     case 'E':
//         console.log('Your score is between 30% to 50%');
//     default:
//         console.log('Sorry!, You Failed')
    
    
// }
//console.log('Program Ended!!');
let input = prompt('Enter character between A to E');
debugger
// Get first character and convert to uppercase
let grade = input?.charAt(0).toUpperCase() || "";  

switch(grade){
    case 'A':
        console.log('Your score is between 85% to 100%');
        break;
    case 'B':
        console.log('Your score is between 75% to 85%');
        break;
    case 'C':
        console.log('Your score is between 60% to 75%');
        break;
    case 'D':
        console.log('Your score is between 50% to 60%');
        break;
    case 'E':
        console.log('Your score is between 30% to 50%');
        break;
    default:
        console.log('Sorry! You Failed');
}

console.log('Program Ended!!');
