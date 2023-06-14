/**
 * 1. INDEXOF - returns the index of the first occurrence the element that you want to find, or -1 if the element is not found.
 * Array.indexOf(searchElement, fromIndex)
The fromIndex argument can be a positive or negative integer. If the fromIndex argument is negative, the indexOf() method starts searching at array’s length plus fromIndex.
 */
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1
console.log(scores.indexOf(20,-1)); // 5 (fromIndex = 6+ (-1) = 5)
console.log(scores.indexOf(20,-5)); // 1 (fromIndex = 6+ (-5) = 1)


// NOTICE THIS
var guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];
console.log(guests.indexOf({
    name: 'John Doe',
    age: 30
})); // -1
// The following statement returns -1 even though the first element of the guests array and the searchElement have the same values in the name and ages properties. This is because they are two different objects.\Notice that the indexOf() method uses the strict equality comparison algorithm that is similar to the triple-equals operator (===) when comparing the searchElement with the elements in the array.


//Sometimes, you want to find the indices of all occurrences of an element in an array. The following find() function uses the indexOf() method to do so.
function find(needle, haystack) {
  var results = [];
  var idx = haystack.indexOf(needle);
  while (idx != -1) {
    results.push(idx);
    idx = haystack.indexOf(needle, idx + 1);
  }
  return results;
}

console.log(find(10,scores)); // [0, 3]

/**
 * 2. lastIndexOf
 * returns the index of the last occurrence of the searchElement in the array. It returns -1 if it cannot find the element.
 * Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1])
 * Different from the indexOf() method, the lastIndexOf() method searches for the element backward, starting at fromIndex.
 * 
 * 
 */
console.log(scores.lastIndexOf(10));// 3
console.log(scores.lastIndexOf(20));// 5
console.log(scores.lastIndexOf(50));// -1


/**
 * 3. INCLUDES - method that checks if an element is in an array.
 * array.includes(element,fromIndex);
 * The includes() method returns true if an array contains a given element; Otherwise, it returns false.
 * The first argument is the element that can be searched.
* The fromIndex is the position in the array to which the search starts.
If called without arguments, this method simply tests whether or not the array has any items inside it.
 */

//When working with an array, you often want to check if the array contains an element. To do this, you use the indexOf() method as follows:
let numbers = [1, 2, 3];
if (numbers.indexOf(2) !== -1) {
  // process here
}

// indexOf() uses strict equality operator (===) for comparison, therefore, it doesn’t work with NaN as shown in the following example:
[NaN].indexOf(NaN); // -1
// In this example, the array contains one element of NaN. However, the indexOf(NaN) returns -1

[1,2,3].includes(2); // true
[1,2,3].includes(4); // false
[1,2,3].includes(1,1); // false
[NaN].includes(NaN); // true
[-0].includes(+0); // true

console.log(2=="2");


/**
 * 4. FIND - method to search for the first element in an array, which satisfies a test.
 */
let numberss = [1, 2, 3, 4, 5];

console.log(numberss.find((e) => e % 2 == 0));//2
let customers = [
  {
    name: "ABC Inc",
    credit: 100,
  },
  {
    name: "ACME Corp",
    credit: 200,
  },
  {
    name: "IoT AG",
    credit: 300,
  },
];
console.log(customers.find((c) => c.credit > 100)); //{ name: 'ACME Corp', credit: 200 }

/**
 * 4. FINDINDEX - find the first element in an array that satisfies a provided testing function. eturns the index of the element that satisfies a testing function or -1 if no element passed the test.
 */
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank) => rank === 7);
console.log(index);//2



let indexx = ranks.findIndex((rank, index) => rank === 7 && index > 2);
console.log(indexx);//5

const products = [
  { name: 'Phone', price: 999 },
  { name: 'Computer', price: 1999 },
  { name: 'Tablet', price: 995 },
];

const indexxx = products.findIndex(product => product.price > 1000);

console.log(indexxx); // 1