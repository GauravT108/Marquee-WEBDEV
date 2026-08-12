// // # rest operator (…): The rest operator collects the remaining values into a single array. It is commonly used in function parameters and destructuring
// function add( a , b, ...rest){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// add(10,20,30,40,50);

// //## In function arguments: You use it when a function can receive any number of values.

// function sum(...numbers){
//     let total = 0;
//     for(let num of numbers){
//         total+= num;
//     }
//     return total;
// }  //Here, ...numbers collects all passed arguments into an array
// console.log(sum(1,2));//3
// console.log(sum(1,2,3));//6

// // Examples
// // 1. Sum of numbers

// function sumAll(...numbers){
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(1,2,3));//6
// console.log(sumAll(2,4,5,7));//18

// //2.Separate first value from the rest:  Write a function that takes at least one number, returns the first number and the remaining numbers separately.
// function splitNumbers(first, ...rest) {
//   return {
//     first,
//     rest
//   };
// }

// console.log(splitNumbers(10, 20, 30, 40));
// // { first: 10, rest: [20, 30, 40] }

// //3) Build a message from words :  Write a function that takes a prefix and then any number of words, and returns a single sentence. Write a function that takes a prefix and then any number of words, and returns a single sentence.

// function makeSentence(prefix, ...words) {
//   return prefix + " " + words.join(" ");
// }

// console.log(makeSentence("Hello", "my", "name", "is", "Gara"));
// // "Hello my name is Sara"

function createCart(category, ...items){
    return{
        category,
        items
    }
}
console.log(createCart("fruit", "apple", "banana", "mango"));