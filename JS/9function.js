// hoisted function
function add1(a, b) {
  return a + b;
}
console.log(add1(2, 3)); // 5

// not hoisted fiunction
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

// Anonymous Function
setTimeout(function () {
  console.log("Runs after 1 second");
}, 1000);

// Named Function Expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // refers to itself via internal name
};
console.log(factorial(5)); // 120

//  4. Arrow Functions: 
// - No `this`, `arguments`, or `super` binding of its own.
// - Cannot be used as a constructor (`new` throws error).
// - Great for short callbacks and preserving `this` from outer context.

const add = (a, b) => a + b;

console.log(add(3, 4)); 

const greet = (name) => {
  const message = `Hello, ${name}`;
  return message;
};
