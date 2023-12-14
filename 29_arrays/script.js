// array = think of it as a variable
//         that can store multiple values


let fruits = ["apple", "orange", "banana"];
// fruits[0] = "coconut";

fruits.push("lemon"); // add an element
fruits.pop();        // remove last element 
fruits.unshift("mango"); //ad element to the beginning
fruits.shift(); // removes element from the beginning


let length = fruits.length;
let index = fruits.indexOf("apple");

console.log(fruits);

console.log(fruits[0]);

console.log(length);
console.log(index);