# Notes JavaScript

# JavaScript String Methods – Notes

1. To display any of the text or data types in JavaScript, we use `console.log()` with the variable name.

2. To extract the type of data, we use `typeof` followed by the variable name within `console.log()`.

3. There is a function in JavaScript called `console.table()` which allows us to print/display multiple variables in a table format.

4. To extract the length of any string, we use the `length` property. For example, to extract the length of the string "koustav", you would use `console.log(name.length);`.

5. To change a string into uppercase letters, we use the `toUpperCase()` method.

6. To change a string into lowercase letters, we use the `toLowerCase()` method.

7. To extract part of a string, we can use the `substr()` or `substring()` method.

8. To slice out a portion of a string, you can use the `substr()` method, specifying the start index and the length of the portion to extract.

9. To check if a string contains a specific word or phrase, use the `includes()` method.

10. To split a string into an array, use the `split()` method, specifying the delimiter (e.g., a space or a comma).

11. To replace a word or phrase in a string with another, use the `replace()` method.

12. To find the character at a specific index in a string, use the `charAt()` method or bracket notation.

13. To find the character code of a character at a specific index in a string, use the `charCodeAt()` method.

14. To determine the position of the first occurrence of a character or substring in a string, use the `indexOf()` method.

15. To determine the position of the last occurrence of a character or substring in a string, use the `lastIndexOf()` method.

16. To find the position of a substring within a string using a regular expression or a string, use the `search()` method.

17. To remove any leading or trailing whitespace from a string, use the `trim()` method.

18. To check if a string starts with a specific substring, use the `startsWith()` method.

19. To check if a string ends with a specific substring, use the `endsWith()` method.

20. To find all occurrences of a pattern in a string, use the `match()` method with a regular expression.

21. To concatenate two or more strings, use the `concat()` method.

22. To repeat a string a specified number of times, use the `repeat()` method.





## Variable section notes

1. we do not use "var" in the time of assinging the name of the variables.
most of the time of we will use const and let for creating variable.

2.  we will use cammle case style in the time of naming different variables.
 like "cammleCase"

 ## Data types

 
1. string
2. number -- a) integer(int -- parseInt) b) floating point number(float- parseFloat)
3. boolean
4. null > null is standalone value and we can assing it within a variable, typeof null is object
5. symbol> unique > we can see the use of symbol in figma 
6. undefined
7. object

## Conversion

1. To convert any value in string , we use String. here is the example
let a= 12
now converting to the string: let b=String(a)

2. To convert any value in number (integer) , we use parseInt. here is the example
let a= 12
now converting to the parseInt: let b=parseInt(a)

3. To convert any value in number(parseFloat) , we use parseFloat. here is the example
let a= 12
now converting to the parseFloat: let b=parseFloat(a)

4. To convert any value in Boolean , we use Boolean. here is the example
let a= 12
now converting to the Boolean: let b=Boolean(a)

## Comparison

">"
"<"
">="
"<="
"=="
"===" This tripple equal is used to strict check

1. comparison and equality check works in a diffrent way in javascript

2. we will always try to compare between same data types to get accurate result. if the data types come from different categories then we will first convert the data types into same category then we will perform operations of compariosn and equality check

3. we will use "==="(strict check) most of the time instead of "==" to avoid mistakes.


## stack and heap in javascript(memory allocation concept):-




# Stack and Heap in JavaScript

## Stack vs Heap

- **Stack**: Used for primitive data types. Changes are made on a copy of the data, not the original.
- **Heap**: Used for non-primitive (reference) data types. Changes are made directly on the original data.

### Stack Example: Primitive Data Types

```javascript
let yourName = "koustav";
let myName = yourName;

console.log(yourName); // Output: koustav
console.log(myName); // Output: koustav

// Now, assign a new value to `myName`
myName = "rontu";

console.log(myName); // Output: rontu
console.log(yourName); // Output: koustav
```

**Explanation**:  
The value of `myName` has changed to "rontu", but the original value of `yourName` remains "koustav". This shows that in the stack, changes are made only to the copy of the data, not the original.

### Heap Example: Non-Primitive Data Types

```javascript
let obj1 = {
    myName: "koustav",
    age: 25
};
let obj2 = obj1;

console.log(obj1); // Output: { myName: 'koustav', age: 25 }
console.log(obj2); // Output: { myName: 'koustav', age: 25 }

// Now, modify the `age` property in `obj2`
obj2.age = {
    score: 40,
    country: "india"
};

console.log(obj1); // Output: { myName: 'koustav', age: { score: 40, country: 'india' } }
console.log(obj2); // Output: { myName: 'koustav', age: { score: 40, country: 'india' } }
```

**Explanation**:  
Both `obj1` and `obj2` reflect the same changes. This shows that in the heap, changes are made directly to the original data.

### Additional Example: Array Mutation

```javascript
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
```

**Explanation**:  
When you change the content of `array2` (e.g., `array2[0] = "50"`), the change is reflected in `array1` as well, which is expected in a heap context. However, when you reassign `array2` to a new array, it creates a new reference, and `array1` remains unchanged. This behavior occurs because reassignment breaks the reference link between `array1` and `array2`, making `array2` refer to a new object in memory.


---



## Clearing Doubt

### Conversation with GPT:

#### GPT Explanation:

```javascript
// Additional Example: Array Mutation

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
```

