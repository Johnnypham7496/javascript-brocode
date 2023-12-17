// 2D array = array made up fo arrays 

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];


let groceryList = [fruits, vegetables, meats];


for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}