const arr = [1, 2, 3, "Data", false, ["mangoes", 90]]; // //different data types
arr[0]; //indexed

// VARIOUS ARRAY METHODS


//------------------ADDING/REMOVING ELEMENTS-------------------
/**
 * 1. PUSH - adds to the end of the array
 */
arr.push(4);
// console.log(arr)

/**
 * 2. POP -- removes from the end of the array
 */

const removed = arr.pop();
// console.log("Removed item: " + removed);


/**
 * 3. UNSHIFT -- to add element at the beginning of the array
 */

arr.unshift("Structures")
// console.log(arr)

/**
 * 4. SHIFT -- to remove element at the beginning of the array. returns removed element
 */

const begRemoved = arr.shift();
// console.log("removed at beginning: " +begRemoved);


/**
 * 5. SPLICE -- method to delete existing elements, insert new elements, and replace elements in an array.
 */

//**Deleting elements - Array.splice(position,num); num=number of elements to delete, position=first item to delete

let scores = [1,2,3,4,5];
let deletedScore =  scores.splice(0,3);
console.log('Deleted Scores:',deletedScore); // [ 1, 2, 3 ]
console.log("Remaining Scores:",scores); //[4,5]

//**Inserting elements - You can insert one or more elements into an array by passing three or more arguments to the splice() method with the second argument is zero.
// Array.splice(position,0,new_element_1,new_element_2,...);
//The position specifies the starting position in the array that the new elements will be inserted.
// The second argument is zero (0) that instructs the splice() method to not delete any array elements.
// The third argument, fourth argument, and so on are the new elements that are inserted into the array.
let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, "yellow", "pink");
console.log(colors); // ["red", "yellow", "pink", "green", "purple", "blue"]

//**Replacing elements -insert new elements into an array while deleting existing elements simultaneously.
// pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]


/**
 * 6. SLICE -- method that allows you to extract subset elements of an array and add them to the new array.
 * slice(start, stop);
 * The start parameter determines the zero-based index at which to start extraction. If the start is undefined, slice() begins at 0.
 * The stop parameter, as its name implies, is a zero-based index at which to end extraction.
 */
//*clone an array
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice();
console.log(newNumbers);//[1, 2, 3, 4, 5]
//*Copy a portion of an array
var colorss = ['red','green','blue','yellow','purple'];
var rgb = colorss.slice(0,3);
console.log(rgb); // ["red", "green", "blue"]
//*Convert array-like objects into arrays
function toArray() {
  return Array.prototype.slice.call(arguments);
}

var classification = toArray('A','B','C');

console.log(classification); // ["A", "B", "C"]


/**
 * 5. FOR OF : to iterate over elements in an array 
 */
for (const item of arr) {
//   console.log(item);    
}



/**
 * 7. LENGTH - number of elements an array contains
 */

arr.length;

