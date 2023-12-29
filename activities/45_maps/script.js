// maps = object that holds key-value paris of any data type


let store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

store.forEach((value, key) => console.log(`${key} $${value}`));