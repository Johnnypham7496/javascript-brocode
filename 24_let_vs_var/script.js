// variable scope = where a variable is accessible
// let = variables are limited to block of scope {}
// var = variables are limited to a function(){}


//  This only exists within our block and not outside meaning "i" variable doesn't exist outside our for loop
// for(let i = 1; i <= 3; i++) {
// }
// console.log(i);



doSomething();
function doSomething() {
    for(var i = 1; i <= 3; i++) {
}
};
console.log(i);