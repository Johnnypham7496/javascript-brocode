//  toLocaleString() = returns a string with a language
//                     sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options


//  let myNum = 123456.789;

// This is like how to choose what language a user wants to format their data in
// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German


// This is how to format a number in currency
// myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
// myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
// myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});


let myNum = 100;
// This will format a number to be a percentage 
// myNum = myNum.toLocaleString(undefined, {style: "percent"});


// How to format a number to temperature, miles, kg
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});


console.log(myNum);