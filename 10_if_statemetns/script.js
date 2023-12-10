// IF STATEMENTS = if a condition is true, execute some code 
//                 if not, do something else

// let age = 13;

// if (age>= 30) {
//     console.log("You are old enough to enter this site");
// }
// else {
//     console.log("You must be 18+ to enter this site");
// }


// let time = 14;

// if(time < 12) {
//     console.log("Good morning!");
// }
// else {
//     console.log("Good night!");
// }

// let age = 18;
// let hasLicense = false;

// if(age >= 16) {
//     console.log("You are old enough to drive");
    
//     if(hasLicense){
//         console.log("You have your license!");
//     }
//     else{
//         console.log("You do not have you license yet!");
//     }
// }
// else{
//     console.log("You must be 16+ to have a license");
// }

let age = 101;

if(age >= 100) {
    console.log("You are TOO OLD for this site");
}
else if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else if(age < 0) {
    console.log("Your age cannot be below 0");
}
else {
    console.log("You must be 18+ to enter this site");
}