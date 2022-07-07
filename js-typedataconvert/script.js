// String conversion

let value = true
alert (typeof value) // boolean

value = String (value)
alert (typeof value) // string


// Number conversion

alert ("6"/"2");

let str = '123';
alert (typeof str);
let num = Number (str);
alert (typeof num);

let hello = Number ("Hello");
alert (hello);


// Logical conversion

let userAge = 58;
console.log (userAge);
console.log (typeof userAge);

userAge = Boolean (userAge);
console.log (userAge);
console.log (typeof userAge);


let userAge1 = 0;
console.log (userAge1);
console.log (typeof userAge1);

userAge1 = Boolean (userAge1);
console.log (userAge1);
console.log (typeof userAge1);


let userAge2 = "0";
console.log (userAge2);
console.log (typeof userAge2);

userAge2 = Boolean (userAge2);
console.log (userAge2);
console.log (typeof userAge2);


let userAge3 = "_";
console.log (userAge3);
console.log (typeof userAge3);

userAge3 = Boolean (userAge3);
console.log (userAge3);
console.log (typeof userAge3);


let userAge4 = "";
console.log (userAge4);
console.log (typeof userAge4);

userAge4 = Boolean (userAge4);
console.log (userAge4);
console.log (typeof userAge4);