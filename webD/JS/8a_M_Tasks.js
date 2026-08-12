// #### TODO :

// 1. Create an Array , name it `colors`  with elements  “Blue”, “Black”, ”Green” and “Violet” color in it.
// 2. Update the `Black` color with `Orange` color.
// 3. Push a new color `Red` in the colors array.
// 4. Check the current length of the colors array.
// 5. Iterate over the colors array using both for loop and for of loop.

let colors = ["Blue", "Black", "Green", "Voilet"] // 1
colors[2]="Orange";   //2.["Blue", "Orange", "Green", "Voilet"]

colors.push("RED");   //3.[ 'Blue', 'Black', 'Orange', 'Voilet', 'RED' ]

console.log(colors.length);  //4. 5

for(let i =0; i<colors.length; i++){
    console.log(colors[i]);
}


// ## Problem 1: Build a queue of tasks

//You have an empty array `tasks`.

//1. Add the tasks `"eat"`, `"code"`, `"sleep"` to the **end** of the array, in that order.
//2. Then, simulate handling the first task in the queue by **removing** it from the beginning.
//3. After removing, log the remaining tasks.

let tasks = [];
tasks.unshift("code"); //1
tasks.unshift("eat"); //1
tasks.push("sleep"); //1
console.log(tasks); //1

let handledtasks = tasks.shift(); // 2
console.log(tasks); // 3

// Problem 2: Priority message system
// You have a message list: let messages = ["msg1", "msg2"];

// You must:

//1. Add a **high-priority** message `"urgent"` to the **beginning** of the array.
//2. Add a normal message `"msg3"` to the **end**.
//3. Remove the oldest message from the beginning and log which message was removed.

let messages = ["msg1", "msg2"];
messages.unshift("urgent")
messages.push("msg3");
console.log(messages)
let removedMessage = messages.shift();
console.log('removedMessages: ${removedMessage}') // removes "urgent"
console.log(messages);



/* one practical exaample
- `cart.slice(1, 3)` gives `["book", "mouse"]` and keeps `cart` unchanged.
- `cart.splice(1, 2, "keyboard")` removes `"book"` and `"mouse"` and inserts `"keyboard"`.
*/
const cart = ["pen", "book", "mouse", "charger","scale", "compass"];
cart.slice(1,3); //gives ["book", "mouse"] and keeps cart unchanged.
console.log(cart); //["book", "mouse"]
cart.splice(1,2, "keyboard"); //removes "book" and "mouse" and inserts "keyboard".

// ## Practice == What will this output?
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); //[2,3,4]
console.log(arr); //[ 1, 2, 3, 4, 5 ]

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.splice(2, 2)); //[ 3, 4 ]
console.log(arr1);//[ 1, 2, 5 ]

const arr2 = ["a", "b", "c", "d"];
arr2.splice(1, 0, "x");
console.log(arr2);//[ 'a', 'x', 'b', 'c', 'd' ]

const arr3 = [10, 20, 30, 40, 50];
console.log(arr3.slice(-3, -1)); //[ 30, 40 ]]