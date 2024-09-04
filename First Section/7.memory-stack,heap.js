// First read datatype and data type summery carefully and thoroly then start this part:


"user strict";

// stack - premitive datatypes  > changes in copy 
// heap - non premitive data types > changes in main or original files /reference

/* stack: In this way, we only get a copy of main data , and whatever changes we do are actually performed in the copy of data not in the main data 
But in Heap: we get direct access or reference of main data in the memory space. so whatever changes we do are actually done in the main data.
*/
//  Here is the example how stack and heap works in practical scenario:
// stack always works with primitive data types:-

let yourName="koustav"
let myName= yourName

// console.log(yourName);
// console.log(myName);

// see the result of above console . both of yourName and myName are showing same output. now we will assign another value inside myName.
myName="rontu"
console.log(myName);
console.log(yourName);

/*now see the result of console. The value of myName has been changed from koustav to rontu. And the the original value of yourName remains the same without any changes. This is the proof that in "stack" we cannot change the original value stored in the memory space but only change in the copy of the value.*/

// now we will see the example of "heap":
// "Heap" always works with non primitive / composite / reference data types:-

let obj1={
    myNamee:"koustav",
    age:25
}
let obj2=obj1

console.log(obj1);
console.log(obj2);

// See the result of console. Both obj1 and obj2 are showing the same output. now we will assign new value inside obj2 then see the result.
obj2.age={
    score:40,
    country:"india"
}
console.log(obj1);
console.log(obj2);


// Here is another example:But there is some issues here 
let array1=["1","2","3","4","5"]
let array2=array1

console.log(array1);
console.log(array2);

// Doubt: 
/*when i use the bellow array2[0]="50", it is working fine according to the concept of heap and the changes are reflected in the main value also but when i am using array2=["155","450","511"] then main value is not changing accordingly. caanot understand the reason of this error or my mistake.*/


// array2[0]="50"

array2=["155","450","511"]
console.log(array2);
console.log(array1);


// Clearing Doubt:

// Actually i have gone to gpt and ask my doubt and gpt has solved my doubt: here is our conversation:

// GPT EXPLANATION:-

/*


Additional Example: Array Mutation
javascript

let array1 = ["1", "2", "3", "4", "5"];
let array2 = array1;

console.log(array1); // Output: ["1", "2", "3", "4", "5"]
console.log(array2); // Output: ["1", "2", "3", "4", "5"]

// Now, modify the first element in `array2`
array2[0] = "50";

console.log(array1); // Output: ["50", "2", "3", "4", "5"]
console.log(array2); // Output: ["50", "2", "3", "4", "5"]

// Assign a new array to `array2`
array2 = ["155", "450", "511"];

console.log(array2); // Output: ["155", "450", "511"]
console.log(array1); // Output: ["50", "2", "3", "4", "5"]
Explanation:
When you change the content of array2 (e.g., array2[0] = "50"), the change is reflected in array1 as well, which is expected in a heap context. However, when you reassign array2 to a new array, it creates a new reference, and array1 remains unchanged. This behavior occurs because reassignment breaks the reference link between array1 and array2, making array2 refer to a new object in memory.
*/

// MY QUESTION:

/*
understood your explanation in the case of array but have you noticed that in the case of obj1 and obj2, i have reassigned the value of whole object in obj2 but still the changes has been reflected in the obj1 
*/

// GPT EXPLANATION:-

/*
You're absolutely right to notice that behavior. Let's clarify why that happens.

### Understanding Object Mutation and Reassignment

In JavaScript, when you reassign the entire object or array, it's crucial to understand whether you're mutating the object or assigning a new reference.

### What Happens in Your Code?

#### Object Example:

```javascript
let obj1 = {
    myName: "koustav",
    age: 25
};
let obj2 = obj1;

console.log(obj1); // Output: { myName: 'koustav', age: 25 }
console.log(obj2); // Output: { myName: 'koustav', age: 25 }

// Modify the `age` property of `obj2`
obj2.age = {
    score: 40,
    country: "india"
};

console.log(obj1); // Output: { myName: 'koustav', age: { score: 40, country: 'india' } }
console.log(obj2); // Output: { myName: 'koustav', age: { score: 40, country: 'india' } }
```

### Why Does `obj1` Change?

- **Reference Sharing**: When `obj2` is initially assigned to `obj1`, both variables point to the same object in memory. Any mutation (like changing the `age` property) will reflect in both `obj1` and `obj2`.

- **Property Mutation vs. Object Reassignment**: When you mutate a property within `obj2` (like changing `age`), you're not creating a new object; you're changing the content of the existing object. Since both `obj1` and `obj2` reference the same object, the change is visible in both.

#### Array Example:

```javascript
let array1 = ["1", "2", "3", "4", "5"];
let array2 = array1;

// Mutate array2 (this will affect array1)
array2[0] = "50";

console.log(array1); // Output: ["50", "2", "3", "4", "5"]
console.log(array2); // Output: ["50", "2", "3", "4", "5"]

// Reassign array2 (this creates a new reference)
array2 = ["155", "450", "511"];

console.log(array2); // Output: ["155", "450", "511"]
console.log(array1); // Output: ["50", "2", "3", "4", "5"]
```

### Key Difference:

- **Mutation**: Changing a property or an element (like `obj2.age = {...}` or `array2[0] = "50"`) alters the existing object/array in memory, so the change is reflected across all references.
  
- **Reassignment**: When you reassign `array2` to a new array, you create a new object in memory. `array2` now points to this new object, but `array1` still points to the old one, so `array1` remains unchanged.

### The Case of `obj2.age`:

In your example, you’re not reassigning the entire `obj2`; instead, you're mutating the `age` property by assigning a new object to it. This is still considered a mutation of the existing object, not a reassignment of the whole object. Therefore, the change is reflected in `obj1` as well.

To illustrate the difference, if you were to reassign `obj2` entirely like this:

```javascript
obj2 = { myName: "rontu", age: 30 };
```

Then `obj2` would point to a new object, and `obj1` would remain unchanged:

```javascript
console.log(obj1); // Output: { myName: 'koustav', age: { score: 40, country: 'india' } }
console.log(obj2); // Output: { myName: 'rontu', age: 30 }
```

I hope this clears up the concept!
*/









 