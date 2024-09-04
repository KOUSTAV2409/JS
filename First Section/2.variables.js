const studentName="koustav"
let section="A"
var roll=15
// console.log(studentName);
// console.log(section);

// console.log(roll);
console.table([studentName,section,roll])
// studentName="rontu"
section="B"
roll=84
console.table([studentName,section,roll])


/*
we do not use "var" in the time of assinging the name of the variables.
most of the time of we will use const and "let" for creating variable.
*/

a=23
b="jojo"
c="lorem45"

// This console.table() is basically used to get all of the output of different variable in a single place
console.table([a,b,c,])
//  And the output of console.table() is looked like this:
// OUTPUT:-->
/*
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'koustav' │
│ 1       │ 'B'       │
│ 2       │ 84        │
└─────────┴───────────┘
*/



//  we will use cammle case style in the time of naming different variables.
//  like cammleCase