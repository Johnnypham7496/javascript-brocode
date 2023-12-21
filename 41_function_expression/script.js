// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       write it, then forget about it


const greeting = function(){
    console.log("Hello");
}

greeting();


let count = 0;


function increaseCount(){
    count++;
    document.getElementById("increaseButton").innerHTML = count;
}

function decreaseCount(){
    count--;
    document.getElementById("decreaseButton").innerHTML = count;
}