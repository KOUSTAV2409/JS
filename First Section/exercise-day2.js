"use strict";

/*
// Exercise: Level 1

// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

//          answer:
         let challenge="30 days of JavaScript"
     


// 2. Print the string on the browser console using console.log()

            // answer:
            console.log(challenge);
// 3. Print the length of the string on the browser console using console.log()

                // answer:
                console.log(challenge.length);
                // to calculate length of a string we use length charrecter in the above way.
                
// 4.Change all the string characters to capital letters using toUpperCase() method
                // answer:
                
                console.log(challenge.toUpperCase());
                
                
                
// 5. Change all the string characters to lowercase letters using toLowerCase() method
                // answer:
                console.log(challenge.toLowerCase());
                

// 6.Cut (slice) out the first word of the string using substr() or substring() method

                // answer:
                //  this will extract 3
                console.log(challenge[0]);

                //  this will extract 30
                console.log(challenge.substr(0,2));
                // console.log(challenge.substring(0,4));
                
// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
                    // answer:
                    console.log(challenge.substr(3,4));
                    

// 8. Check if the string contains a word Script using includes() method
                    // answer:
                    console.log(challenge.includes("Script"));
                    

// 9. Split the string into an array using split() method
                    console.log(challenge.split(" "));
                    // this " " inside split() is used to break the values in the whitespaces
                    

//10. Split the string 30 Days Of JavaScript at the space using split() method
                    // answer:


                

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
                    // answer:
                    let company= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
                    console.log(company);
                    // now chaning this string into array using split method at the coma(,)
                    let arraycompany=company.split(",")
                    console.log(arraycompany);
                    // now accessing the value of zero(0) index from the array
                    console.log(arraycompany[0]);
                    
                    
                    


// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
                    // answer:
                    console.log(challenge.replace("JavaScript","Python"));
                    let replaceJS=challenge.replace("JavaScript" , "Python")
                    console.log(replaceJS);
                    
                    
                    
                    

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
                    // answer:
                    console.log(challenge[15]);
                    console.log(challenge.charAt(15));
                    

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
                    // answer:
                    // console.log(challenge.charCodeAt("J"));
                    let index=challenge.indexOf("J")
                    console.log(index);
                    
                    console.log(challenge.charCodeAt(11));
                    // console.log(challenge.charAt(11));
                    
                    
                    
                    
                    
                    
                    

//15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
                    // answer:
                    console.log(challenge.indexOf("a"));
                    // output 4
                    

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
                    console.log(challenge.lastIndexOf("a"));
                    // output 14
                    
// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
                    // answer:
                    let sentence="You cannot end a sentence with because because because is a conjunction"
                    console.log(sentence.indexOf("because"));
                    

//18.  Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
                    // answer:
                    console.log(sentence.lastIndexOf("because"));
                    

// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
                    // answer:
                    console.log(sentence.search("because"));

                    // i think the work of search() method and indexOf() almost same. what do you think ?
            
//20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
                    // answer:
                    let whitespace=" 30 Days Of JavaScript "
                    console.log(whitespace);
                    
                    console.log(whitespace.trim());
                    

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
                        // answer:
                        console.log(whitespace.trim().startsWith("30"));
                        // so we have learnt here that we can use two method at the same time one by one .
                        // this will show true because i have used trim method to remove whitespace at the begining.
                        //  if i want to make the output true including the whitespace the it can be done in the bellow way.
                        console.log(whitespace.startsWith(" "));
                        
                        

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
                        // answer:
                        console.log(whitespace.endsWith(" "));
                        


// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
                    // answer:
                    console.log(whitespace.match("a"));
            

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
                        // answer
                        let str1="30 Days of"
                        let str2=" JavaScript"
                        console.log(str1.concat(str2));
                        
                        

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
                        // answer:
                        console.log(whitespace.repeat(2));
                        
*/

//  Exercise: Level 2

// 1. Using console.log() print out the following statement:

//     ```sh
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
//     ```
// answer:
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Using console.log() print out the following quote by Mother Teresa:

//     ```sh
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
//     ```

// answer:
// console.log(" \"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" ");
// we will use \"    \" to print any quote or statement inside the console.log

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// answer:
// let ten1 = "10";
// let ten2 = 10;
// console.log(ten1);
// console.log(ten2);
// console.log(typeof ten1);
// console.log(typeof ten2);
// console.log(ten1 === ten2);

// // typeof '10' and 10 is not equal
// console.log(Number(ten1) === ten2);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// answer:
// let neww1=parseFloat('9.8')
// let neww1='9.8'
// let neww2=10
// console.log(neww1);
// console.log(typeof parseFloat(neww1));
// console.log(neww2);
// console.log(typeof neww2);

// console.log(typeof parseFloat(neww1)==typeof neww2);


// console.log(neww1);
// console.log(neww2);
// console.log(typeof neww1);
// console.log(typeof neww2);
// console.log(neww1==neww2);
// console.log(parseInt(neww1)==neww2);


// 5. Check if 'on' is found in both python and jargon

// answer:

// let str1 = "python"
// let str2="jargon"
// console.log(str1.includes('on'));
// console.log(str2.includes('on'));


// 6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
let sen1="_I hope this course is not full of jargon_."

console.log(sen1.includes('_jargon_'));


// 7. Generate a random number between 0 and 100 inclusively.

console.log(Math.random()*101);


// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*51+50));


// 9. Generate a random number between 0 and 255 inclusively.
 console.log(Math.floor(Math.random()*256));
 
// 10. Access the 'JavaScript' string characters using a random number.

let str="javascript"
let lengthh=str.length


let position=str[Math.floor(Math.random()*lengthh)]
console.log(position);





// 11. Use console.log() and escape characters to print the following pattern.

//     ```js
//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
//     ```

// 12.  Use __substr__ to slice out the phrase __because because because__ from the following sentence:__'You cannot end a sentence with because because because is a conjunction'__



