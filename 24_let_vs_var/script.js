// variable scope = where a variable is accessible

// let = variables are limited to block of scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function 
// (if global, var will CHANGE the browser's window properties)


//  This only exists within our block and not outside meaning "i" variable doesn't exist outside our for loop
// for(let i = 1; i <= 3; i++) {
// }
// console.log(i);


// "i" can exist outside a {} or block but it will not be accessible outside of a function block
doSomething();
function doSomething() {
    for(var i = 1; i <= 3; i++) {
}
};
console.log(i);