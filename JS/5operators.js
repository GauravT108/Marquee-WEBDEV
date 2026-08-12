//Arithmatc operators

let a = 10, b = 3;

console.log(a + b);  
console.log(a - b);  
console.log(a * b);  
console.log(a / b); 
console.log(a % b); 
console.log(a ** b); 

// Increment / Decrement
let x = 8;
console.log(x++);
console.log(++x);
console.log(x--); 
console.log(--x); 

//comparison operators

console.log(10 > 5);   
console.log(10 < 5);   
console.log(10 >= 10); 
console.log(10 <= 9);  

console.log(10 == "10");  
console.log(10 === "10"); 
console.log(10 != "10");  
console.log(10 !== "10"); 


//logical operators

let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); 
console.log(!hasID); 


let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); 


//Ternary Operator: A shorthand for if...else in a single expression. Syntax: condition ? valueIfTrue : valueIfFalse

let age = 17;
let access = age >= 18 ? "Allowed" : "Denied";
console.log(access); // "Denied"


let marks = 75;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "F";
console.log(grade); // "B"

//Nullish Coalescing Operator (??) :  Returns the right-hand value only if the left-hand value is null or undefined. Unlike ||, it does NOT treat 0, "", or false as "missing" values.

let count = 0;
console.log(count || 10);
console.log(count ?? 10); 

let name = "";
console.log(name || "Anonymous"); 
console.log(name ?? "Anonymous"); 

let user;
console.log(user ?? "Guest"); 

//Why ?? exists: It solves a real bug pattern. Imagine a settings object where 0 is a valid, intentional value (like volume = 0, or quantity = 0):

let settings = { volume: 0 };

console.log(settings.volume || 50); // 50  wrong! 
console.log(settings.volume ?? 50); // 0  correct! 

//You'll also often see it paired with optional chaining (?.):

let user = { profile: null };
console.log(user.profile?.age ?? "Age not set"); 