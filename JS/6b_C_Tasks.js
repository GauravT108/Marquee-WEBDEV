// // Assignment1 **Task:**

// Write a loop from 1 to 20 that:

// - Stops completely when it reaches a number divisible by 7 (use `break`)
// - Logs each number before the break happens

for (let i = 1; i <= 20; i++) {
    if (i % 7 === 0) {
        break;
    }
    console.log( i);
}


// Assignment 2 
// **Task:**

// Given an array of numbers, log only the **positive** numbers, skipping:

// - all negative numbers
// - the number 0

const nums = [3,-2, 0, 5, -1, 4];

for (let i = 0; i < nums.length; i++){
    if (nums[i] <= 0){
        continue;
    }
    if (nums[i] > 0){
        console.log(nums[i]);
    }
}
