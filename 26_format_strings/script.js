//  toLocaleString() = returns a string with a language
//                     sensitive representation of this number

// number.toLocaleString(locale, {options});

// 'locale' = specify that language (undefined = default set in browser)
// 'options' = object with formatting options


 let myNum = 123456.789;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German


// This is how to format a number in currency
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});




console.log(myNum);