// Task 1 : 
sayHello();

function sayHello() {
  console.log("Hello!");
}



const sayBye = function () {
  console.log("Bye!");
};

sayBye();

console.log(typeof multiply);

var multiply = function (a, b) {
  return a * b;
};

const obj = {
  name: "Sara",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

obj.regular();
obj.arrow();

const fact = function f(n) {
  if (n <= 1) return 1;
  return n * f(n - 1);
};

console.log(fact(4));
console.log(typeof f);

(function () {
  var secret = "hidden";
  console.log("Inside IIFE:", secret);
})();

console.log(typeof secret);