**Explanation**:  
When you change the content of `array2` (e.g., `array2[0] = "50"`), the change is reflected in `array1` as well, which is expected in a heap context. However, when you reassign `array2` to a new array, it creates a new reference, and `array1` remains unchanged. This behavior occurs because reassignment breaks the reference link between `array1` and `array2`, making `array2` refer to a new object in memory.

#### My Question:

**Question**:  
Understood your explanation in the case of arrays, but have you noticed that in the case of `obj1` and `obj2`, I have reassigned the value of the whole object in `obj2` but still, the changes have been reflected in `obj1`?

#### GPT Explanation:

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

--- 


# Detail notes on string based on exercise two:

Certainly! Here's the same content formatted as a Markdown note:

```markdown
# JavaScript String Methods – Notes

## 1. Variable Declaration
- **Declare a variable** named `challenge` and assign it the value `'30 Days Of JavaScript'`.
  ```javascript
  let challenge = "30 Days Of JavaScript";
  ```

## 2. Printing a String to the Console
- Use `console.log()` to print the string to the console.
  ```javascript
  console.log(challenge);  // Output: 30 Days Of JavaScript
  ```

## 3. String Length
- Use the `.length` property to get the length of a string.
  ```javascript
  console.log(challenge.length);  // Output: 21
  ```

## 4. Changing Case
- **To Uppercase:** Convert all characters in the string to uppercase using `toUpperCase()`.
  ```javascript
  console.log(challenge.toUpperCase());  // Output: 30 DAYS OF JAVASCRIPT
  ```
- **To Lowercase:** Convert all characters in the string to lowercase using `toLowerCase()`.
  ```javascript
  console.log(challenge.toLowerCase());  // Output: 30 days of javascript
  ```

## 5. Extracting Substrings
- **Using `substr()`** to extract part of a string from a specified index with a given length.
  - Example: Extracting "30".
  ```javascript
  console.log(challenge.substr(0, 2));  // Output: 30
  ```
- **Using `substring()`** to extract characters between two indices.
  - Example: Extracting "Days".
  ```javascript
  console.log(challenge.substring(3, 7));  // Output: Days
  ```

## 6. Slicing Strings
- **Slice out "Days Of JavaScript":**
  ```javascript
  console.log(challenge.substr(3));  // Output: Days Of JavaScript
  ```

## 7. Checking Substring Presence
- Use `includes()` to check if a substring is present in a string.
  ```javascript
  console.log(challenge.includes("Script"));  // Output: true
  ```

## 8. Splitting Strings
- **Split by spaces:** Break the string into an array of words.
  ```javascript
  console.log(challenge.split(" "));  // Output: ["30", "Days", "Of", "JavaScript"]
  ```
- **Split by commas:** Example with a different string.
  ```javascript
  let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
  let arrayCompany = company.split(",");
  console.log(arrayCompany);  // Output: ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
  ```

## 9. Replacing Substrings
- Replace a word in a string using `replace()`.
  ```javascript
  console.log(challenge.replace("JavaScript", "Python"));  // Output: 30 Days Of Python
  ```

## 10. Finding Characters
- **Character at a specific index:** Use `charAt()` or bracket notation.
  ```javascript
  console.log(challenge.charAt(15));  // Output: S
  ```
- **Character code at a specific index:** Use `charCodeAt()`.
  ```javascript
  console.log(challenge.charCodeAt(11));  // Output: 74 (Character code for 'J')
  ```

## 11. Finding Substring Positions
- **First occurrence of 'a':** Use `indexOf()`.
  ```javascript
  console.log(challenge.indexOf("a"));  // Output: 4
  ```
- **Last occurrence of 'a':** Use `lastIndexOf()`.
  ```javascript
  console.log(challenge.lastIndexOf("a"));  // Output: 14
  ```
- **First occurrence of 'because':** Use `indexOf()`.
  ```javascript
  let sentence = "You cannot end a sentence with because because because is a conjunction";
  console.log(sentence.indexOf("because"));  // Output: 31
  ```
- **Last occurrence of 'because':** Use `lastIndexOf()`.
  ```javascript
  console.log(sentence.lastIndexOf("because"));  // Output: 47
  ```
- **Using `search()` to find 'because':**
  ```javascript
  console.log(sentence.search("because"));  // Output: 31
  ```

## 12. Trimming Whitespace
- Remove leading and trailing whitespace using `trim()`.
  ```javascript
  let whitespace = " 30 Days Of JavaScript ";
  console.log(whitespace.trim());  // Output: 30 Days Of JavaScript
  ```

## 13. Checking Start and End of String
- **Starts with:** Use `startsWith()` to check if a string starts with a specific substring.
  ```javascript
  console.log(challenge.startsWith("30"));  // Output: true
  ```
- **Ends with:** Use `endsWith()` to check if a string ends with a specific substring.
  ```javascript
  console.log(challenge.endsWith("JavaScript"));  // Output: true
  ```

## 14. Matching Patterns
- Use `match()` to find all occurrences of a pattern (e.g., all 'a' characters).
  ```javascript
  console.log(challenge.match(/a/g));  // Output: ['a', 'a', 'a']
  ```

## 15. Concatenating Strings
- Combine strings using `concat()`.
  ```javascript
  let str1 = "30 Days of";
  let str2 = " JavaScript";
  console.log(str1.concat(str2));  // Output: 30 Days of JavaScript
  ```

## 16. Repeating Strings
- Repeat a string a specified number of times using `repeat()`.
  ```javascript
  console.log(challenge.repeat(2));  // Output: 30 Days Of JavaScript30 Days Of JavaScript
  ```






