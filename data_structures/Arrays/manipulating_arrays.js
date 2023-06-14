/**
 * 1. CONCAT - merge two or more arrays into a single array.
 * The concat() method returns a new array and doesn’t change the original arrays.
 */
let odds = [1, 3, 5];
let evens = [2, 4, 6];
// merge odds and evens array
let combined = odds.concat(evens);

console.log("Result:", combined);
console.log("Odds:", odds);
//Result: [ 1, 3, 5, 2, 4, 6 ]
// Odds: [ 1, 3, 5 ]

// could have also done this
// merge odds and evens array
let combinedd = [].concat(odds, evens);//[ 1, 3, 5, 2, 4, 6 ]


//can merge more than two arrays
let upper = ["A", "B", "C"];
let lower = ["a", "b", "c"];
let digits = [1, 2, 3];
let alphanumerics = upper.concat(lower, digits);//['A', 'B', 'C', 'a',  'b', 'c', 1,   2,  3]

// When you don’t pass any argument into the concat() method, it simply clones the array and returns it:
let colors = ["red", "green", "blue"];
let rgb = colors.concat();
console.log(rgb);//[ 'red', 'green', 'blue' ]