// const obj = {
//   prop1: "Hello!",
//   prop3: function () {
//     console.log("I'm a property dude!");
//   },
// };

// // can construct objects in two ways
// let user = new Object(); // "object constructor" syntax
// let users = {};  // "object literal" syntax

// // To access properties
// console.log(obj.prop1) // "Hello!"
// console.log(obj["prop1"]) // "Hello!"
// obj.prop3() // "I'm a property dude!"

// //remove a property
// delete user.age;


// // In real code, we often use existing variables as values for property names.
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let userr = makeUser("John", 30);
// alert(userr.name); // John

// // Instead of name:name we can just write name, like this:
// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age, // same as age: age
//     // ...
//   };
// }

// // checking if a property exists
// let useer = { name: "John", age: 30 };

// alert( "age" in useer ); // true, user.age exists
// alert( "blabla" in useer ); // false, user.blabla doesn't exist

// /**
//  * The "for..in" loop
//  */
// for (key in object) {
//   // executes the body for each key among object properties
// }

let usser = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// for (let key in user) {
//   // keys
//   alert(key); // name, age, isAdmin
//   // values for the keys
//   alert(usser[key]); // John, 30, true
// }

// OTHER PROPERTIES
/**
 * Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
 */
console.log(Object.keys(usser));//[ 'name', 'age', 'isAdmin' ]
console.log(Object.values(usser));//[ 'John', 30, true ]
console.log(Object.entries(usser));//[ [ 'name', 'John' ], [ 'age', 30 ], [ 'isAdmin', true ] ]

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");
  const dictLength = Number(inputArr[0]);
  let dict = inputArr.slice(1, dictLength + 1);
  let queries = inputArr.slice(dictLength + 1);

  let phoneBook = {};

  for (let i = 0; i < dict.length; i++) {
    const items = dict[i].split(" ");
    phoneBook[items[0]] = items[1];
  }

  for (let i = 0; i < queries.length; i++) {
    if (queries[i] in phoneBook) {
      console.log(`${queries[i]}=${phoneBook[queries[i]]}`);
    } else {
      console.info("Not found");
    }
  }
} 