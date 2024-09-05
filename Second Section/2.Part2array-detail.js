"user strict";
/* *********************************************ARRAY SECOND PART********************************************* */
/*

concat()
spread    // we use (...)
flat(Infinity)
Array.isArray()
Array.from()
Array.of()

*/
// Now suppose we have two different array and we have to merge it within a single array, then what to do ?

let array1=["koustav","ront","tuhin"]
let array2=["india", "nepal","itali"]

console.log( array1,  array2);
console.log(typeof array1, typeof array2);
let mergeArray= array1+array2  //if we use this '+' method to concatinate or merge two array then it will definetly merge the values but at the same time , it will convert the data type of the array from an object to string
console.log(mergeArray);
console.log(typeof mergeArray); 
// So we do not use the "+" in the case of arrays , we only use "+" in the case of string
// To merge two or more arrays into a single array we can use two method:
// a) concat()
let concatArray= array1.concat(array2) //This is a good method for mergin arrays but remember using concat() method for multiple arrays can be frustating this is why we will use spread operator
console.log(concatArray);  


// we will use the spread charecter for most of time for merging multiple arrays
// spread operator:
let allArray=[...array1,...array2]  // I love this spread operator, here i have to only assign a new variable and then inside the square bracket[] i will use three dot(...) and then name of the first array then a coma(,) again three dot(...) second array and so on.
console.log(allArray);


// Now here is an interesting case about array:
// Here is an example of a different kind of array

let diffArray=[1,2,3,[4,5,[6,7],9,10],11,12] // there are multiple arrays within a single array
console.log(diffArray);
// if we want to remove all the square brackets into a single array then we can use flat() method

console.log(diffArray.flat(Infinity)); // now see the output ... all of the different element of different arrays are included into a single array.

// we have seen previously that with the use of join() method , we can easily convert an array into a string. now here we will see that how we can transform a string value into an array with the use of Array.from() method

let namE="koustav"
console.log(namE); // providing value as string
console.log(typeof namE);  //type >> string

console.log(Array.isArray(namE));  // Array.isArray() is used to check if a variable or element array or not

let stringToArray= Array.from(namE)
console.log(stringToArray);  
// Output:==> 
   /* [
    'k', 'o', 'u',
    's', 't', 'a',
    'v'
  ] */
console.log(typeof stringToArray); // type >> object

console.log(Array.from({firstName: "koustav"}));  // this will return empty value []. i have to ask gpt about this later.

let class1="six"

console.log(Array.from(class1)); //output:==> [ 's', 'i', 'x' ]  // Array.from() actually split the string into multiple charecter and stores them as multiple charecter inside an array 

console.log(Array.of(class1));  //output:==> ['six]   //Array.of() converts the whole string into an array



















