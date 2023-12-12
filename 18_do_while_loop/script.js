// do while loop = do something,
//                 then check the CSSConditionRule, 
//                 repeat if condition is true

let userName;

userName = window.prompt("Enter your name");

while (userName == "") {
    userName = window.prompt("Enter your name");
}

console.log("Hello" ,userName);