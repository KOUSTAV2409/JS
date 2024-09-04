"use strict";

let roll="65"


roll="65abc"
roll=null

let convert= Number(roll)
// console.log(roll);
// console.log(typeof roll);
console.log(convert);
// console.log(typeof convert);

// "values that cannot be converted into number will be displayed as NaN (not an number)"



let score = "koustav"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "koustav"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "koustav" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);




/*Problem 1: String to Number Conversion
Convert the following strings to numbers and print the results:

"42"
"007"
"12.78"  */

let Stringg="42"
let numberr= Number(Stringg)

console.log(typeof Stringg);
console.log(typeof numberr);

Stringg="007"
// numberr=parseInt(Stringg)
numberr=Number(Stringg)

console.log(typeof Stringg);
console.log(typeof numberr);
console.log(numberr);


Stringg=12.78
let numberr1=Number(Stringg)
let numberr2=parseInt(Stringg)
let numberr3=parseFloat(Stringg)

console.log(numberr1);
console.log(numberr2);
console.log(numberr3);



/*
Problem 3: Boolean Conversion
Convert the following values to boolean and print the results:

0
""
"hello"
undefined
*/

let any=0
let any1= ""
let any2= "hello"
let any3= undefined

console.log(typeof any);
console.log(typeof any1);
console.log(typeof any2);
console.log(typeof any3);
console.log(any);
console.log(any1);
console.log(any2);
console.log(any3);

let bool = Boolean(any)
let bool1 = Boolean(any1)
let bool2 = Boolean(any2)
let bool3 = Boolean(any3)

console.log(bool);
console.log(bool1);
console.log(bool2);
console.log(bool3);








