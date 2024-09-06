"user strict";

// There are two types of data types in javascript called a) Primitive and b) Non Primitive
// Under non primitive data types we have array and object:
// In this section we will discuss about array :

// 1. Array:

// we can store any type of data in an array
// example
// let arr = ["koustav", 25, true, null, undefined, { name: "koustav" }, ["koustav", "rontu", "kashyap"]]; // this is an array
/*
push()
pop()
unshift()
shift()
includes()
indexof()
join()  ==> this method change change the data type of element from array object to string data type 
slice()
splice() 
*/

// console.log(arr);

// we will start with simple example of array:
let firstArray=[12,13,14,15,16,17]

console.log(firstArray)

// Array method:
// push()
firstArray.push(30) //push() method is used to add a new element in the last of an array
console.log(firstArray); // See the output 30 has been added in the last position of the array

// pop()
firstArray.pop()  // pop() method just cut out the last element from an array 
console.log(firstArray); // see the output , 30 that has been added within the array with the use of push() method has been removed by using pop() method

// unshift()
firstArray.unshift(50) //unshift() is used to add any value or element in the first position of the array
console.log(firstArray); // see the output , 50 has been added in the first position of the array

// shift()
firstArray.shift() // shift() is used to cut out the element or value from the first position of the array
console.log(firstArray); // see the output , 50 that was added with the use of unshift() method has been removed by using shift() method

// includes()
console.log(firstArray.includes(13)); // includes() method is used to check if an element exist within an array. Here we have checked that 13 is available within the array named firstArray

// indexof()
console.log(firstArray.indexOf(13)); // indexof() method is used to extract the index position of an element in an array . In this example index position of 13 in this array named firstArray is 1

// join()
let secondArray=firstArray.join()
console.log(secondArray); // See the output , the value of the output is same as the output of firstArray so what is the usecase of join() method?
// join() method is basically used to change the datatype from an array to a string, now if we check the datatype of both of the firstArray and secondArray we can see different result:
console.log(typeof firstArray); // this is a object > type of all of the the non primitive datatype is "object" either it is an array or anything.
console.log(typeof secondArray); // this is a string 

// slice() and splice()

let newArr=[10,20,30,40,50]
// console.log(newArr);
console.log(newArr.slice(0,2));  // see the output after using slice:==> [10,20]

console.log(newArr); // now see the output of the newArr if there is any change:==> [10,20,30,40,50]  >>> We can see that there is no change in the values of main array after using slice() method. we have only extracted out required portion from the main array wihout changing the value of main array.

// now coming to the splice()
console.log(newArr.splice(0,2));  // see the output after using slice:==> [10,20]. It is same as the output of slice() . But now we will check the output of main array after using the splice() method

console.log(newArr); // now see the output if there is any change:==> [30,40,50] >>> we can see that after using splice() method we have extracted our required portion from the array but the values of main array has been also changed.

















