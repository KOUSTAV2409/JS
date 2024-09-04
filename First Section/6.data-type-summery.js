"user strict";
//  Javascript is a dynamically typed language
// There are basically two types of data types in javascript==>
//          1. primitive
//          2.non primitive / reference / composite


// 1. primitive data types:-

/*
string
number
Boolean
null > null means empty , it means there is no value 
undefined >undefined means a variable has been declared and a memory space is occupied but the value for the variable or for the mamory space has not been decided yet

symbol > special case datatype used in different frontend libraries
*/
// example of primitive types
let place="india";
let score=45;
let bigNumber=794646164987984654987987n;
let eligible= true
let empty= null
let x;
let s1=Symbol("1235")
let s2=Symbol("1235")

console.log(typeof s1);
console.log(typeof s2);

console.log(typeof place);
console.log(typeof score);
console.log(typeof bigNumber);
console.log(typeof eligible);
console.log(typeof empty);
console.log(typeof x);

// 2. Non primitive types / composite / reference type:-

/*
    array
    object
    function
*/
// array: Datatype that is known as list in python programming language is considered as Array in javaScript: 
// array example:-
let nameList=["koustav","rontu","dhiman", "aristotle"]

// object : datatype that is known as dictionary in python is considered as object in javaScript.
//  object example:
// we use curly brackets to define object
{
    firstName:"koustav"
    lastName:"ganguly"
    age:23
    country:"india"
} 
// we can use variable to store an object. inside the object different datatypes can be stored effectively
let object=
{
    firstName:"koustav",
    lastName:"ganguly",
    age:23,
    country:"india",
} 

console.log(nameList);
console.log(typeof nameList);
console.log(object);
console.log(typeof object);

// function
// function myFunction(x,y) 
// {
//     z=x*y
    
// }
// // console.log(myFunction);
// myFunction(x:5 , y:9):void;











