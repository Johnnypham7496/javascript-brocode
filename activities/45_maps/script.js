// maps = object that holds key-value paris of any data type


let store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);


let shoppingCart = 0;

shoppingCart += store.get("t-shirt");


store.set("hat", 40);
store.delete("hat");
store.has("t-shirt");
console.log(store.size);


store.forEach((value, key) => console.log(`${key} $${value}`));