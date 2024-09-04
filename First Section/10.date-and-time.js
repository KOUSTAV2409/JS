"user strict";

// Dates and times in JavaScript

let myDate= new Date()

console.log(myDate);
// console.log(myDate.toString());  

// toDateString() provide the name of the day, month, date,year like       Fri Aug 30 2024
// console.log(myDate.toDateString()); 

// toLocalDateString() provides date in the format of date/month/year like 30/8/2024
// console.log(myDate.toLocaleDateString()); 

// toLocalString() provides both date and time in a proper way like         30/8/2024, 9:40:06 pm
// console.log(myDate.toLocaleString());

// toLocalTimeString() only provide the time like:                      9:41:32 pm                            
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());

// "there are many more like this but my favourites among those methods are:
/*
1. toLocalDateString()    ==> Output Format:- date/month/year like 30/8/2024
2. toLocalString()        ==> Output Format:- 30/8/2024, 9:40:06 pm
3. toLocalTimeString()    ==> Output Format:- 9:41:32 pm  
*/

// Now checking the type of Date() method:
// console.log(typeof Date());  ==> This is a string 
// console.log(typeof myDate);  ==> This is a object"

// see an interesting thing when i am checking the type of Date(), the output shows that it is a string but when i am assigning the new Date() inside a variable and checking the type then i am getting the type of myDate as object

// **********************--TimeStamp--*********************************

let myTimestamp= Date.now()
let createDate= new Date("02-06-2024")

console.log(myTimestamp);
console.log(createDate.getTime());
console.log(createDate.getTime()/1000);

console.log(createDate.getDate());
console.log(createDate.getMonth());
console.log(createDate.getFullYear());


console.log(createDate.toLocaleString('default',{
    weekday:'long',
    timeZone:''
}));










                

