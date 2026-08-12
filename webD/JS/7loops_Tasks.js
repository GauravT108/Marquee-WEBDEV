 // tasks

// print even numbers bte 2 & 20

for (let i = 2 ; i <= 20; i++){
    if(i % 2 === 0 ){
        console.log(i);
    }
    
}

// sum of elements in array
const nums = [3, 5, 7, 9];
let sum =0;
for(  let  i = 0; i< nums.length ; i++){
    sum += nums[i];
    
}
console.log(sum);

//  print "*****" annd log it

let stsrs= "";
for(let i =0; i<5; i++){
    stsrs += "*";
}
console.log(stsrs);

//While loop

let i = 0;

while (i<3){
    
    console.log(i);
    i++;
}

// tasks

//Start with let n = 1; and use a while loop to print powers of 2 (2, 4, 8, 16, ...) until the value exceeds 100.

let n = 1;
while (n<=100){
    n = n*2;
    if(n <= 100){
        console.log(n);
    }

}

//2. Simulate a simple counter: Start at `10`; While it’s greater than `0`, decrement and log it.

let n = 10;
while(n >0){
    console.log(n);
    n--;
    
}

// Write a while loop that keeps adding 1 to a variable until it reaches 50.

let x =0; 
while (x < 50){
    x++;
    console.log(x);
}

// doWhile: Guarantees the body runs at least once, even if the condition is false. 

// Example 1

let i = 0;

do {
  i += 1;
  console.log(i);
} while (i < 5);

//Example 2 Divide x by 2 until < 10
let x = 100;

do {
  console.log(x);
  x = x / 2;
} while (x >= 10);

// Tasks

// Use do...while to print numbers from 5 down to 1.
let i =5;
do {
    console.log(i);
    i--;
} while (i >=1);

//Start with let x = 3; and use do...while to multiply x by 2 each time and log it, stopping when x becomes more than 256.

let x = 3;
do{
    
    x =x*2;
    console.log(x);
}while(x <= 256);

// for .