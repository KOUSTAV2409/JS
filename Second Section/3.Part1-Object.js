"user strict";
// Here we will learn more about object and  dive more into data types:-
// We can declare an object in two ways :-
// a) literal b) constructive

// Here we will learn more about literal way rather than constructive. Only thing i have to remember that there is a concept called "singleton". When we use constructive way to declare an object then "singleton" is created but in lieteral way "singleton" is not created.
// object.create() ==> this is constructive way of creating object. But here we only focus on literal way of creating object.

// a) literal way:
let newObj={
    firstName:"koustav", // Here firstname is the "key" and koustav is "value"
    lastName:"ganguly",
    age:23,

}
// All of the keys in the object are considered as string by default and we do not have to declare it at our own
console.log(newObj); //Output:==>{ firstName: 'koustav', lastName: 'ganguly', age: 23 }
// Now we want to access key values from the object:
// There are two ways to access the key values form the object:
// 1.
console.log(newObj.firstName);  //output:==> koustav
// 2.
console.log(newObj["firstName"]); // This will also show koustav as output.

// Use case of second method of accessing key values from a object is very usefull in the bellow concept when i will declare a symbol datatype:
let mySymb=Symbol("key one")
console.log(typeof mySymb); // type of this data type is symbol
// Now putting the variable called mySymb inside an object.

let newObj2={
    mySymb:"place one"
}
console.log(newObj2);
console.log(typeof newObj2);
console.log(typeof newObj2.mySymb);  // now see the output . it is very interesting that the type of mySymb that is predefined as a symbol data type now showing as string data type after declaring the variable inside an object.

// In this type of cases , if we want to use symbol data type inside an object, we have to declare the symbol data type in another way.
let newObj3={
    [mySymb]:"place new",
    mySymb:"okay",
    state:"west bengal"
}
// Now checking the data type of mySymb inside the object:
console.log(typeof newObj3[mySymb]);   // i am not understanding why this output is showing string instead of symbol. have to ask gpt for this.
console.log(newObj3);  
/*output: 
{ mySymb: 'okay',
 [Symbol(key one)]: 'place new' }  */
//  See the difference in the output when we are using [] and when we are not using []

newObj3.state="WESTBENGAL"
console.log(newObj3); // see the output: the value of state has been changed:==> { mySymb: 'okay', state: 'WESTBENGAL', [Symbol(key one)]: 'place new' }

// But we can lock the value of an object so that the values cannot be changed any more in the bellow way with the use of object.freeze() method:
// Object.freeze(newObj3)
console.log(newObj3);
// Now trying to change the value of state once more and see what will happen:
newObj3.state="Bangla"

console.log(newObj3);  //The output is unchanged and still providing { mySymb: 'okay', state: 'WESTBENGAL', [Symbol(key one)]: 'place new' }
// This is hapenning because , we have locked the value with the use of object.freeze() method



newObj3.greetings=function(){
    return "hello bro , how are you?";
    //This is another way of declaring a new function
}
console.log(newObj3.greetings());

newObj3.greetings2=function(){
    return `name of the state is ${this.state}`
}
console.log(newObj3.greetings2());






