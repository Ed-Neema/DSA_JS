/**
 * 1. MAP - 
 */
let numbers = [16, 25, 36];
let results = numbers.map(Math.sqrt);
console.log(results);

let circles = [10, 30, 50];
function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas);

/**
 * 2. FILTER -  filter elements in an array.
 */

let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "Houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];
let bigCities = cities.filter((city) => city.population > 3000000);
console.log(bigCities);

/**
 * 3a. REDUCE -  reduce an array to a value.
 */
let numberss = [1, 2, 3];
let sum = numberss.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

console.log(sum);

let shoppingCart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];
let total = shoppingCart.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.qty * currentValue.price;
}, 0);//550

/**
 * 3b. REDUCERIGHT-  reduce an array to a value starting backwards from right to left
 */
let numbersss = [1, 2, 3];

let summ = numbersss.reduceRight(function (previousValue, currentValue) {
  console.log({ previousValue, currentValue });
  return previousValue + currentValue;
});

console.log(`Result:${summ}`);
// { previousValue: 3, currentValue: 2 }
// { previousValue: 5, currentValue: 1 }
// Result:6


/**
 * 4. EVERY - check whether all the array elements pass a test 
 */
let number = [1, 3, 5];
let result = number.every(function (e) {
  return e > 0;
});

console.log(result);//true
let isEven = number.every(function (e) {
  return e % 2 == 0;
});

console.log(isEven);//false

//If you call the every() method on an empty array, the method will always return true for any condition. For example:
let gtZero = [].every((e) => e > 0); // any condition
let ltZero = [].every((e) => e < 0); // any condition

console.log("gtZero:", gtZero);
console.log("ltZero:", ltZero);
//gtZero: true
// ltZero: true

/**
 * 5.SOME - check if at least one element in the array passes a test.
 */

let marks = [4, 5, 7, 9, 10, 3];

lessThanFive = marks.some(function (e) {
  return e < 5;
});

console.log(lessThanFive);//true

/**
 * 6.SORT - sort arrays of numbers, string, and objects.
 * By default, the sort() method sorts the array elements in ascending order with the smallest value first and largest value last.
 * The sort() method casts elements to strings and compares the strings to determine the orders.
 * 
 */

let digits = [0, 1, 2, 3, 10, 20, 30];
digits.sort();
console.log(digits);//[ 0, 1, 10, 2, 20, 3, 30 ]

let numberz = [0, 1, 2, 3, 10, 20, 30];
numberz.sort((a, b) => a - b);//ascending
numberz.sort((a, b) => b - a);//descending


console.log(numberz);

/**
 * 7. FOREACH - exeucte a function on every element in an array.
 */
let ranks = ["A", "B", "C"];

ranks.forEach(function (e) {
  console.log(e);
});