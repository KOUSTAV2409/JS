"user strict";

// ***************************************-----NUMBER------**********************************************

// we can assign number inside a variable in mainly two ways:
// 1.
let roll= 45
// console.log(roll);
// 2.
let roll2= new Number (45)
// console.log(roll2);

// now see the the result of console. Both roll and roll2 are showing the same output. But notice , in the case of console.log(roll); it only shows the output as 45. but in the case of console.log(roll2); it shows the output as [Number: 45]

// now taking the second way of assigning value , we will open the browser and then go to the console and see the output.

// .toExponential() is used to show the number in exponential form
// console.log(roll2.toExponential(2))
// output> 4.47e+9

// .toPrecision() is ued to show the number in precision form like 2 decimal places or 3 decimal places.
// console.log(roll2.toPrecision(2));
// output> 4.5e+9

// // .toFixed() is used to show the number in fixed form 
// let roll3= 45.456789
// console.log(roll3.toFixed(2));
// output> 45.46

// // .toString() is used to show / convert the number in string form

//  toString is basically used to convert the value into different base like binary, octal, decimal, hexadecimal
// console.log(roll.toString(2));
// console.log(roll.toString(8));
// console.log(roll.toString(10));
// console.log(roll.toString(16));

/* to understand toString() method with more clarity , please refer the link :

1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

2)https://www.geeksforgeeks.org/javascript-number-tostring-method/   

*/


// // .valueOf() is used to show the number in value form like 45
// console.log(roll2.valueOf());
// console.log(roll2.valueOf(2));
// console.log(roll2);

// // .toLocaleString() is used to show the number in local string form
// console.log(roll2.toLocaleString("en-in"));


// *****************************-----MATH FUNCTION------********************************

// console.log(Math);
// console.log(Math.PI);

// Math.abs() is used to convert the negetive value into positive value but if you use Math.abs() for any positive value , the output remains same
// console.log(Math.abs(-9));
// console.log(Math.abs(15));

// round is used to get the value in round format just like the bellow example:
// console.log(Math.round(9.532));
// Math.ceil() also works same as Math.round() but print the above or upper number just like the example. Here the number 9.1 should be rounded at 9 but because of the use of Math.ceil() the value converted into 10.
// console.log(Math.ceil(9.1));

// Math.floor() works same as ceil() but floor() prints the lower value like the bellow example , here the value of 9.99 should be rounded into value of 10 but because of the use of Math.floor() , the value has been converted into lower case and provided the value of 9
// console.log(Math.floor(9.99));

// Math.min() and Math.max() are used to extract the minimum and maximum value from the array.
let arrayNumber=[4,56,88,3,89,22,10];

// console.log(arrayNumber);
// console.log(Math.min(arrayNumber));

// console.log(Math.min(1,2,5,3,6));
// console.log(Math.max(1,2,5,3,6));


// here minimum value is zero(0) by default and the max value is 11 and this will result numbers between 0 to 10
// we can set the maximum value of the range with the use of * symbol after Math.random() like bellow.
// console.log(Math.floor(Math.random()*11));

// now setting the minimum value as our need 

// console.log(Math.floor(Math.random()*5 +6));
// after using the above example we have understood that adding +6 with the Math.random()*5 is just increasing the range of maximum value but the minimum value still remains zero(0)


// let max=15
// let min=5
// result=Math.floor(Math.random() * (max - min) + min)

// console.log(result);

// console.log(Math.floor(Math.random()*15+5));
// console.log(Math.floor(Math.random()*15)+5);
// console.log(Math.floor(Math.random()*50)+50);


// console.log(Math.floor(Math.random()*10)+6);

// Now understand the Math.random() in detail:


// const max=prompt("Enter the max value of the range:")

// console.log(`${max} is the max value`);
// console.log(max);


let prompt = require('prompt-sync')();
const max = prompt('Enter the max value: ');
console.log(max);

const min = prompt('Enter the min value: ');

console.log(min);
let maxRange=max-min



console.log(Math.floor(Math.random()*maxRange+min));
// here whatever number is multiplied with Math.random() that number is always considered as the upper value of the range and the number that is added after the value is always used to lift the overall range












