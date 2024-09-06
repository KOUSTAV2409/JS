"user strict";
/*
Practice Questions
1. Basic Random Number Generation

Q1.1: Write a function that generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

Q1.2: Modify the function from Q1.1 to generate a random integer between 1 and 10 (both inclusive).
*/

// Q1.1:

// function numberGenarator() {
//     console.log(Math.random().toFixed(3));
// }
// numberGenarator()

// Q1.2:
// function numberGenarator(max,min) {
//     console.log(Math.floor(Math.random()*(max-min)+min));
// }
// numberGenarator(10,1)
/* --------------------------------------------- */

/*
2. Random Number Generation with Custom Ranges

Q2.1: Create a function that generates a random integer between 5 and 15 (both inclusive).

Q2.2: Write a function that generates a random floating-point number between -10.5 and 20.3.

Q2.3: Modify the function in Q2.2 to round the generated number to two decimal places.
*/
// Q2.1:

// function randomGenarator(max,min){
//     console.log(Math.floor(Math.random()*(max-min)+min));
    
// }
// randomGenarator(16,5)

// Q2.2:

// console.log(Math.random()*20.3);

// Math.random()*(upper-range)+(value to shift the level of the whole range)

// by default lower range value is zero 0
// console.log(Math.floor(Math.random()));
// console.log(Math.floor(Math.random()*(20+10))-10);
// console.log(Math.random()*(max-min)+min) //This is for the range of all positive integer or floating point number
// console.log(Math.random()*(20.3+10.5)-10.5);

// function floatingNumberGenarator(upperValue,lowerValue){
//     console.log(Math.random()*(upperValue-lowerValue)+lowerValue);
    
// }
// floatingNumberGenarator(20.3,-10.5)



// Q2.3:


// function floatingNumberGenarator(upperValue,lowerValue){
//         console.log((Math.random()*(upperValue-lowerValue)+lowerValue).toFixed(2));
        
//     }
//     floatingNumberGenarator(20.3,-10.5)

/*
3. String Indexing and Random Character Selection

Q3.1: Write a function that takes a string as input and returns a random character from the string.

Q3.2: Modify the function from Q3.1 to ensure the last character in the string is always considered for selection.

Q3.3: Write a function that generates a random string of 8 characters by randomly selecting characters from the string "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".
*/
// Answer: Q3.1:



// function randomCharGenarator(newString){
//     // let convertString=String(newString)
//     let lengthString=newString.length
// let returnChar=newString[Math.floor(Math.random()*lengthString)]
// console.log(returnChar);

// }
// randomCharGenarator("ranghat")

// Q3.2:
// function of Q3.1 is working fine and no need to change . the function is already ensuring that the last charector of the string is always considered for the selection.

// Q3.3:
let randomString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// console.log(randomString.length);
// console.log(randomString.split());
let array1=Array.from(randomString)
console.log(array1.length);

// console.log(array1);




/*
read the given long string
print the length of the long string

*/



/*
4. Combination of Random Number Generation and String Manipulation

Q4.1: Create a function that generates a random password of a specified length. The password should include at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*()).

Q4.2: Write a function that shuffles a given string by randomly rearranging its characters.
*/
// Answer:
// Q4.1
/*
enter the length value suppose lengthValue=7
store the lengthValue
*/




