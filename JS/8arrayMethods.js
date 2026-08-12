// // We already know methods that add and remove items from the beginning or the end:

// // - arr.push(...items) – adds items to the end,
// // - arr.pop() – extracts an item from the end,
// // - arr.shift() – extracts an item from the beginning,
// // - arr.unshift(...items) – adds items to the beginning.

// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits)

// console.log( fruits[0] ); // Apple
// console.log( fruits[1] ); // Orange
// console.log( fruits[2] ); // Plum

// //We can replace an element Or add a new one to the array:

// fruits[2] = 'Pear'; 
// fruits[3] = 'Lemon';

// console.log(fruits)

// //The total count of the elements in the array is its length:
// console.log( fruits.length ); 

// //pushAppend the element to the end of the array:
// fruits.push("jamla");
// console.log( fruits ); 


// //print all elements of the array
// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++) {
//   console.log( arr[i] );
// }

// // #### Shift, unshift
// //`shift()` removes the **first** element from an array, and `unshift()` adds one or more elements to the **beginning** of an array

// //## `shift()` :It removes the first item and returns that removed item

// let fruits = ["apple", "banana", "mango"];

// let removed = fruits.shift();

// console.log(removed); // "apple"
// console.log(fruits);  // ["banana", "mango"]

//  //## `unshift()`: It adds item(s) to the start of the array and returns the new length.

// let fruits = ["banana", "mango"];

// let newLength = fruits.unshift("apple");

// console.log(newLength); // 3
// console.log(fruits);    // ["apple", "banana", "mango"]

// // small Practice

// let items = ["pen", "book"];
// items.unshift("bag");
// console.log(items); //[ 'bag', 'pen', 'book' ]

// items.shift();
// console.log(items);  //[ 'pen', 'book' ]


// // Delete: The arrays are objects, so we can try to use delete:

// let arr = ["I", "go", "home"];

// delete arr[1]; 

// console.log( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
// console.log( arr.length ); // 3 

// // The element was removed, but the array still has 3 elements
// // for arrays we usually want the rest of the elements to shift and occupy the freed place
// //The arr.splice method  can do everything: insert, remove and replace elements.

// /* ## `splice()` method

//  `splice()` is used to **add, remove, or replace elements** in an array. It **changes the `original` array**. */


// // Syntax :: array.splice(start, deleteCount, item1, item2, ...)
// // - `start` = where to begin.
// // - `deleteCount` = how many elements to remove.
// // - `item1, item2...` = elements to insert.

// let arr = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element

// console.log( arr ); // ["I", "JavaScript"]


// // remove 3 first elements and replace them with another
// let arr = ["I", "study", "JavaScript", "right", "now"];

// arr.splice(0, 3, "Let's", "dance");
// console.log(arr); 


// //  exapmle:remove element"peaar"&"orange" 
// //  add elements "yellow" 
// const fruits=["apple", "pear", "orange", "banana"];
// let removed = fruits.splice(1, 2);
// console.log(removed); //print removed elements
// console.log(fruits); // prints elements after removeel


// //Example : add elements
// let names = ["Darsshan", "Samarth", "chetan"];
// names.splice(3,0,"Sanskar");
// console.log(names); //[ 'Darsshan', 'Samarth', 'chetan', 'Sanskar' ]
// //Example : replace elements
// names.splice(2,1,"Junju");
// console.log(names); //[ 'Darsshan', 'Samarth', 'Junju', 'Sanskar' ]


// /* ## `slice()` method

// `slice()` is used to **extract part of an array** and return it as a **new array**. It does **not change** the original array.*/


// /* ## Syntax

// ```jsx
// array.slice(start, end)
// ```

// - `start` is included.
// - `end` is not included.
// - If `end` is omitted, it goes until the last element.*/
// const fruits = ["apple", "banana", "mango", "orange", "grapes"];

// const part = fruits.slice(1, 4);
// console.log(fruits);  //[ 'apple', 'banana', 'mango', 'orange', 'grapes' ]
// console.log(part);  //[ 'banana', 'mango', 'orange' ]

// // Example 2: slice from one index to end
// const nums = [10, 20, 30, 40, 50];

// console.log(nums.slice(2)); // [30, 40, 50]

// //Example 3: negative index

// const nums = [10, 20, 30, 40, 50];
// console.log(nums.slice(-2)); // [40, 50]

// let arr = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) ); //[ 'e', 's' ]
// console.log( arr.slice(-3) );// [ 'e', 's', 't' ]

