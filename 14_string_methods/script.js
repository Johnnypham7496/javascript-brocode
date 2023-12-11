// string methods = allow you to manipulate and work with text (strings)

let userName = "JohnnyPham";
let result = userName.startsWith(" ");

console.log(userName.charAt(2));
console.log(userName.indexOf("o"));
console.log(userName.length);

userName = userName.trim();
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);

console.log(result);

if (result) {
    console.log("Your username can't begin with ' '");
}
else {
    console.log(userName);
}