// // Fat arrow function for adding two numbers
// const addNumbers = (a, b) => a + b;

// // Example usage:
// console.log(addNumbers(5, 7)); // Output: 12


// Json is an array of objects and objects are key value pairs
let Gaurav = [
    {
        name : "gaurav",
        age : 22,
        city : "Latur"
    },
]
console.log("Gaurav");

let json = JSON.parse(JSON.stringify(Gaurav));
console.log(json);


function createCounter() {
  let count = 0; 

  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter());


let arr = [1, 2, 3, 4, 5]
let arr2 = [...arr,5,6,7,8]

console.log(arr);
console.log(arr2);




function f(){
  let x; 
  function g(){
    console.log(x);
  }
  g()
  x = 1;

}

tcu usvr ttw