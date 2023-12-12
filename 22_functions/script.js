// function = Define code once, and use it many times.
//            To preform some code, call the function name


let userName = "Johnny";
let age = 27;

happyBirthday();

function happyBirthday() {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age, " years old!");
}