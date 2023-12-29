// nested functions = Functions inside other functions.
//                    Outer functions have access to inner functions
//                    Inner functions are "hidden" from the outside
//                    used in closures (future topic)


let userName = "Johnny";
let userInbox = 0;

login();

function login(){
    displayUserInbox();
    displayUserName();
}

function displayUserName(){
    console.log(`Welcome ${userName}`);
}

function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`);
}