// string slicing = creating a substring
//                  from a portion of another string
                
//                  string.slice(start, end)


// const fullName = "Johnny Pham";
// let firstName = fullName.slice(0, 2);
// let lastName = lastName.slice(7, 10);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);
// console.log(lastChar);


// const fullName = "Johnny Pham";
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);


const email = "Johnny1@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(username);
console.log(extension);