// 2D array = array made up fo arrays 

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];


let groceryList = [fruits, vegetables, meats];

groceryList[0][0] = "mangoes";
groceryList[2][0] = "steak";
groceryList[2][2] = "steak";


for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}