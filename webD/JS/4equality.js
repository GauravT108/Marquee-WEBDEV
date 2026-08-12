//== Abstract equality comparison operator

console.log(5 == "5");        //string "5" coerced to number 5
console.log(0 == false);      //false coerced to 0
console.log(1 == true);       //true coerced to 1
console.log(null == undefined); //special rule, only equal to each other
console.log("" == 0);         // "" coerced to 0
console.log(" " == 0);        //" " coerced to 0 (whitespace string becomes 0)
console.log([] == false);     //[] becomes "" becomes 0, false becomes 0

// Strict Equality comparison operator

console.log(5 === "5");        
console.log(0 === false);      
console.log(1 === true);       
console.log(null === undefined); 
console.log(5 === 5);         
console.log("hello" === "hello");

//Side-by-side comparison

console.log(5 == "5");   //(coercion happens)
console.log(5 === "5"); //(no coercion, types differ)

console.log(null == undefined);  
console.log(null === undefined); 

console.log("" == 0);   
console.log("" === 0); 


//Why === is preferred in practice

let userInput = "0";

if (userInput == false) {
  console.log("This runs!"); // unexpectedly true, because "0" → 0 → false
}

if (userInput === false) {
  console.log("This won't run"); // correctly false, "0" is a string, not boolean
}